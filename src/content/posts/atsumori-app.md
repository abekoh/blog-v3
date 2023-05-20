---
title: 'あつ森のアイテムカタログサービスつくった、けれど公開はやめた話'
summary: '自粛期間にNuxt.js,Firebaseなど使ってあつ森のアイテムカタログサービスつくってみた ?? '''
categories: ['tech']
tags: ['Firebase','Nuxt.js','Vue.js','JavaScript','個人開発']
publishedAt: 2020-06-28T06:08:00.000Z
modifiedAt: 
draft: false
isHtml: true
microCMSId: 'atsumori-app'
microCMSCreatedAt: 2021-03-20T14:57:30.195Z
microCMSUpdatedAt: 2021-04-17T13:28:15.298Z
microCMSRevisedAt: 2021-04-17T13:28:15.298Z
---
<p>3月ごろからあつ森にハマり、それから自粛期間に入りまして。
お家時間増えたし何か個人開発したい！と思い、思いついたのが「あつ森のアイテムをWeb上でらくらくに検索したりできるサービス」でした。</p>
<p>1ヶ月くらいかけてコツコツと作りあげたものの、公開しよう！ってタイミングで結局諦めることにしました。
実際どんなもの作ったか、公開やめた理由、どんな学びがあったのか、成仏のためにも記事にしようと思います。</p>
<h2 id="どんなサービス？">どんなサービス？</h2>
<p>あつ森に出てくる家具、服などのアイテムを簡単に検索でき、そのバリエーションや入手方法などをチェックすることができます。</p>
<p>デモはこちら。
<img src="https://images.microcms-assets.io/assets/4f79e018736547879adf5670ebeaccc3/aae7fbb9d5c0416c9e2fdbb99e261b00/atsumori-app-pc.gif" alt="atsumori-app-pc">
左側のメニューから、キーワード検索でアイテムを探すことができます。しぼりこみ検索では「ジョニーからもらえる家具」といった条件で検索ができます。
またマイリスト機能もつけていまして、ログインしていたら欲しい物を管理、公開することが可能になってます。</p>
<p>レスポンシブなので、スマホにも対応しています。
<img src="https://images.microcms-assets.io/assets/4f79e018736547879adf5670ebeaccc3/b887618500ad4bbfa17d6ad08784aea7/atsumori-app-sm.gif" alt="atsumori-app-sm"></p>
<h2 id="なぜ公開をやめたか">なぜ公開をやめたか</h2>
<p>やっぱり著作権的にアウトだと判断し、お蔵入りにすることにしました。</p>
<p>多くのあつ森攻略サイトで家具一覧ページが存在していたり、某ポケモン攻略サイトが公式からOKもらっていたりと前例があるので、
1ファンサイトとして公開してもいいかなと思ってましたが…</p>
<ul>
<li>公式の画像バリバリ使ってしまってる点は、二次利用として「常識の範囲」を超えている点</li>
<li>「ゲーム買わなくてもこれ見たら満足してしまう」という不利益を与えてしまう可能性がある点</li>
</ul>
<p>など、不安が残る点がクリアにできず。
個人的には任天堂の大ファンなので、変に迷惑かけるのも嫌でして。あくまで個人範囲で楽しむものまでに留めることにしました。</p>
<h2 id="学びなど">学びなど</h2>
<p>諦めたものの、Webアプリをしっかり個人開発したのが初だったので多くの学びがありました。
その学びを備忘録的にメモしておこうと思います。</p>
<p>今回つかった技術まわりは次の通りです。</p>
<ul>
<li>フロント<ul>
<li>Nuxt.js<ul>
<li>SPAモード</li>
<li>not TypeScript</li>
</ul>
</li>
<li>Vuetify</li>
</ul>
</li>
<li>データまわり<ul>
<li>Python (アイテムデータの収集、整形、DB登録など)</li>
</ul>
</li>
<li>インフラ<ul>
<li>Firebase<ul>
<li>Authentication</li>
<li>Cloud Firestore</li>
<li>Hosting</li>
<li>(Functions)</li>
</ul>
</li>
<li>Algolia (全文検索エンジン)</li>
</ul>
</li>
</ul>
<p>以下、感想など</p>
<h3 id="vuetifyがつよい">Vuetifyがつよい</h3>
<p><a href="https://vuetifyjs.com/">Vue Material Design Component Framework — Vuetify.js</a></p>
<p>デザインフレームワークとして今回Vuetifyを選んだのですが、強力すぎてビビりました。
CSSを全く書くことなく、HTMLテンプレ書くだけでいい感じの見た目になります。</p>
<p>Googleの提唱するマテリアルデザインに沿ったものなので、見た目は最近のGoogleサービスっぽくなります。
実際<a href="https://vuetifyjs.com/ja/getting-started/pre-made-layouts/">レイアウトサンプル</a>もGoogleライクなのが挙げられてますね。</p>
<p>加えて、多く意識せずともレスポンシブになります。
当初はPCブラウザサイズでしか動作確認してませんでしたが、ふとDeveloper Toolsでスマホサイズにしてみてもほとんど崩れませんでした。<br>(pxで大きめなwidth指定していても、勝手にmax-width設定されたりしてるっぽい)</p>
<p>きちんとレスポンシブを意識するにも、「スマホならこれくらい、タブレットならこれくらい」とサクッと設定可能です。
例えば<a href="https://vuetifyjs.com/ja/components/grids/">Grids</a>を採用するとき、画面を水平に12ブロックに分けたものと考えるので</p>
<p>「スマホ以下だと画面いっぱい、それ以上は半分くらい」にレイアウトしたいときは</p>
<pre><code class="language-html">&lt;v-row&gt;
  &lt;v-col cols=&quot;12&quot; sm=&quot;6&quot;&gt;
    &lt;v-card /&gt;
  &lt;/v-col&gt;
