---
title: 'Cloud Storage経由でCloud Buildを動かしてデプロイする'
summary: 'Cloud Storage上にアップロードしたファイルをもとにCloud Buildを動かしてデプロイするやり方について解説しました。 ?? '''
categories: ['tech']
tags: ['GCP','Cloud Functions','Cloud Build','Cloud Storage','Node.js','JavaScript']
publishedAt: 2020-03-08T14:30:00.000Z
modifiedAt: 
draft: false
isHtml: true
microCMSId: 'gcp-deploy-functions-from-storage'
microCMSCreatedAt: 2021-03-20T14:57:30.148Z
microCMSUpdatedAt: 2021-04-17T13:29:32.428Z
microCMSRevisedAt: 2021-04-17T13:29:32.428Z
---
<p>GCPサービスの1つ、<a href="https://cloud.google.com/cloud-build">Cloud Build</a>はいわゆるCI/CDツールです。
GithubなどGitレポジトリに紐づけてトリガーさせて使うのが普通だと思います。UIから設定できるトリガーとしても現状、リポジトリ経由しか選択できません。</p>
<p>しかし、業務のある都合で<a href="https://cloud.google.com/storage">Cloud Storage</a>経由でデプロイしたいことがありまして。
やり方を模索してみてうまくいったので、メモっておきます。</p>
<h2 id="ソース">ソース</h2>
<p>こちらに置いてます。</p>
<p><a href="https://github.com/abekoh/gcp-deploy-from-storage">abekoh/gcp-deploy-from-storage</a></p>
<h2 id="全体像">全体像</h2>
<p><img src="https://images.microcms-assets.io/assets/4f79e018736547879adf5670ebeaccc3/fb07fc3a9b2b447fa5c4eadd77006341/gcp-deploy-functions-from-storage.svg" alt="全体像"></p>
<p>今回はhello-funcというファンクションを、tar.gzに圧縮したソースからCloud Functionsにデプロイするというシナリオとします。
デプロイ対象はApp Engineとか、別のサービスでもいけるはず。</p>
<h2 id="デプロイ対象">デプロイ対象</h2>
<p>シンプルにHTTPリクエストおくるとHelloが返ってくるFunctionです。Node.jsで書きます。</p>
<pre><code class="language-javascript">// index.js
exports.hello = (req, res) =&gt; {
  res.send(&#39;Hello, world!&#39;);
}
</code></pre>
<p>これと、<code>npm init</code>で生成したpackage.jsonを含んだhello-func.tar.gzを作っておきます。</p>
<pre><code class="language-bash">tar zcvf hello-func.tar.gz index.js package.json
</code></pre>
<h2 id="ビルドファンクション実装">ビルドファンクション実装</h2>
<p>メインとなるビルド用ファンクションです。<br>Storageのイベントをトリガーとして発火させ、Cloud BuildのAPIを叩いてビルド、デプロイを実行します。</p>
<p>Node.js用のGoogle APIクライアントとして、普通はこちらを使いますが</p>
<p><a href="https://github.com/googleapis/google-api-nodejs-client">googlespis/google-api-nodejs-client</a></p>
<p><a href="https://github.com/googleapis/google-api-nodejs-client#working-with-google-cloud-platform-apis">READMEにも書かれている通り</a>、GCP上で利用する場合は下記のライブラリのほうが使い勝手いいみたいです。</p>
<p><a href="https://github.com/googleapis/google-cloud-node">googleapis/google-cloud-node</a></p>
<p>Cloud Buildの依存を追加します。</p>
<pre><code class="language-bash">npm init
npm i -S @google-cloud/cloudbuild
</code></pre>
<p>ビルド用Functionsの実装はこちら。</p>
<pre><code class="language-javascript">// index.js
&#39;use strict&#39;;
const {CloudBuildClient} = require(&#39;@google-cloud/cloudbuild&#39;);

exports.build = async file =&gt; {
    // file.metageneration: メタ情報が更新されるとインクリメントされる値
    // ファイル自体が更新されるときは&#39;1&#39;となる
    if (file.metageneration !== &#39;1&#39;) {
        return;
    }
    // Promiseを返却することで、解決させてfunctionsが終了する
    return new CloudBuildClient().createBuild({
        projectId: process.env.GCP_PROJECT_ID,
        build: {
            source: {
                storageSource: {
                    // バケット名
                    bucket: file.bucket,
                    // ファイル名
                    object: file.name
                }
            },
            steps: [
                {
                    &quot;name&quot;: &quot;gcr.io/cloud-builders/gcloud&quot;,
                    &quot;args&quot;: [
                        &quot;functions&quot;,
                        &quot;deploy&quot;,
                        &quot;hello-func&quot;,
                        &quot;--entry-point=hello&quot;,
                        &quot;--runtime=nodejs10&quot;,
                        &quot;--memory=128MB&quot;,
                        &quot;--region=us-central1&quot;,
                        &quot;--trigger-http&quot;
                    ]
                }
            ]
        }
    });
};
</code></pre>
<p><a href="https://googleapis.dev/nodejs/cloudbuild/latest/v1.CloudBuildClient.html#createBuild">createBuild</a>というメソッドで、任意のオプションからCloud Buildを起動させます。
このリクエストではリポジトリだけでなくCloud Storageを指定することでき、今回やりたかったことが達成できます。</p>
<p>また、リクエストにプロジェクトIDを含める必要があります。
Node.js 8系までは <code>GCP_PROJECT</code> という環境変数で取得できたようですが、Node.js 10系では取得できなくなったようです。</p>
<p><a href="https://cloud.google.com/functions/docs/env-var#environment_variables_set_automatically">環境変数の使用 | Google Cloud Functions に関するドキュメント</a></p>
<p>仕方ないので、デプロイ時のコマンドラインで指定することにしました。
以下のコマンドでbuild-funcをデプロイします。</p>
<pre><code class="language-bash">gcloud functions deploy build-func \
  --entry-point=build \
  --runtime=nodejs10 \
  --memory=256MB \
  --region=us-central1 \
  --trigger-bucket=src-func \
  --set-env-vars GCP_PROJECT_ID={GCPプロジェクト名}
</code></pre>
<p><code>--trigger-bucket</code>には、デプロイしたいファイルを置くバケットを指定します。</p>
<h2 id="cloud-buildの権限設定">Cloud Buildの権限設定</h2>
<p>Cloud Buildを使って対象を初めてデプロイする場合、権限設定が必要です。
今回はCloud Functionsをデプロイするのでその開発者と、サービスアカウントユーザーが必要なので付与します。</p>
<p><img src="https://images.microcms-assets.io/assets/4f79e018736547879adf5670ebeaccc3/b6e476cf2b8f44a184c181b158484972/cloud-build-settings.png" alt="Cloud Buildの権限設定"></p>
<h2 id="動作確認">動作確認</h2>
<p>準備が整ったところで、Storageの対象バケットにアップロードしてみます。</p>
<pre><code class="language-bash">gsutil cp hello-func.tar.gz gs://src-func/hello-func.tar.gz
</code></pre>
<p>このように、正常hello-funcがデプロイされました。</p>
<p><img src="https://images.microcms-assets.io/assets/4f79e018736547879adf5670ebeaccc3/ef53a10ecb2c47958467d60e7bfcd3ec/result-hello-func.png" alt="Functionsの結果"></p>
<h2 id="まとめ">まとめ</h2>
<p>ちょっと面倒ではありますが、ちょっと工夫するだけで実現できたので良かったです。
こんな感じで、トリガーに設定できなくてもAPIが存在すればFunctionsでなんとかなるってことは他にもあるかもですね。</p>

    