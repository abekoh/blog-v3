---
title: 'Spring Boot+Kubernetesでサービスイン前にウォームアップ処理を行う'
summary: 'HotSpot JVMを用いた一般的なJavaは、起動直後はインタプリタのように動作するため、パフォーマンスが出ません。
サービスインからすぐにパフォーマンスを出すためには、ウォームアップ(暖機運転)が必須です。
本記事ではSpring Boot+Kubernetesという環境という前提で、その対応方法を紹介します。'
categories: ['tech']
tags: ['java','spring','kubernetes']
publishedAt: 2021-05-04T02:00:00.150Z
modifiedAt: 
draft: false
isHtml: true
microCMSId: 'warmup-java-with-spring-and-k8s'
microCMSCreatedAt: 2021-05-03T16:33:19.334Z
microCMSUpdatedAt: 2021-10-13T11:26:38.575Z
microCMSRevisedAt: 2021-10-13T11:26:38.575Z
---
<p>
  HotSpot
  JVMを用いた一般的なJavaは、起動直後はインタプリタのように動作するため、パフォーマンスが出ません。<br />
  サービスインからすぐにパフォーマンスを出すためには、ウォームアップ(暖機運転)が必須です。<br />
  本記事ではSpring
  Boot+Kubernetesという環境という前提で、その対応方法を紹介します。<br />
</p>
<h2 id="hc684259255">サンプルコード</h2>
<p>
  こちらに置いております。<br />
  <a
    href="https://github.com/abekoh/spring-warmup-on-k8s"
    target="_blank"
    rel="noopener noreferrer"
    >abekoh&#x2F;spring-warmup-on-k8s</a
  ><br />
</p>
<h2 id="he348072487">アプリケーションについて</h2>
<p>
  ユーザ登録を行うだけのWebAPIを用意しています。実際にはDB書き込みなどは行わず、標準出力ログとして流れるだけです。
</p>
<pre><code class="language-bash">$ cat &#x2F;tmp&#x2F;req.json
{
    &quot;firstName&quot;: &quot;Taro&quot;,
    &quot;lastName&quot;: &quot;Yamada&quot;,
    &quot;birthYear&quot;: 1990,
    &quot;birthMonth&quot;: 5,
    &quot;birthDate&quot;: 3
}
$ curl -s -X POST -H &quot;Content-Type: application&#x2F;json&quot; http:&#x2F;&#x2F;localhost:30080&#x2F;api&#x2F;users -d @&#x2F;tmp&#x2F;req.json | jq .
{
  &quot;isSucceeded&quot;: true,
  &quot;userAddResponse&quot;: {
    &quot;user&quot;: {
      &quot;userId&quot;: {
        &quot;id&quot;: &quot;59036d2f-55e5-4977-bbe7-caaa515ba030&quot;
      },
      &quot;name&quot;: {
        &quot;firstName&quot;: &quot;Taro&quot;,
        &quot;lastName&quot;: &quot;Yamada&quot;
      },
      &quot;birthday&quot;: {
        &quot;date&quot;: &quot;1990-05-03&quot;
      },
      &quot;isDummy&quot;: false
    }
  }
}</code></pre>
<h2 id="hd8259c9423">
  <br />
  ウォームアップ処理について
</h2>
<p>本題です。</p>
<h3 id="h1877ce51fa">Liveness Probe &#x2F; Readiness Probe の設定</h3>
<p>
  まず、ウォームアップが終わってサービスインができるか否かを判別できるように設定を施します。<br />
  Kubenetes(以下k8s)では「アプリケーションが生きているか」を確認するLiveness
  Probe, 「アプリケーションがリクエストを受け付けて良いか」を確認するRediness
  Probeという仕組みがあります。<br />
  <a
    href="https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/"
    target="_blank"
    rel="noopener noreferrer"
    >Configure Liveness, Readiness and Startup Probes | Kubernetes</a
  ><br />
  <br />
  この仕様に簡単に対応できる設定が、Spring Boot 2.3にて追加されました。<br />
  <a
    href="https://spring.io/blog/2020/03/25/liveness-and-readiness-probes-with-spring-boot"
    target="_blank"
    rel="noopener noreferrer"
    >Liveness and Readiness Probes with Spring Boot</a
  ><br />
  有効にするには
  <a
    href="https://docs.spring.io/spring-boot/docs/current/reference/html/production-ready-features.html"
    target="_blank"
    rel="noopener noreferrer"
    >Spring Boot Actuator</a
  >
  を導入、 <code>management.endpoint.health.probes.enabled=true</code> または
  <code>spring.main.cloud-platform=kubernetes</code
  >と設定を追記すればOKです。<br />
  後者だと他にもk8sに関する設定がなされるようなので、サンプルでは後者を選んでいます。<br />
  <br />
  k8sのdeployment.yamlは次のように設定します。