&lt;/v-row&gt;
</code></pre>
<p>と、デフォルトでは画面いっぱい<code>cols=&quot;12&quot;</code>、スマホサイズより大きければ<code>sm=&quot;6&quot;</code>という設定が反映されます。
これだけでいい感じにスマホ対応できるのでとにかく楽しいですね。</p>
<h3 id="考えなしにssrやるとハマる">考えなしにSSRやるとハマる</h3>
<p>当初はよく考えず「NuxtだしSSR流行ってるしそれでいくかー」という気分でSSRで作ってましたが、ハマりました。</p>
<p>今回Firebase Authenticationの匿名認証を使ってたんですが、それをNuxtのmiddlewareで行うと、
「サーバサイド側で認可されているもののクライアントサイドで認可されておらず、ページ遷移なしで要認証なCloud Firestoreにアクセスできない」といった事態に。</p>
<p>結局SSRモードでやりたいことの実現が難しそうで、SPAモードに切り替えることにしました。
行ってる処理について「サーバサイドやる」「クライアントでやる」きちんと意識して開発するのが大切ですね。</p>
<h3 id="データ周りはfirebaseのcloud-firestore">データ周りはFirebaseのCloud Firestore</h3>
<p>「サーバサイドエンジニアいらなくなる」という謳い文句？でよく耳にしてたFirebaseを初めて触ってみました。</p>
<p>今回サーバサイド側に求めるものはCRUD操作程度だったので、DBはCloud Firestoreで事足りました。
データ構造は、雑に言うとJSONをうまく拡張したものという感じ。
<a href="https://firebase.google.com/docs/firestore?hl=ja">公式ドキュメント</a>のみでほぼ理解できました。</p>
<p>かなり限定的な用途かも？ですが、こう「かゆいところに手が届かない」って点も。</p>
<p><strong>Cloud Firestoreの複合インデックス設定で、Arrayフィールドは1つしか設定できない</strong></p>
<p>あつ森家具に紐づくラベルで、&quot;入手方法&quot;・&quot;セット&quot;は複数紐づくことがあるので、Array形式としていました。しかしインデックスは一方しかつけられないので、「&quot;入手方法&quot;では検索可能だが&quot;セット&quot;では検索できない」と機能落ちさせるしかありませんでした。</p>
<p><a href="https://firebase.google.com/docs/firestore/query-data/index-overview?hl=ja#composite_indexes">公式ドキュメント</a>にも注意書きされてますね。</p>
<p><strong>全文検索は他サービスに頼るしかない</strong></p>
<p>現状全文検索機能はFirebase内で完結できません。
<a href="https://firebase.google.com/docs/firestore/solutions/search?hl=ja">公式ドキュメントでも案内されている通り</a>、Algolia使うのが一つの選択肢だそうです。</p>
<p><a href="https://www.algolia.com/">Algolia</a></p>
<p>実際使ってみましたが、クライアントも多言語対応で超簡単でした。
(アイテムデータのみ検索対応だったので、Pythonで登録、JSで検索のみで使いました。)</p>
<p>ひらがな・カタカナ両対応させるべく、こんな風にそれぞれでインデックス登録しました。
<img src="https://images.microcms-assets.io/assets/4f79e018736547879adf5670ebeaccc3/64eb2280fc33450494355165cb073197/atsumori-app-algolia.png" alt="Algolia管理画面"></p>
<h3 id="ホスティングもfirebaseで">ホスティングもFirebaseで</h3>
<p>公開はSSRの場合はHosting + Functionsで。次の記事が参考になりました。</p>
<p><a href="https://qiita.com/sterashima78/items/394161661c634f9eda2b">SSRモードのNuxt を Firebaseにホストするまでの手順 - Qiita</a></p>
<p>ただ前述の通り途中でSPAに切り替え、Hostingだけにしました。</p>
<h3 id="認証認可もfirebase">認証認可もFirebase</h3>
<p>Firebase Authentication、めっちゃ簡単ですね。特にGoogleログインに関しては設定一瞬です。
またセキュリティまわりを整えるため、匿名認証も簡単に設定できます。</p>
<p>今回は認可を受けたユーザーのみ、Cloud Firestoreのアイテムデータにアクセスできる、という設定にしたかったので
Nuxt.jsのmiddlewareにて、次のように「認可されていなければ必ず匿名認証させる」という風にしました。</p>
<pre><code class="language-javascript">import { auth } from &#39;~/plugins/firebase&#39;

