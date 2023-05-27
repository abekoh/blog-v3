---
title: 'Spring WebFluxでWebAPI開発するためのTipsいろいろ'
summary: '業務で Spring WebFlux で API 開発を行いました。その際に事前に知っておくべきことや、解決に時間がかかったことなど Tips として備忘録的に残しておきます。'
categories: ['tech']
tags: ['spring','java','reactor']
publishedAt: 2021-07-04T14:30:00.426Z
modifiedAt: 2021-10-13T11:20:00.000Z
draft: false
isHtml: true
microCMSId: 'webflux-tips'
microCMSCreatedAt: 2021-07-04T14:22:56.988Z
microCMSUpdatedAt: 2021-10-13T11:44:28.933Z
microCMSRevisedAt: 2021-10-13T11:44:28.933Z
---
<p>業務で Spring WebFlux で API 開発を行いました。その際に事前に知っておくべきことや、解決に時間がかかったことなど Tips として備忘録的に残しておきます。</p>
<h2 id="spring-webflux-とは？">Spring WebFlux とは？</h2>
<p>Spring MVC とは異なる、もう一つの Spring の Web フレームワーク。<br>その特徴に関連したキーワードを挙げると次の通り</p>
<ul>
<li>ノンブロッキング</li>
<li>関数型</li>
<li>リアクティブ</li>
<li>Netty</li>
<li>非同期につよい</li>
<li>イベントループモデル</li>
</ul>
<p>このあたりの記事を読むと理解が進むと思います。本記事ではいろいろ割愛します。</p>
<ul>
<li><a href="https://spring.pleiades.io/spring-framework/docs/current/reference/html/web-reactive.html">Spring WebFlux リアクティブスタック - リファレンス</a> - 公式ドキュメントの冒頭を読むのおすすめです</li>
<li><a href="https://news.mynavi.jp/itsearch/article/devsoft/5260">【連載】マイクロサービス時代に活きるフレームワーク Spring WebFlux 入門 [1] Spring WebFlux とは｜開発ソフトウェア｜ IT 製品の事例・解説記事</a></li>
<li><a href="https://speakerdeck.com/shintanimoto/introduction-to-reactive-programming-using-spring-webflux">業務で使いたい WebFlux による Reactive プログラミング / Introduction to Reactive Programming using Spring WebFlux - Speaker Deck</a></li>
</ul>
<p>また、WebFlux 実装で重要となる Mono/Flux については次の記事がおすすめです。</p>
<ul>
<li><a href="https://speakerdeck.com/simonbasle/projectreactor-dot-io-reactor3-intro">projectreactor.io reactor3 intro - Speaker Deck</a> - 公式スライド</li>
<li><a href="https://backpaper0.github.io/ghosts/reactive/#1">Spring WebFlux の話</a></li>
</ul>
<h2 id="tips">Tips</h2>
<h3 id="block-は使わない">block は使わない</h3>
<p>次のように書けば、Mono/Flux でラッピングしない通常オブジェクトとして扱える。</p>
<pre><code class="language-java">Result result = repository.get() // returns Mono&lt;Result&gt;
                  .block();      // returns Result
</code></pre>
<p>しかし、こうするとブロッキング IO となってしまい WebFlux の利点が半減、通常のスレッドを多様するアプリケーションとなってしまう。In-&gt;Out 一貫して Mono/Flux で通信すること。</p>
<h3 id="monoflux-の呼び出しの注意">Mono/Flux の呼び出しの注意</h3>
<p><strong>2021/10/13追記: 以下の説明は認識不足で、誤解を招くかもなので訂正。</strong></p>
<p>いわゆるHot vs Coldの話で、Cold Publisherの場合は2回呼び出されてしまう、ということになります。</p>
<p>Hot vs Coldの話は解説記事が多くあるので、それを一読しておくことをオススメします。</p>
<ul>
<li><a href="https://qiita.com/toRisouP/items/f6088963037bfda658d3">RxのHotとColdについて - Qiita</a></li>
<li><a href="https://projectreactor.io/docs/core/release/reference/index.html#reactor.hotCold">Reactor 3 Reference Guide - 9.2. Hot Versus Cold</a></li>
<li><a href="https://spring.io/blog/2019/03/06/flight-of-the-flux-1-assembly-vs-subscription">Flight of the Flux 1 - Assembly vs Subscription</a></li>
<li><a href="https://www.vinsguru.com/reactor-hot-publisher-vs-cold-publisher/">Reactor Hot Publisher vs Cold Publisher | Vinsguru</a></li>
</ul>
<p><del>なんとなく Mono/Flux に置き換えるだけって感じでこんなコードを書いていた。</del></p>
<pre><code class="language-java">Mono&lt;Context&gt; context = contextRepository(contextKey);
Mono&lt;Item&gt;item = itemRepository.get(context, itemKey);
Mono.zip(context, item)
  .subscribe();
