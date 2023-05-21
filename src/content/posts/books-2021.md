---
title: '今年読んだ本まとめ2021'
summary: '今年読んだ本のひとことまとめ、備忘録的なもの。 ?? '''
categories: ['tech']
tags: ['reading-book','agile','oop','ddd','golang','html','css']
publishedAt: 2021-12-26T13:57:00.000Z
modifiedAt: 
draft: false
isHtml: false
microCMSId: 'books-2021'
microCMSCreatedAt: 2021-12-26T08:18:04.176Z
microCMSUpdatedAt: 2021-12-26T13:01:34.555Z
microCMSRevisedAt: 2021-12-26T13:01:34.555Z
---
## はじめに

今年読んだ本のひとことまとめ、備忘録的なもの。
次の記事で2月時点でまとめているので、実際はもう少し年内に読んだと思う。

[ここ半年で読んだ技術書レビュー 2021/02 - abekoh's tech note](https://blog.abekoh.dev/posts/tech-books-Feb-2021)

数が多いので適当にテーマを分類したが、内容はそこに縛られない内容だったりもする。

## 目次

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [はじめに](#はじめに)
- [目次](#目次)
- [設計・コーディング技法](#設計・コーディング技法)
  - [テスト駆動開発](#テスト駆動開発)
  - [リファクタリング 第2版](#リファクタリング-第2版)
  - [達人プログラマー 第2版](#達人プログラマー-第2版)
  - [Software Design 2021年3月号](#software-design-2021年3月号)
  - [ドメイン駆動設計 モデリング・実装ガイド](#ドメイン駆動設計-モデリング実装ガイド)
  - [ドメイン駆動設計 サンプルコード&FAQ](#ドメイン駆動設計-サンプルコードfaq)
  - [マイクロサービスアーキテクチャ](#マイクロサービスアーキテクチャ)
- [アジャイル開発](#アジャイル開発)
  - [エンジニアリング組織論への招待](#エンジニアリング組織論への招待)
  - [エクストリーム・プログラミング](#エクストリームプログラミング)
  - [チーム・ジャーニー](#チームジャーニー)
  - [ユニコーン企業のひみつ](#ユニコーン企業のひみつ)
- [その他技術書](#その他技術書)
  - [ハイパフォーマンス ブラウザネットワーキング](#ハイパフォーマンス-ブラウザネットワーキング)
  - [データ指向アプリケーションデザイン](#データ指向アプリケーションデザイン)
  - [HTML5&CSS3デザイン 現場の新標準ガイド 第２版](#html5css3デザイン-現場の新標準ガイド-第2版)
  - [Go言語による並行処理](#go言語による並行処理)
  - [ソフトウェアテストの教科書 増補改訂 第２版](#ソフトウェアテストの教科書-増補改訂-第2版)
- [IT読み物](#it読み物)
  - [ソフトウェア・ファースト](#ソフトウェアファースト)
  - [NO RULES](#no-rules)
- [おわりに](#おわりに)

<!-- /code_chunk_output -->

## 設計・コーディング技法

### テスト駆動開発

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="https://rcm-fe.amazon-adsystem.com/e/cm?ref=qf_sp_asin_til&t=abekohtechblo-22&m=amazon&o=9&p=8&l=as1&IS1=1&detail=1&asins=B077D2L69C&linkId=683e344cca8de201f510b555d18c5fa1&bc1=ffffff&amp;lt1=_top&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr">
    </iframe>

- 言わずとしれたTDDの原点。実はリニューアル版で、絶版になった旧版は訳者が異なる
- 前半のコーディング過程は [訳者t-wadaさんのライブコーディング](https://www.youtube.com/watch?v=Q-FJ3XmFlT8) 見てからだとすんなり入った
- 付録Cに現代におけるTDDの状況、変化などが書かれており参考になった

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">今更ながらきちんと『テスト駆動開発』読んだ。わかった気になってたところ多かったのでいろいろやり方変わってきそう。<br>付録Cの和田さんの解説は必見だと思いました。<a href="https://t.co/CyPPOPqvND">https://t.co/CyPPOPqvND</a></p>&mdash; abekoh (@abekoh_bcky) <a href="https://twitter.com/abekoh_bcky/status/1463079597419872263?ref_src=twsrc%5Etfw">November 23, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### リファクタリング 第2版

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="https://rcm-fe.amazon-adsystem.com/e/cm?ref=tf_til&t=abekohtechblo-22&m=amazon&o=9&p=8&l=as1&IS1=1&detail=1&asins=B0827R4BDW&linkId=f45b90696a8d1e77a4db39ffa7862659&bc1=ffffff&amp;lt1=_top&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr">
    </iframe>

- 可逆的なパターンが多く面白い。どれも使い所次第で毒にも薬にもなる
- 一歩ずつ慎重にやるステップ、複数のリファクタリングパターンを組み合わせて完成されるなど、今までやってたリファクタリングと違い学びがあった

### 達人プログラマー 第2版

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="https://rcm-fe.amazon-adsystem.com/e/cm?ref=tf_til&t=abekohtechblo-22&m=amazon&o=9&p=8&l=as1&IS1=1&detail=1&asins=B08T9BXSVD&linkId=1bf2fec35396cd1c08ab6397c1443d49&bc1=ffffff&amp;lt1=_top&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr">
    </iframe>

- 「契約による設計(DbC)」「テスト書いてません告白」など、なるほど〜となること多かった
- 抽象的な内容も多く、正直少し読みにくい
- エンジニアとして学び続ける姿勢の重要性も感じとれるところもあった

### Software Design 2021年3月号

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="https://rcm-fe.amazon-adsystem.com/e/cm?ref=tf_til&t=abekohtechblo-22&m=amazon&o=9&p=8&l=as1&IS1=1&detail=1&asins=B08W4X2L1P&linkId=104c928336500751b99d3392883cb91d&bc1=ffffff&amp;lt1=_top&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr">
    </iframe>

- オブジェクト指向の特集あり
- 「動物・犬・猫で例える問題」「getter/setter問題」「継承問題」など、誤解招きやすいところの解説がよかった
- 細かなJava/SpringのTipsも載ってて参考になった

### ドメイン駆動設計 モデリング・実装ガイド

[ドメイン駆動設計 モデリング/実装ガイド - little-hands - BOOTH](https://booth.pm/ja/items/1835632)

- 主にモデリング・実装の観点から、DDD のパターン全体を俯瞰して見れる
- ドメインモデルの実装の、悪いパターン(ドメインモデル貧血症)→ 良いパターンの例が気づきがある
- 途中に挟まる Q&A はよくある疑問で為になる

### ドメイン駆動設計 サンプルコード&FAQ

[ドメイン駆動設計 サンプルコード&FAQ - little-hands - BOOTH](https://booth.pm/ja/items/3363104)

- ここ迷うよね、ってところに対する答えが前より充実してて良い
- 「複数集約の整合性を確保する方法」が特にサンプル豊富で勉強になった
- サンプルコードが Kotlin とこの手の本にはあまりなかったので、刺さる人には嬉しい

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">『ドメイン駆動設計 サンプルコード&amp;FAQ』読んだ<br>ほんとに迷うよなーってところに焦点を当てた内容になってて良かったです。<br>個人的には特に、「複数集約の整合性を確保する方法」のところがサンプル豊富で大変勉強になりました。<a href="https://twitter.com/hashtag/DDD_FAQ?src=hash&amp;ref_src=twsrc%5Etfw">#DDD_FAQ</a><a href="https://t.co/QJwDZZy2vj">https://t.co/QJwDZZy2vj</a></p>&mdash; abekoh (@abekoh_bcky) <a href="https://twitter.com/abekoh_bcky/status/1457260006139568135?ref_src=twsrc%5Etfw">November 7, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### マイクロサービスアーキテクチャ

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="https://rcm-fe.amazon-adsystem.com/e/cm?ref=tf_til&t=abekohtechblo-22&m=amazon&o=9&p=8&l=as1&IS1=1&detail=1&asins=4873117607&linkId=ce9e691c2c25c789d58f94bcc0600c31&bc1=ffffff&amp;lt1=_top&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr">
    </iframe>

- マイクロサービスに関する本、少し古め
  - [原著の第2版](https://www.amazon.com/Building-Microservices-Designing-Fine-Grained-Systems/dp/1492034029/ref=sr_1_1?crid=2BPLADIOF64I&keywords=Building+Microservices%3A+Designing+Fine-Grained+Systems&qid=1640512351&s=books&sprefix=building+microservices+designing+fine-grained+systems%2Cstripbooks-intl-ship%2C209&sr=1-1)が出てるらしい
- いろいろなことが書かれていて、正直あまり覚えていない…他の本漁ってもう一度マイクロサービスについて学びたいところ

## アジャイル開発

### エンジニアリング組織論への招待

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="https://rcm-fe.amazon-adsystem.com/e/cm?ref=qf_sp_asin_til&t=abekohtechblo-22&m=amazon&o=9&p=8&l=as1&IS1=1&detail=1&asins=B079TLW41L&linkId=5e13c26e492ac7a20cd37ea127174eb9&bc1=ffffff&amp;lt1=_top&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr"></iframe>

- エンジニアリングでの問題解決にはコードだけではなく、人々の思考・組織・ビジネスの構造をリファクタリングしなければ、という点から語られた内容
- 第3章のアジャイル開発について話がおもしろい。アジャイル開発が必要とされるまでの流れや、それが目指すチームの状態、誤ったアジャイル、不確実性をへらすためのアジャイルな方法論など
- 第4章は、以下に不確実性を管理するかに焦点
- 組織で起こりがちな問題を論理的に分析 → 解決策の提案まで、他の本にはない雰囲気が良い

### エクストリーム・プログラミング

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="https://rcm-fe.amazon-adsystem.com/e/cm?ref=qf_sp_asin_til&t=abekohtechblo-22&m=amazon&o=9&p=8&l=as1&IS1=1&detail=1&asins=B012UWOLOQ&linkId=9e29a216c7214e14ec6c7ac099ed93a8&bc1=ffffff&amp;lt1=_top&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr">
    </iframe>

- 割とサクッと読める本
- アジャイル宣言から派生した具体的なプラクティスがまとまっててよい

### チーム・ジャーニー

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="https://rcm-fe.amazon-adsystem.com/e/cm?ref=qf_sp_asin_til&t=abekohtechblo-22&m=amazon&o=9&p=8&l=as1&IS1=1&detail=1&asins=B0836CF21D&linkId=83a7f3b7b0a6add51b625b4b5c9c6ea0&bc1=ffffff&amp;lt1=_top&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr">
    </iframe>

- [カイゼン・ジャーニー](https://www.amazon.co.jp/%E3%82%AB%E3%82%A4%E3%82%BC%E3%83%B3%E3%83%BB%E3%82%B8%E3%83%A3%E3%83%BC%E3%83%8B%E3%83%BC-%E3%81%9F%E3%81%A3%E3%81%9F1%E4%BA%BA%E3%81%8B%E3%82%89%E3%81%AF%E3%81%98%E3%82%81%E3%81%A6%E3%80%81%E3%80%8C%E8%B6%8A%E5%A2%83%E3%80%8D%E3%81%99%E3%82%8B%E3%83%81%E3%83%BC%E3%83%A0%E3%82%92%E3%81%A4%E3%81%8F%E3%82%8B%E3%81%BE%E3%81%A7-%E5%B8%82%E8%B0%B7-%E8%81%A1%E5%95%93-ebook/dp/B078HZKLMB)の続編らしく、より大きなチームを編成するためのプラクティスとか
- 一部、やや著者のオリジナリティが強いプラクティスが入ってて飲み込みにくかった

### ユニコーン企業のひみつ

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="https://rcm-fe.amazon-adsystem.com/e/cm?ref=tf_til&t=abekohtechblo-22&m=amazon&o=9&p=8&l=as1&IS1=1&detail=1&asins=4873119464&linkId=394d035c50150bc8b844b010aaf4f257&bc1=ffffff&amp;lt1=_top&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr">
    </iframe>

- Twitterで一時期流行りを観測したので読んでみた
- Spotifyで働いた著者の経験からの話
- 権限移譲をうまくやろうって話が主だった
- フランクな文体で読みやすかった

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">『ユニコーン企業のひみつ』読んだ<br>以前違う記事で知ったSpotifyモデルについて気になってたけど、その原則を徹底的に解説されてて面白かった。<br>アジャイルサムライと似た文体でサクッと読める感じでした<a href="https://t.co/LETdXq2mhy">https://t.co/LETdXq2mhy</a></p>&mdash; abekoh (@abekoh_bcky) <a href="https://twitter.com/abekoh_bcky/status/1391388093371011074?ref_src=twsrc%5Etfw">May 9, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## その他技術書

### ハイパフォーマンス ブラウザネットワーキング

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="https://rcm-fe.amazon-adsystem.com/e/cm?ref=qf_sp_asin_til&t=abekohtechblo-22&m=amazon&o=9&p=8&l=as1&IS1=1&detail=1&asins=4873116767&linkId=1d92197515ed9cf93d66b35ca2e270b7&bc1=ffffff&amp;lt1=_top&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr">
    </iframe>

- WebRTCについて学びたく読んだ
- TCP/UDPの基本的な話から入る。タイトルどおりひたすらネットワークのパフォーマンスを追求していく
- とにかく速くするには「往復回数を減らす」こと
- モバイルネットワークの4Gまでの話もじっくり入っている
- 内容がちょっと古めなので、第2版がほしい

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">『ハイパフォーマンスブラウザネットワーキング』読んだ<br>WebRTC学ぶために読み進めたけど、その前提となるTCP/UDPの話からはじまってすっきりと導入された感じ。少し内容古いから、QUIC,fetch API,5Gとかの内容含んだ版でて欲しいな</p>&mdash; abekoh (@abekoh_bcky) <a href="https://twitter.com/abekoh_bcky/status/1456867452122374153?ref_src=twsrc%5Etfw">November 6, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### データ指向アプリケーションデザイン

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="https://rcm-fe.amazon-adsystem.com/e/cm?ref=qf_sp_asin_til&t=abekohtechblo-22&m=amazon&o=9&p=8&l=as1&IS1=1&detail=1&asins=4873118700&linkId=d79fa06a8b3c954b82c395afde7c2121&bc1=ffffff&amp;lt1=_top&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr">
    </iframe>

- 多くの人におすすめされたので読んだ
- データベースがどういう考えのもとで実装されているか学べた
- 分散データベースで整合性、適時性考えるのつらい、とにかく大変ってのがわかった

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">『データ指向アプリケーションデザイン』読み終わった<br>現代のデータベースがどういう考えのもと実装されてるか広く学べてよかった。データベース開発してる人たちすげぇってなる。アプリ開発者としてもどうデータを扱うべきか考えが深まった気がする。<a href="https://t.co/OpFCEOPcil">https://t.co/OpFCEOPcil</a></p>&mdash; abekoh (@abekoh_bcky) <a href="https://twitter.com/abekoh_bcky/status/1435263257053335556?ref_src=twsrc%5Etfw">September 7, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

- ↓のスタンスを忘れずにいたい

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">一貫性について、「結果整合性はきちんと守っておく前提で、適時性については状況によりけりだけど緩くしてもいいんじゃね、そのほうがいろいろ楽だし」ってスタンスは良いなと思った</p>&mdash; abekoh (@abekoh_bcky) <a href="https://twitter.com/abekoh_bcky/status/1435435568205238273?ref_src=twsrc%5Etfw">September 8, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### HTML5&CSS3デザイン 現場の新標準ガイド 第２版

- 意外とHTML/CSSを体系的に学んだことがなかったので、一通り確認するために買った
- カタログとして見やすい内容
- 知らないCSSプロパティ・特定デバイス向け設定などたくさんあって読んで良かった

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="https://rcm-fe.amazon-adsystem.com/e/cm?ref=tf_til&t=abekohtechblo-22&m=amazon&o=9&p=8&l=as1&IS1=1&detail=1&asins=B08LKH2K7S&linkId=b308aed728a392516389769476c1687f&bc1=ffffff&amp;lt1=_top&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr">
    </iframe>

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">これ買って眺めてる。<br>HTMLについては太古の昔に覚えて、その場しのぎのアップデートしかなく穴だらけだったんで、体系的に学ぶのいいなってなる<a href="https://t.co/40WRudzETE">https://t.co/40WRudzETE</a></p>&mdash; abekoh (@abekoh_bcky) <a href="https://twitter.com/abekoh_bcky/status/1375478017456177156?ref_src=twsrc%5Etfw">March 26, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### Go言語による並行処理

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="https://rcm-fe.amazon-adsystem.com/e/cm?ref=tf_til&t=abekohtechblo-22&m=amazon&o=9&p=8&l=as1&IS1=1&detail=1&asins=4873118468&linkId=5521e5f7573b2d936d670d17f918e7d5&bc1=ffffff&amp;lt1=_top&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr">
    </iframe>

- Goでのパイプラインパターンみたいな書き方できるってのがしれた
- Go固有の話が大きいかも？とはいえ使いこなせば強力だと感じた

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">読んだ。Goでの並行処理あれやこれやわかったのでいろいろ試してみたい<a href="https://t.co/sE0nTfYY0W">https://t.co/sE0nTfYY0W</a></p>&mdash; abekoh (@abekoh_bcky) <a href="https://twitter.com/abekoh_bcky/status/1440344957949071363?ref_src=twsrc%5Etfw">September 21, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### ソフトウェアテストの教科書 増補改訂 第２版

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="https://rcm-fe.amazon-adsystem.com/e/cm?ref=tf_til&t=abekohtechblo-22&m=amazon&o=9&p=8&l=as1&IS1=1&detail=1&asins=B093Q13V96&linkId=7de5521dc6c02e3ecb3c1d70941f4a37&bc1=ffffff&amp;lt1=_top&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr">
    </iframe>

- QAさんがどういうふうにテスト設計し、実施しているか知れた
- ウォーターフォール前提感もあり少し古い感じはあった

## IT読み物

### ソフトウェア・ファースト

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="https://rcm-fe.amazon-adsystem.com/e/cm?ref=qf_sp_asin_til&t=abekohtechblo-22&m=amazon&o=9&p=8&l=as1&IS1=1&detail=1&asins=B07YNJSCG8&linkId=6b31606be9193599b840a8eee203593e&bc1=ffffff&amp;lt1=_top&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr">
    </iframe>

- Webサービスの社会人経験しかないからDXよくわからんかったが、その定義などが知れた
- 内製化しましょう、ということが繰り返し言われていた

### NO RULES

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="https://rcm-fe.amazon-adsystem.com/e/cm?ref=qf_sp_asin_til&t=abekohtechblo-22&m=amazon&o=9&p=8&l=as1&IS1=1&detail=1&asins=B08LDBNG74&linkId=12bd0e308dea8992c568896806d7472f&bc1=ffffff&amp;lt1=_top&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr">
    </iframe>

- NetFlixのお話
- まず能力のない社員をレイオフしようという、日本企業としては悩ましいことから始まる
- プロスポーツ選手のようなチームを作ろうという話。憧れるが、実践はなかなか難しそうと思った

## おわりに

ちょっとメモがなく雑になってしまったのもある。やっぱり読んですぐメモなどしておこうと思った。
割と設計・チーム開発手法について読むことが多かった。来年は他のテーマ、より深堀りした技術の本とかもうちょっと読みたい。
    