export default async function({ store }) {
  // storeから自分のユーザー情報取得
  const user = store.getters[&#39;users/getOwnUser&#39;]
  // 保存されていなければ匿名認証、その結果をstoreに保存
  if (!user) {
    const result = await auth.signInAnonymously()
    await store.dispatch(&#39;users/login&#39;, result.user)
  }
}
</code></pre>
<h3 id="nuxtの追加モジュールが素晴らしい">Nuxtの追加モジュールが素晴らしい</h3>
<p>ちょっとこういう機能つけたいっていうときのモジュールが豊富に用意されています。</p>
<p>例えば、「PWA対応させてスマホアプリっぽくしたいな」ってときはこちら入れて少し設定するだけ</p>
<p><a href="https://pwa.nuxtjs.org/">⚡ Nuxt PWA</a></p>
<p>「サイトマップ勝手に生成してほしい」ってときはこちら</p>
<p><a href="https://github.com/nuxt-community/sitemap-module">nuxt-community/sitemap-module: Sitemap Module for Nuxt.js</a></p>
<p>BASIC認証設定しておきたいってときはこちら</p>
<p><a href="https://github.com/potato4d/nuxt-basic-auth-module">potato4d/nuxt-basic-auth-module: Provide basic auth your Nuxt.js application</a></p>
<p>いろいろサボれるので圧倒的感謝です。</p>
<h2 id="typescript入れとけばよかった">TypeScript入れとけばよかった</h2>
<p>完全一人で開発してたとはいうものの、途中から脳内で「ここはこんなObject入ってくるから〜」と思考巡らせて書いてました。
多分放置して半年後はいじるのに苦労すると思います。</p>
<p>そもそも入れなかった理由は、以前JSもろくに触らないままTypeScript書こうとして、どこまでがJSの機能か見分けがつかなくなり苦戦したので、もうちょいJSに慣れようという思いがあったからです。
最近はようやくJS, ES6, Node.jsの記法の分別がついてきたので、TypeScript再チャレンジしたいと思います。</p>
<h3 id="利用規約、プライバシーポリシー">利用規約、プライバシーポリシー</h3>
<p>これらも用意まではしました。こちらサイトを参考に、必要に応じて追加・削除してみました。</p>
<p><a href="https://kiyaku.jp/">Webサイトの利用規約（無料テンプレート・商用利用可）</a></p>
<p>書いていくともうすぐ公開だ！とワクワクする反面、個人情報管理について緊張感が出てきます。
Firebaseで簡単になんでもできてしまう分、ほんとに大丈夫？ってなりますね。Cloud Firestoreのrules設定を何度も見直しました。</p>
<h2 id="まとめ">まとめ</h2>
<p>次はきちんと公開できるものを、よりクリーンなコードで作れたらと思いました。
そのためにもまずは、健全な(?    )アイデアがほしいですね。
引き続きフロントまわりは勉強続けていきたいと思います。</p>

    