</p>
<pre><code class="language-yaml">livenessProbe:
  httpGet:
    path: &#x2F;actuator&#x2F;health&#x2F;liveness
    port: 8080
readinessProbe:
  httpGet:
    path: &#x2F;actuator&#x2F;health&#x2F;readiness
    port: 8080</code></pre>
<p>
  ここではデフォルトのままですが、起動ループに陥る場合などは<code>periodSeconds</code>,
  <code>initialDelaySeconds</code>,
  <code>failureThreshold</code> の設定を見直しましょう。
</p>
<h3 id="h814c9a5833">
  <br />
  ウォームアップの実行
</h3>
<p>
  ウォームアップとして行うことは単純で、事前にリクエストをたくさん投げておくことです。<br />
  ここでは Spring Bootの
  <a
    href="https://docs.spring.io/spring-boot/docs/current/api/org/springframework/boot/ApplicationRunner.html"
    target="_blank"
    rel="noopener noreferrer"
    >ApplicationRunner</a
  >
  を実装したクラスにその処理を書きます。<br />
  <br />
  <strong
    >ApplicationRunnerはアプリケーション起動後、サービスイン前という状態で実行されます。</strong
  ><br />
  <strong
    >このとき、LivenessProbe=OK、ReadinessProbe=NGという状態になります。</strong
  ><br />
  <a href="https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#boot-features-application-availability"
    >Spring Boot Reference Documentation &#x2F; 4.1.6. Application Availability </a
  ><br />
  ウォームアップ処理のために事前リクエストを行うにはちょうど良いタイミングです。<br />
  <br />
  以下はそのサンプルです。<br />
  HTTPクライアントは何でも良いですが、Spring WebFluxの<a
    href="https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/web/reactive/function/client/WebClient.html"
    target="_blank"
    rel="noopener noreferrer"
    >WebClient</a
  >がMVCでも使えるとのことで、それで実装してみました。
</p>
<pre><code class="language-java">@Slf4j
@Component
public class WarmupRunner implements ApplicationRunner {

  private final WebClient webClient;

  private final WarmupProperty warmupProperty;

