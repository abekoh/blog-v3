---
title: 'Google API の OAuth 2.0トークン取得するツールつくった'
summary: 'undefined ?? '''
categories: ['tech']
tags: ['golang','google-photos']
publishedAt: 2019-12-21T04:52:48.000Z
modifiedAt: 
draft: false
isHtml: true
microCMSId: 'get-google-token-with-go'
microCMSCreatedAt: 2021-03-20T14:57:30.193Z
microCMSUpdatedAt: 2021-04-10T13:41:59.762Z
microCMSRevisedAt: 2021-04-10T13:41:59.762Z
---
<p>Google PhotosのAPIつかって自動アップロードするバッチつくってみたくて調べたところ、
GCPサービスみたくサービスアカウント使う、ってことはできないみたいだった</p>
<p><a href="https://developers.google.com/photos/library/guides/authentication-authorization#service-accounts">https://developers.google.com/photos/library/guides/authentication-authorization#service-accounts</a></p>
<p>OAuth 2.0の認証フローをたどる必要があるみたい。</p>
<p>とはいえバッチつくるとき、初回のみ認証→次からはrefresh tokenで再利用という流れになるんだろうけど
初回のみ認証の実装をケチりたかったので、refresh token取得まで簡単に取得できるツールみたいなの書いてみた。</p>
<p><a href="https://github.com/abekoh/get-google-tokens">abekoh/get-google-tokens</a></p>
<ol>
<li><p>GCPサイドバー-&gt;APIとサービス-&gt;認証情報 より、認証情報を作成-&gt;OAuthクライアントID を選択</p>
</li>
<li><p>用途に応じた種類を選ぶ。任意の名前をつける。JS生成元・リダイレクトURIは <a href="http://localhost:8080">http://localhost:8080</a> を指定
<img src="https://images.microcms-assets.io/assets/4f79e018736547879adf5670ebeaccc3/c5f0e86c25dc43bdb3ae11c83da64117/setup-google-oauth.png" alt="Google API OAuth 2.0設定"></p>
</li>
<li><p>認証情報一覧から、ダウンロードボタンを押す。client_secret_XXX.apps.googleusercontent.com..jsonのようなjsonファイルが手に入る。</p>
</li>
<li><p>token取得ツールインストール</p>
<pre><code class="language-bash">go get github.com/abekoh/get-google-tokens
</code></pre>
</li>
<li><p>次を実行。例では、Google Photos APIにアップロードする権限のみ。</p>
<pre><code class="language-none">get-google-tokens -json client_secret_XXX.apps.googleusercontent.com.json -scope https://www.googleapis.com/auth/photoslibrary.appendonly
</code></pre>
<p>photoのスコープはここ参照
<a href="https://developers.google.com/photos/library/guides/authentication-authorization">https://developers.google.com/photos/library/guides/authentication-authorization</a></p>
</li>
<li><p>実行するとURLが表示されるので、アクセス。そしてスコープを許可。「このアプリは確認されていません」と表示されても進める。</p>
</li>
<li><p>リダイレクトされてlocalhostに移った後、ターミナルのほうを確認。Access TokenとRefresh Tokenが表示されている。</p>
</li>
</ol>
<p>仕組みとしては、リダイレクト時にURLパラメータに<code>code=</code>と認証コードが入るので、
それをWebサーバで受け取って、チャンネル送信して、POSTリクエストでトークン取得するという流れ。</p>
<p>Go久しぶり書きましたが、こんな感じでWebサーバー立ち上げ簡単にできる点、CLI化も楽な点がよいですね。</p>
<h2 id="参考">参考</h2>
<ul>
<li><a href="https://qiita.com/iwaseasahi/items/2363dc1d246bc06baeae">Google API OAuth2.0のアクセストークン&amp;リフレッシュトークン取得手順 2017年2月版 - Qiita</a></li>
</ul>

    