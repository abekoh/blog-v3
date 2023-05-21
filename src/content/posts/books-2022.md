---
title: '今年読んだ本まとめ2022'
summary: '今年読んだ本のひとことまとめ、備忘録的なもの。2022年版。 ?? '''
categories: ['tech']
tags: ['computer-science','product-management','rust','golang','haskell','rails','agile']
publishedAt: 2022-12-30T08:30:00.015Z
modifiedAt: 
draft: false
isHtml: false
microCMSId: 'books-2022'
microCMSCreatedAt: 2022-12-30T08:17:21.700Z
microCMSUpdatedAt: 2022-12-30T08:29:39.648Z
microCMSRevisedAt: 2022-12-30T08:29:39.648Z
---
## はじめに

今年読んだ本のひとことまとめ、備忘録的なもの。2022年版。

前回まで

- [今年読んだ本まとめ2021 - abekoh's tech note](https://blog.abekoh.dev/posts/books-2021)

全部読んでない本も多い。また必要なときに読み返せるくらいのインデックスができる程度の心構えで多読した感じ。

特に他の人にも薦めたいなーって本には★をつけてみた。

## 目次
- [設計・コーディング技法](#設計コーディング技法)
  - [良いコード／悪いコードで学ぶ設計入門](#良いコード悪いコードで学ぶ設計入門)
  - [ソフトウェアアーキテクチャの基礎](#ソフトウェアアーキテクチャの基礎)
  - [Design It!★](#design-it)
  - [モノリスからマイクロサービスへ](#モノリスからマイクロサービスへ)
  - [実践テスト駆動開発](#実践テスト駆動開発)
  - [Patterns of Enterprise Application Architecture](#patterns-of-enterprise-application-architecture)
  - [A Philosophy of Software Design★](#a-philosophy-of-software-design)
- [プログラミング言語・フレームワーク](#プログラミング言語フレームワーク)
  - [プログラミングRust 第2版](#プログラミングrust-第2版)
  - [実用Go言語★](#実用go言語)
  - [すごいHaskellたのしく学ぼう★](#すごいhaskellたのしく学ぼう)
  - [初めてのGraphQL](#初めてのgraphql)
  - [パーフェクト Ruby on Rails](#パーフェクト-ruby-on-rails)
  - [Understanding and Using C Pointers](#understanding-and-using-c-pointers)
- [コンピュータサイエンス](#コンピュータサイエンス)
  - [コンピュータシステムの理論と実装★](#コンピュータシステムの理論と実装)
  - [問題解決力を鍛える！アルゴリズムとデータ構造](#問題解決力を鍛えるアルゴリズムとデータ構造)
  - [並行プログラミング入門](#並行プログラミング入門)
- [チーム開発・組織論](#チーム開発組織論)
  - [SCRUM BOOT CAMP THE BOOK](#scrum-boot-camp-the-book)
  - [エッセンシャルスクラム](#エッセンシャルスクラム)
  - [チームトポロジー](#チームトポロジー)
  - [エンジニアのためのマネジメントキャリアパス](#エンジニアのためのマネジメントキャリアパス)
- [プロダクトマネジメント](#プロダクトマネジメント)
  - [INSPIRED 熱狂させる製品を生み出すプロダクトマネジメント★](#inspired-熱狂させる製品を生み出すプロダクトマネジメント)
  - [プロダクトマネジメント ビルドトラップを避け顧客に価値を届ける](#プロダクトマネジメント-ビルドトラップを避け顧客に価値を届ける)
- [その他](#その他)
  - [岩田さん: 岩田聡はこんなことを話していた。★](#岩田さん-岩田聡はこんなことを話していた)
  - [ヘルシープログラマ](#ヘルシープログラマ)

## 設計・コーディング技法

### 良いコード／悪いコードで学ぶ設計入門

<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=abekohtech-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=4297127830&linkId=cff074a25f778eb3721d5ea05983d145"></iframe>

悪いコードが状況によっては悪くもなくない？というところもあったが、サンプルが多くて読みやすかった。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">読みました<br>悪い例を出す→なぜ悪いかを解説→良いパターンの紹介<br>と、徹底して例示・なぜ？から入るところが納得感感じられてよかったです<br><br>良いコード／悪いコードで学ぶ設計入門―保守しやすい　成長し続けるコードの書き方 <a href="https://t.co/F3dHrj5ojP">https://t.co/F3dHrj5ojP</a> <a href="https://twitter.com/hashtag/%E3%83%9F%E3%83%8E%E9%A7%86%E5%8B%95%E6%9C%AC?src=hash&amp;ref_src=twsrc%5Etfw">#ミノ駆動本</a></p>&mdash; abekoh (@abekoh_bcky) <a href="https://twitter.com/abekoh_bcky/status/1520232770894630912?ref_src=twsrc%5Etfw">April 30, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### ソフトウェアアーキテクチャの基礎

<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=abekohtech-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=4873119820&linkId=b80e887d48de8d3fd4a0f3267714272e"></iframe>

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">『ソフトウェアアーキテクチャの基礎 』読了<br>個人的に第3部「テクニックとソフトスキル」の、アーキテクトとしてどう振る舞うべきか？ある課題に対してどうアプローチすればよいか？といった考え方の話が一番沁みた<a href="https://t.co/eqsmtIRJ13">https://t.co/eqsmtIRJ13</a></p>&mdash; abekoh (@abekoh_bcky) <a href="https://twitter.com/abekoh_bcky/status/1523306772798132224?ref_src=twsrc%5Etfw">May 8, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### Design It!★

<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=abekohtech-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=4873118956&linkId=f2b7b718209fe520068243deedb55d27"></iframe>

デザイン原則の話とか序盤に入れてくるのとか面白かった。終盤のワークショップなどのテクニックは真似してみたい。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">Design It!、こちらのほうがソフトウェアアーキテクチャの基礎の名にふさわしい気もする。読みやすいし<a href="https://t.co/BSpW718pIh">https://t.co/BSpW718pIh</a></p>&mdash; abekoh (@abekoh_bcky) <a href="https://twitter.com/abekoh_bcky/status/1578038514796888065?ref_src=twsrc%5Etfw">October 6, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


### モノリスからマイクロサービスへ

<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=abekohtech-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=4873119316&linkId=8c4928d4780dbb0db7c502940cfc04d2"></iframe>

途中まで読んだ。ドメイン分離からめたところから分離の戦略語られていて参考なりそう。

### 実践テスト駆動開発

<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=abekohtech-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=4798124583&linkId=50f778581a184e6a2aff4f76a183a8b1"></iframe>

自分自身がモックをたくさん使いたいロンドン学派思考なので気になって読んだ。実例のところざっと読んだので得られたものは少ないかも。

### Patterns of Enterprise Application Architecture
<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=abekohtech-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B008OHVDFM&linkId=501dd0e22ab953e63586074c751eb1ca"></iframe>

Martin Fowler氏による名著。[texta.fm](https://anchor.fm/textafm)を聞いていて度々登場するので興味を持って買った。初めて英語の物理本買ってみたが、装丁がかっこよく、本棚に飾っておくだけで満足感ある。

部分的に読んでいて、特に3章の"Mapping to Relational Databases"、10章の"Data Source Architectural Patterns"あたりをきちんと読んだ。何気なく普段つかっているDBとのマッピングのパターンについて命名されていて、その特徴などが簡潔にまとまっていて整理が進んだ感触がある。

### A Philosophy of Software Design★

<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=abekohtech-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B09B8LFKQL&linkId=390fcec301238c3edff0c5e1331119be"></iframe>

こちらも英語本。Kindleで買った。それなりに読めるものの、たまにわからんくなったらDeepLに突っ込むを繰り返して読む。こういうところ電子本はやっぱり楽と感じた。まだ部分的にしか読んでいない。

特に、「メソッドは短いほどよいわけではない。多少長くても知識を凝集させ理解しやすいコードが大切だ」といった主張が印象に残った。その考えとGoでの実装の相性がよいと勝手ながら思っている。そのあたり述べてみたのが↓の記事。

[業務アプリケーション開発にGoを採用する理由](https://zenn.dev/abekoh/articles/c5d12be524c675)

## プログラミング言語・フレームワーク

### プログラミングRust 第2版

<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=abekohtech-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=4873119782&linkId=8d5f9b2f24a5af5778675e4471734b4e"></iframe>

途中まで、またRust書くの再開したときに読みたい。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">積み本また増やしてしまった<br>5章まで読んで、公式チュートリアルとはまた違う視点での復習になって良かった<a href="https://t.co/vRAhNtXC3J">https://t.co/vRAhNtXC3J</a></p>&mdash; abekoh (@abekoh_bcky) <a href="https://twitter.com/abekoh_bcky/status/1485272205785468929?ref_src=twsrc%5Etfw">January 23, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### 実用Go言語★

<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=abekohtech-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=4873119693&linkId=318a63c60eb5485cb3ea72d637b3d00d"></iframe>

表題のとおり実用書って感じでよかった。Go初学者に一通り文法学んだ後に読んでほしい一冊。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">実用 Go言語<br>Javaやってた人に向けた感じになっててとても嬉しい<a href="https://t.co/lhU151WjcT">https://t.co/lhU151WjcT</a></p>&mdash; abekoh (@abekoh_bcky) <a href="https://twitter.com/abekoh_bcky/status/1534907555230924800?ref_src=twsrc%5Etfw">June 9, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### すごいHaskellたのしく学ぼう★

<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=abekohtech-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B009RO80XY&linkId=63c8bdf3b16ed6dc6e8964b85497e64e"></iframe>

Reactなり触るにあたって、改めて関数型の思想について頭に入れてみたく読み始めた。
コード実行しながら読み進めている。軽い文体で進むが中身は結構しっかりしてる。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">Haskell、大学時代に授業で触れたころは良さなんかわからんかったが<br>今あらためて学んでみるといろいろ良くできてるなとしみじみ感じる</p>&mdash; abekoh (@abekoh_bcky) <a href="https://twitter.com/abekoh_bcky/status/1588182315011739648?ref_src=twsrc%5Etfw">November 3, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### 初めてのGraphQL

<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=abekohtech-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=487311893X&linkId=f253254f176fea28d1f691a6162f4e94"></iframe>

世間的にも会社でも導入進んでいて、そろそろ知っておかないとと思い読んでみた。無難に入門書という感じでよかった。

### パーフェクト Ruby on Rails

<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=abekohtech-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B08D3DW7LP&linkId=758ec09ef342b5a6ce0f45405535d9a3"></iframe>

業務で少しRailsを触る機会ができたのと、 [texta.fm](https://anchor.fm/textafm) のスピーカーの方が関わってるとのことで買ってみた。Railsまわりのツールの使い方・書き方はもちろん、最後のほうのドメインモデルとか絡めての設計まわりの話が深堀りされていて興味深い内容だった。

### Understanding and Using C Pointers

<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=abekohtech-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B00CLX8PL0&linkId=4d41f6d006c7d8cb632d41b066fb5405"></iframe>

ACM会員になってO'Reilly Online Learningで無料で読めたので…しかし7/1で終了してしまい今は読めない。
Rustなり低レイヤーまわり触るにあたってたまにポインタどうこうの話が出てくるが、Cでどういう扱いだったか忘れかけてたので読んで復習した。

## コンピュータサイエンス

### コンピュータシステムの理論と実装★

<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=abekohtech-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=askkkk_ss_li_til&asins=4873117127&linkId=b8e98a20a4d00128c16ef82ae5e5a299"></iframe>

低レイヤー復習のため。実装はやってないものの、プログラムがどう動いているのか全体感を復習できてよい内容だった。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">論理回路からスタートして点と点をつなげていく流れがとてもおもしろい<a href="https://t.co/Xpz5gGhNM6">https://t.co/Xpz5gGhNM6</a></p>&mdash; abekoh (@abekoh_bcky) <a href="https://twitter.com/abekoh_bcky/status/1545775118722699264?ref_src=twsrc%5Etfw">July 9, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### 問題解決力を鍛える！アルゴリズムとデータ構造

<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=abekohtech-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B08PV83L3N&linkId=06c0cb39ca9d6ec3931092cdd804c2c6"></iframe>

アルゴリズムまわりの復習のため。以前学んだことがあると良かったけど、アルゴリズム入門としては敷居が高めな印象だった。

### 並行プログラミング入門

<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=abekohtech-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=4873119596&linkId=184cab03c767e4b7b8b093a231b44cce"></iframe>

重めの並行処理に関する本。アセンブリでどうって話などかなり低レイヤーなところが中心。
まだ完走できておらず…余裕見て再チャレンジしたいところ。

## チーム開発・組織論

### SCRUM BOOT CAMP THE BOOK
<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=abekohtech-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B086GBXRN6&linkId=838b60773e7965b5bec6bf0edddb0c27"></iframe>

スクラムをチームに布教させるのに良い本と聞いたので買って読んだ。若干最新のスクラムガイドと差異はあるかも。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">『SCRUM BOOT CAMP THE BOOK』読んだ。<br>スクラムのイベントやロールについて、スクラムガイドより具体的な解説や動き方、プラクティスなど散りばめられててよかった。漫画が主軸なおかげもあってサクッと読めた。<a href="https://t.co/YLkcceM0ma">https://t.co/YLkcceM0ma</a></p>&mdash; abekoh (@abekoh_bcky) <a href="https://twitter.com/abekoh_bcky/status/1477995260123152396?ref_src=twsrc%5Etfw">January 3, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### エッセンシャルスクラム
<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=abekohtech-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B00MB6GO7E&linkId=1cb68bb971837d7d5b6d0732a2d488b1"></iframe>

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">これ読んでる<br>プロダクトバックログの作成・精査あたりのノウハウ全然わかんなかったが参考になりそうだ<a href="https://t.co/xZPEyPFwnK">https://t.co/xZPEyPFwnK</a></p>&mdash; abekoh (@abekoh_bcky) <a href="https://twitter.com/abekoh_bcky/status/1508005176350699520?ref_src=twsrc%5Etfw">March 27, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### チームトポロジー
<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=abekohtech-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B09MS8BML8&linkId=ef1179cb0cdc1d67cf17d435db05c2bf"></iframe>

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">『チームトポロジー』読んでるなう<br>PART1で自分もなんとなくイメージしていたが伝えれずにいた、気持ちよくエンジニアリングできるチームについてしっかり言語化されていてすごい良い…<a href="https://t.co/Ms5m8VdjpF">https://t.co/Ms5m8VdjpF</a></p>&mdash; abekoh (@abekoh_bcky) <a href="https://twitter.com/abekoh_bcky/status/1495096004794007553?ref_src=twsrc%5Etfw">February 19, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### エンジニアのためのマネジメントキャリアパス
<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=abekohtech-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=4873118484&linkId=24411421d2f83a5dafec56d53314a42b"></iframe>

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">昔買ったこれ、テックリードのところ読み返してしみじみしてる。プロジェクト管理のところとても刺さる<a href="https://t.co/kL4012umMJ">https://t.co/kL4012umMJ</a></p>&mdash; abekoh (@abekoh_bcky) <a href="https://twitter.com/abekoh_bcky/status/1564611127635374081?ref_src=twsrc%5Etfw">August 30, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">- チームが長期にわたって進めるプロジェクトの管理を楽しいと思う人など、まずいない<br>- アジャイルであれプロジェクト管理は必須、それを担当するのがテックリード<br>- プロジェクト管理を成功させるコツは「多少行き詰まっても、うんざりしても、やめないこと」</p>&mdash; abekoh (@abekoh_bcky) <a href="https://twitter.com/abekoh_bcky/status/1564613083330396161?ref_src=twsrc%5Etfw">August 30, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## プロダクトマネジメント

### INSPIRED 熱狂させる製品を生み出すプロダクトマネジメント★

<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=abekohtech-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B0814STTHV&linkId=1aa2f55515ea06f54bbf27e666053654"></iframe>

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">読んだ。プロダクトマネージャー、プロダクトデザイナーの大切さが一層わかった<br><br>INSPIRED 熱狂させる製品を生み出すプロダクトマネジメント <a href="https://t.co/S59Um1vUQp">https://t.co/S59Um1vUQp</a></p>&mdash; abekoh (@abekoh_bcky) <a href="https://twitter.com/abekoh_bcky/status/1577666384942616576?ref_src=twsrc%5Etfw">October 5, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### プロダクトマネジメント ビルドトラップを避け顧客に価値を届ける

<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=abekohtech-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=4873119251&linkId=7db054df5500c842de44ed709bec0e04"></iframe>

とにかくアウトカムに注目しようという内容、良いプロダクトマネジメントの考え方が知れてよかった。

## その他

### 岩田さん: 岩田聡はこんなことを話していた。★

<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=abekohtech-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B07W3TQ4RB&linkId=f16b526057b796304a433d247bc40182"></iframe>

技術本でもビジネス本でもないが、エンジニア出身でマネジメント業するモチベーションがかなり湧いてくる本で非常によかった。今年1番読んで良かったと思えた。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">岩田さん: 岩田聡はこんなことを話していた。 (ほぼ日ブックス) ほぼ日刊イトイ新聞 <a href="https://t.co/RdmLxLngz3">https://t.co/RdmLxLngz3</a> <a href="https://twitter.com/AmazonJP?ref_src=twsrc%5Etfw">@amazonJP</a>より<br><br>今年読んできた本で一番よかったかも。エンジニアでマネジメント業少しでも関わる時にすごいモチベーションになる。終盤は泣くわこれ……</p>&mdash; abekoh (@abekoh_bcky) <a href="https://twitter.com/abekoh_bcky/status/1567150843799162887?ref_src=twsrc%5Etfw">September 6, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### ヘルシープログラマ

<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=abekohtech-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=4873117283&linkId=a2e96ebc7046d5d81c381874c97d5a48"></iframe>

リモートワーク中心の今の働き方で、健康への心がけは一層大切だなと思い購入。スタンディングデスクのメリデメ、散歩のススメなど実践的で良い感じだった。まだ途中までしか読んでない。


## まとめ

今年もいろんな分野の本を掻い摘んでみてきた。特に低レイヤー、プロダクトマネジメントに関するところは知識・考え方アップデートできた気がする。来年はまた違う分野、デザインまわりとかの本に触れていきたい。

    