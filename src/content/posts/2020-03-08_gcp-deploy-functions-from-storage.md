---
slug: 'gcp-deploy-functions-from-storage'
title: 'Cloud Storage経由でCloud Buildを動かしてデプロイする'
summary: 'Cloud Storage上にアップロードしたファイルをもとにCloud Buildを動かしてデプロイするやり方について解説しました。'
categories: ['tech']
tags: ['gcp','cloud-functions','cloud-build','cloud-strage','nodejs','javascript']
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
<p><img src="/assets/gcp-deploy-functions-from-storage.svg" alt="全体像"></p>
<p>今回はhello-funcというファンクションを、tar.gzに圧縮したソースからCloud Functionsにデプロイするというシナリオとします。
デプロイ対象はApp Engineとか、別のサービスでもいけるはず。</p>
<h2 id="デプロイ対象">デプロイ対象</h2>
<p>シンプルにHTTPリクエストおくるとHelloが返ってくるFunctionです。Node.jsで書きます。</p>


```javascript
// index.js
exports.hello = (req, res) => {
  res.send('Hello, world!');
}

```


<p>これと、<code>npm init</code>で生成したpackage.jsonを含んだhello-func.tar.gzを作っておきます。</p>


```bash
tar zcvf hello-func.tar.gz index.js package.json

```


<h2 id="ビルドファンクション実装">ビルドファンクション実装</h2>
<p>メインとなるビルド用ファンクションです。<br>Storageのイベントをトリガーとして発火させ、Cloud BuildのAPIを叩いてビルド、デプロイを実行します。</p>
<p>Node.js用のGoogle APIクライアントとして、普通はこちらを使いますが</p>
<p><a href="https://github.com/googleapis/google-api-nodejs-client">googlespis/google-api-nodejs-client</a></p>
<p><a href="https://github.com/googleapis/google-api-nodejs-client#working-with-google-cloud-platform-apis">READMEにも書かれている通り</a>、GCP上で利用する場合は下記のライブラリのほうが使い勝手いいみたいです。</p>
<p><a href="https://github.com/googleapis/google-cloud-node">googleapis/google-cloud-node</a></p>
<p>Cloud Buildの依存を追加します。</p>


```bash
npm init
npm i -S @google-cloud/cloudbuild

```


<p>ビルド用Functionsの実装はこちら。</p>


```javascript
// index.js
'use strict';
const {CloudBuildClient} = require('@google-cloud/cloudbuild');

exports.build = async file => {
    // file.metageneration: メタ情報が更新されるとインクリメントされる値
    // ファイル自体が更新されるときは'1'となる
    if (file.metageneration !== '1') {
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
                    "name": "gcr.io/cloud-builders/gcloud",
                    "args": [
                        "functions",
                        "deploy",
                        "hello-func",
                        "--entry-point=hello",
                        "--runtime=nodejs10",
                        "--memory=128MB",
                        "--region=us-central1",
                        "--trigger-http"
                    ]
                }
            ]
        }
    });
};

```


<p><a href="https://googleapis.dev/nodejs/cloudbuild/latest/v1.CloudBuildClient.html#createBuild">createBuild</a>というメソッドで、任意のオプションからCloud Buildを起動させます。
このリクエストではリポジトリだけでなくCloud Storageを指定することでき、今回やりたかったことが達成できます。</p>
<p>また、リクエストにプロジェクトIDを含める必要があります。
Node.js 8系までは <code>GCP_PROJECT</code> という環境変数で取得できたようですが、Node.js 10系では取得できなくなったようです。</p>
<p><a href="https://cloud.google.com/functions/docs/env-var#environment_variables_set_automatically">環境変数の使用 | Google Cloud Functions に関するドキュメント</a></p>
<p>仕方ないので、デプロイ時のコマンドラインで指定することにしました。
以下のコマンドでbuild-funcをデプロイします。</p>


```bash
gcloud functions deploy build-func \
  --entry-point=build \
  --runtime=nodejs10 \
  --memory=256MB \
  --region=us-central1 \
  --trigger-bucket=src-func \
  --set-env-vars GCP_PROJECT_ID={GCPプロジェクト名}

```


<p><code>--trigger-bucket</code>には、デプロイしたいファイルを置くバケットを指定します。</p>
<h2 id="cloud-buildの権限設定">Cloud Buildの権限設定</h2>
<p>Cloud Buildを使って対象を初めてデプロイする場合、権限設定が必要です。
今回はCloud Functionsをデプロイするのでその開発者と、サービスアカウントユーザーが必要なので付与します。</p>
<p><img src="/assets/cloud-build-settings.png" alt="Cloud Buildの権限設定"></p>
<h2 id="動作確認">動作確認</h2>
<p>準備が整ったところで、Storageの対象バケットにアップロードしてみます。</p>


```bash
gsutil cp hello-func.tar.gz gs://src-func/hello-func.tar.gz

```


<p>このように、正常hello-funcがデプロイされました。</p>
<p><img src="/assets/result-hello-func.png" alt="Functionsの結果"></p>
<h2 id="まとめ">まとめ</h2>
<p>ちょっと面倒ではありますが、ちょっと工夫するだけで実現できたので良かったです。
こんな感じで、トリガーに設定できなくてもAPIが存在すればFunctionsでなんとかなるってことは他にもあるかもですね。</p>

    