  public WarmupRunner(
      WebClient.Builder webClientBuilder,
      WarmupProperty warmupProperty,
      @Value(&quot;${server.port}&quot;) Integer port) {
    this.webClient =
        webClientBuilder.baseUrl(String.format(&quot;http:&#x2F;&#x2F;localhost:%d&#x2F;api&#x2F;users&quot;, port)).build();
    this.warmupProperty = warmupProperty;
  }

  @Override
  public void run(ApplicationArguments args) throws Exception {
    if (warmupProperty.getRequestCount() == null || warmupProperty.getRequestCount() &lt;= 0) {
      log.info(&quot;skip warmup&quot;);
      return;
    }
    var request =
        WebApiUserAddRequest.builder()
            .firstName(&quot;Taro&quot;)
            .lastName(&quot;Yamada&quot;)
            .birthYear(1970)
            .birthMonth(1)
            .birthDate(1)
            .isDummy(true)
            .build();
    log.info(&quot;start warmup&quot;);
    webClient
        .post()
        .contentType(MediaType.APPLICATION_JSON)
        .bodyValue(request)
        .retrieve()
        .bodyToMono(Object.class) &#x2F;&#x2F; 結果は使わないので適当なところにマッピング
        .repeat(warmupProperty.getRequestCount())
        .blockLast();
    log.info(&quot;finish warmup&quot;);
  }
}</code></pre>
<p>
  リクエストを実行する回数はWarmupPropertyというクラスに設定値が入るようにしております。<br />
</p>
<h2 id="h9445791c75">ベンチマーク</h2>
<p>
  試しにどれくらいウォームアップによる効果があるのか、ベンチマークを実施してみました。<br />
  scripts&#x2F;generate_request.pyにランダムなリクエストを生成できるPythonスクリプトを置き、<a
    href="https://github.com/tsenart/vegeta"
    target="_blank"
    rel="noopener noreferrer"
    >vegeta</a
  >を使ってテストしました。
</p>
<pre><code class="language-bash">python3 scripts&#x2F;generate_requests.py | vegeta attack -rate=1000&#x2F;s -lazy -format=json -duration=60s &gt; &#x2F;tmp&#x2F;result.bin</code></pre>
<p>
  <br />
  対象はreplicas=2として2podsで動くアプリケーションで、1000RPSで60秒間投げてみました。<br />
  ウォームアップのリクエスト回数別の結果は次のとおりです。
</p>
<table class="tg">
  <thead>
    <tr>
      <th class="tg-0pky"></th>
      <th class="tg-0pky">min</th>
      <th class="tg-0pky">mean</th>
      <th class="tg-0pky">50</th>
      <th class="tg-0pky">90</th>
      <th class="tg-0lax">95</th>
      <th class="tg-0lax">99</th>
      <th class="tg-0lax">max</th>
    </tr>
  </thead>
  <tbody style="text-align: right">
    <tr>
      <td class="tg-0pky">0</td>
      <td class="tg-0pky">0.499</td>
      <td class="tg-0pky">11.074</td>
      <td class="tg-0pky">0.660</td>
      <td class="tg-0pky">0.988</td>
      <td class="tg-0lax">1.338</td>
      <td class="tg-0lax">529.671</td>
      <td class="tg-0lax">1396.000</td>
    </tr>
    <tr>
      <td class="tg-0pky">100</td>
      <td class="tg-0pky">0.507</td>
      <td class="tg-0pky">1.608</td>
      <td class="tg-0pky">0.703</td>
      <td class="tg-0pky">1.052</td>
      <td class="tg-0lax">1.287</td>
      <td class="tg-0lax">2.65</td>
      <td class="tg-0lax">286.235</td>
    </tr>
    <tr>
      <td class="tg-0lax">1,000</td>
      <td class="tg-0lax">0.518</td>
      <td class="tg-0lax">1.688</td>
      <td class="tg-0lax">0.720</td>
      <td class="tg-0lax">1.042</td>
      <td class="tg-0lax">1.267</td>
      <td class="tg-0lax">2.314</td>
      <td class="tg-0lax">312.099</td>
    </tr>
    <tr>
      <td class="tg-0lax">10,000</td>
      <td class="tg-0lax">0.512</td>
      <td class="tg-0lax">1.309</td>
      <td class="tg-0lax">0.652</td>
      <td class="tg-0lax">0.823</td>
      <td class="tg-0lax">0.918</td>
      <td class="tg-0lax">1.384</td>
      <td class="tg-0lax">242.643</td>
    </tr>
  </tbody>
</table>
<p>
  行はそれぞれウォームアップのリクエスト数が0回、100回…となります。各セルの単位はミリ秒です。<br />
  50,90,95,99はそれぞれパーセンタイル値で、例えば「99%のリクエストはこのレスポンスタイムに抑えられる」という値となります。
</p>
<p>
  0回とその他では平均値、最大値が大きく異なります。100回と1,000回ではあまり変わらない結果となりました。(むしろ悪化してるところも)<br />
  10,000回では特に最適化されているように見えます。<br />
  さらに細かく調整すればより良くなると思いますが、ウォームアップの有用性が確認できました。
</p>
<h2 id="h44e51f96ce">参考資料</h2>
<p>以下の資料が非常に参考になりました。</p>
<ul>
  <li>
    <a
      href="https://note.com/suwash/n/n69f773da0cf6"
      target="_blank"
      rel="noopener noreferrer"
      >2020-06-16 JSUG勉強会 2020年その5 Spring Boot 2.3 徹底解説
      #jsug｜諏訪真一｜note</a
    >
    <ul>
      <li>
        こちらに貼ってある&quot;Deep dive into Spring Boot
        2.3&quot;のスライドが非常に参考になります。
      </li>
    </ul>
  </li>
  <li>
    <a
      href="https://speakerdeck.com/hhiroshell/jvm-on-kubernetes"
      target="_blank"
      rel="noopener noreferrer"
      >KubernetesでJVMアプリを動かすための実践的ノウハウ集 &#x2F; JVM on
      Kubernetes - Speaker Deck</a
    >
    <ul>
      <li>
        こちらではサイドカーでウォームアップを行う手法が紹介されています。その他の設定についても勉強になります。
      </li>
    </ul>
  </li>
</ul>
    