</code></pre>
<p><del>一見問題なさそうだが、これだと<strong>contextRepository.get()が 2 回呼び出されてしまい、無駄な IO が発生してしまう。</strong><br>Mono は subscribe されるたび、その開始時点の publisher からすべて実行されるためである。</del></p>
<p><del>次のように書けば OK。</del></p>
<pre><code class="language-java">Mono&lt;Context&gt; context = contextRepository(contextKey);
Mono.zipWhen(context, itemRepository.get(context, itemKey)
  .subscribe();
</code></pre>
<h3 id="api-ルーティング方法">API ルーティング方法</h3>
<p>Spring WebFlux では、MVC と同様<code>@GetMapping</code>といったアノテーションでルーティングする方法のほかに、RouterFunctions を用いてルーティング可能。</p>
<p><a href="https://www.baeldung.com/spring-5-functional-web">Introduction to the Functional Web Framework in Spring 5 | Baeldung</a></p>
<p>より関数型を活かした感じで書けるのでおすすめ。</p>
<h3 id="fire-and-forget-パターン">fire-and-forget パターン</h3>
<p>「リクエスト投げっぱなしでレスポンスは待つ必要ない」ってパターンは次のように書くとよい。</p>
<pre><code class="language-java">repository.get() // returns Mono&lt;Result&gt;
  .doOnNext(result -&gt; serv ice.doAsync(result).subscribe()) // serviceに投げっぱなし
  .subscribe();
</code></pre>
<p>次のページを参考にしました。</p>
<ul>
<li><a href="https://stackoverflow.com/questions/57566465/fire-and-forget-with-reactor">spring - Fire and forget with reactor - Stack Overflow</a></li>
<li><a href="https://stackoverflow.com/questions/53144086/how-make-fire-and-forget-request-sending-in-spring-webflux-webclient">java - How make &quot;fire and forget&quot; request sending in spring webflux webclient? - Stack Overflow</a></li>
</ul>
<h3 id="キャッシュ">キャッシュ</h3>
<p>Spring Cache の<code>@Cachable</code>みたいなのを使うにはどうすれば？ってことで調べると次の記事がヒットした。</p>
<p><a href="https://stackoverflow.com/questions/48156424/spring-webflux-and-cacheable-proper-way-of-caching-result-of-mono-flux-type">Spring Webflux and @Cacheable - proper way of caching result of Mono / Flux type - Stack Overflow</a></p>
<p>&quot;Hack way&quot;の通り Reactor の<code>.cache()</code>とアノテーションでも実現可能であるが、</p>
<ul>
<li>キャッシュ入れる or 入れないといった複雑な制御が難しい</li>
<li>ブラックボックス感ある</li>
<li>テストしにくい
といった理由で、後者の Reactor Addons を使うパターンがおすすめ。</li>
</ul>
<p><a href="https://github.com/reactor/reactor-addons">reactor/reactor-addons: Official modules for the Reactor project</a></p>
<pre><code class="language-java">var id = &quot;785AC2D5-5CBE-4170-90A0-F9E327B09B5C&quot;;
CacheMono.lookup(key -&gt; Mono.justOrEmpty(cacheManager.getCache(&quot;CACHE_NAME&quot;).get(key, Result.class)))
  .map(Signal::next), id)
  .onCacheMissResume(() -&gt; repository.get(id)) // キャッシュヒットしない場合は取りに行く
  .andWriteWith((key, signal) -&gt; Mono.fromRunnable()
    -&gt; Optional.ofNullable(signal.get())
        .ifPresent(result -&gt; cacheManager.getCache(&quot;CACHE_NAME&quot;).put(key, result)) // 値がemptyやerrorでない場合、結果をキャッシュに保存
  );
</code></pre>
<h3 id="webclient">WebClient</h3>
<p>WebFlux の標準の HTTP クライアントとして WebClient が用意されている。</p>
<pre><code class="language-java">WebClient webClient = WebClient.builder().builder();
webClient.post()
  .uri(&quot;https://example.com/do&quot;)
  .contentType(MediaType.APPLICATION_JSON)
  .body(BodyInserters.fromValue(new Request()))
  .retrieve()
  .bodyToMono(Response.class);
</code></pre>
<p>Spring MVC などでも、<code>block()</code>すれば使える。</p>
<p><del>(従来の RestTemplate はメンテモードに入って今後の機能拡張は WebClient のみって話をどこかで聞いた気がするが、出典見つからず不明…)</del><br>2021/07/05追記: <a href="https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/web/client/RestTemplate.html">RestTemplateのドキュメント</a>に記載がありました。</p>
<blockquote>
<p>NOTE: As of 5.0 this class is in maintenance mode, with only minor requests for changes and bugs to be accepted going forward. Please, consider using the org.springframework.web.reactive.client.WebClient which has a more modern API and supports sync, async, and streaming scenarios.</p>
</blockquote>
<h3 id="テスト">テスト</h3>
<p>Mono で返却される値をテストする場合、<code>block()</code>を使って頑張るのもありだがもっと便利なのが reactor-test で用意されている。</p>
<p><a href="https://projectreactor.io/docs/test/release/api/reactor/test/StepVerifier.html">StepVerifier (reactor-test 3.4.7)</a></p>
<p>基本的に expectNextMatches で assertion</p>
<pre><code class="language-java">var actual = repository.get(key); // returns Mono&lt;Result&gt;
StepVerifier.create(actual)
  .expectNextMatches(result -&gt; result.isOk())
  .verifyComplete();
</code></pre>
<p>モックの verify をしたい場合、actual を complete させないといけない。</p>
<pre><code class="language-java">var actual = service.doAsync();
StepVerifier.create(actual)
  .expectNextCount(1) // # of results are only 1
  .verifyComplete();
verify(repository, times(1)).get(eq(&quot;key&quot;));
</code></pre>
<h3 id="logger">logger</h3>
<p>ロガーとして従来どおり SLF4J + Logback が使えるが、ブロッキング IO なので非同期として設定しておいたほうがよい。<code>ch.qos.Logback.classic.AsyncAppender</code>を使うのがよい。</p>
<pre><code class="language-xml">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;configuration&gt;
    &lt;appender name=&quot;ASYNC_STDOUT&quot; class=&quot;ch.qos.logback.classic.AsyncAppender&quot;&gt;
        &lt;appender-ref ref=&quot;STDOUT&quot;/&gt;
    &lt;/appender&gt;
    &lt;root level=&quot;INFO&quot;&gt;
        &lt;appender-ref ref=&quot;ASYNC_STDOUT&quot;/&gt;
    &lt;/root&gt;
&lt;/configuration&gt;
</code></pre>
<p>次のページを参考にした。</p>
<p><a href="https://stackoverflow.com/questions/56037188/is-logging-a-non-blocking-operation-in-spring-webflux">maven 3 - Is logging a non-blocking operation in Spring Webflux? - Stack Overflow</a></p>
<h2 id="まとめ">まとめ</h2>
<p>Spring WebFlux は日本語情報も少なくつまずきまくりますが、やはりパフォーマンス面で優位性は大きく、Mono/Flux も慣れてくると楽しいのでおすすめです。</p>
    