---
title: '今年読んだ本まとめ2023'
summary: '今年読んだ本のひとことまとめ、備忘録的なもの。2023年版。'
categories: ['tech']
tags: ['computer-science','golang','ddd','database','devops','clang','typescript','reading-book']
publishedAt: 2023-12-28T23:30:00.000Z
modifiedAt: 
draft: false
isHtml: false
---
## はじめに

今年読んだ本のひとことまとめ、備忘録的なもの。2023年版。

それなりにたくさん挙げてはいるものの、通読していなかったり内容ほぼ忘れてるのもあるのであしからず。
通読失敗したやつは必要になったときに読み返したいところ。

特にお気に入りの本には★をつけてます。

前回まで:

- [今年読んだ本まとめ2022 - abekoh's tech note](/posts/books-2022)
- [今年読んだ本まとめ2021 - abekoh's tech note](/posts/books-2021)

## 設計・コーディング手法

### 単体テストの考え方/使い方★

<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=abekohtech-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B0BLTG8Z9K&linkId=aebe6ee2d34b5273da80f7edaf6c6790"></iframe>

今年読んだ中で一番学びがあった。テストの書き方はもちろん、設計の考え方も大変参考になる。

テストはもともとSpringでDIしやすいことをいいことにモックを作りまくる(いわゆるロンドン学派)のが好きだったけれど、この本を読んで考え方をシフトし、モックは必要最小限でリファクタリング耐性を重視した実装にするようになった。

関数型アーキテクチャの話など、テストしやすい設計・実装についても多く学びがあった。

今年書いた以下の記事でも、学んだことを生かしつつ引用した内容となっている。

- [moqを使ったGoのテスト](https://zenn.dev/abekoh/articles/21acde07e1f555)
- [開発効率を追い求めた実装プラクティス集](https://zenn.dev/micin/articles/effective-development-practices)

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">半分ちょい読んだが、ぐう名著では<br>DDDトリレンマを提唱した方による著書でもあり、その詳細や実践パターンなんかも取り上げられてて面白い<br><br>単体テストの考え方/使い方 <a href="https://t.co/EnrYaNnOX3">https://t.co/EnrYaNnOX3</a></p>&mdash; abekoh (@abekoh_bcky) <a href="https://twitter.com/abekoh_bcky/status/1619356822707781632?ref_src=twsrc%5Etfw">January 28, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">「読み込みに関してドメイン・モデルは必要ない」って言い切っててわろた。全体的に清々しさがあって良いんだよなこの本</p>&mdash; abekoh (@abekoh_bcky) <a href="https://twitter.com/abekoh_bcky/status/1620067179256504327?ref_src=twsrc%5Etfw">January 30, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### モノリスからマイクロサービスへ

<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=abekohtech-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=4873119316&linkId=6e3b0fea68e3083768852d3e7b380cf8"></iframe>

段階的にアーキテクチャを変更していく話はマイクロサービス関係なく活用できそう。実際モノリス内部での大幅改修でこの本の考え方応用してみている。

### データ指向プログラミング

<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=abekohtech-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B0BWR57K64&linkId=27a4db88b8f9ef3e23fe87f548c3aecc"></iframe>

オブジェクト指向プログラミングに反して、データとコードを分離・汎用データ型だけを使う・データはイミュータブルといった思想をもつデータ指向プログラミング(DOP)についての解説本。

データとコードを分離、すなわちオブジェクトに振る舞わせないといった考え方が良いという点は自分も薄々感じてたところなので面白かった。その点を[開発効率を追い求めた実装プラクティス集](https://zenn.dev/micin/articles/effective-development-practices)で引用して紹介してみた。

一方で、汎用データ型を使っていく・データの型検証はJSON Schemaでやっていくみたいな考えは実際開発者体験は良いものにはならなさそう。JSなら普通にTypeScriptで型定義・互換性のある型ならそのまま変換なく使えるじゃん、くらいの考えで導入したい。

物語形式で話が進むが、なんというか、登場人物が素直に受け入れすぎてたり、そうはならんやろと思ったりとリアリティは薄く感じた。

### システム設計の面接試験

<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=abekohtech-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B0C61BNTW9&linkId=3cc736845331095ff4b8bc9d2071cfc4"></iframe>

面接試験というテーマのもと、ニュースフィードシステム、チャット、動画サイトなどのサービスのアーキテクチャ設計についてどんなアーキテクチャが模範解答か？どういった点が深掘りされる点になるか？を解説していく内容。

特定のベンダー依存なく、どういうサーバ構成でどこでキューを使ってロードバランサ使って…とざっくりのアーキテクチャの見本市にもなる点が良い気がする。そういう書籍は意外とないような？知らないだけかもだけど。

一方で、翻訳が全体的にいまひとつ。エンジニアが監修していないような訳になっていたのがやや残念。

### 進化的アーキテクチャ

<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=abekohtech-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=4873118565&linkId=d1a545c985cda484bd4d7f893056cc32"></iframe>

全体的にふわっとした内容でいきなり読むとよくわからないが、『ソフトウェアアーキテクチャの基礎』を通過しているともう少し理解が進むような気がする内容。(同じ著者でこの本のほうが古いはずだけれど)

特に目立つキーワードが「適応度関数」。すべてのソフトウェアアーキテクチャにおいてそれに必要な要件(機能要件・非機能要件問わず)があり、それにいかに適応できるかの指標を適応度関数として定義、観測して適応させていくことが重要といったことは掴めた。

### Domain Modeling Made Functional

<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=abekohtech-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B07B44BPFB&linkId=9f174fb21d7fcc0a3318e345de4888c5"></iframe>

会社の輪読会で読んだ。関数型でどうDDDやってくか？という内容。

言語はF#だが、考え方自体は他の言語でも適用できる面も多い印象だった。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">必要に迫られてきたので読みはじめた<br><br>ドメインエキスパートとのやり取りが冒頭に出てくるのはEvansリスペクトかな。ちょくちょくDDD特有の用語が出てくるから少し予習しておいたほうが読みやすいのかもしれない<a href="https://t.co/3VPYa2MUlF">https://t.co/3VPYa2MUlF</a></p>&mdash; abekoh (@abekoh_bcky) <a href="https://twitter.com/abekoh_bcky/status/1621833442798505990?ref_src=twsrc%5Etfw">February 4, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">カリー化がDependency Injectionに活用されるのなるほどなー点と点がつながった感覚</p>&mdash; abekoh (@abekoh_bcky) <a href="https://twitter.com/abekoh_bcky/status/1622230677587632128?ref_src=twsrc%5Etfw">February 5, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">ChoiceTypesのRDB保存で複雑じゃなけりゃとりあえずSTIで1テーブルにしとけってのがあまり腑に落ちないかな、本当に変わることなけりゃよいけど基本はテーブル分けておきたい<br>ORMなんか使わんぞってスタイルなのは好き</p>&mdash; abekoh (@abekoh_bcky) <a href="https://twitter.com/abekoh_bcky/status/1629780804955156480?ref_src=twsrc%5Etfw">February 26, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## プログラミング言語

### プロを目指す人のためのTypeScript入門

<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=abekohtech-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=4297127474&linkId=3f348f2b5cf1a9b3bddd74773e128766"></iframe>

TypeScript業務で使ってきたものの知らないことがたくさんあって気づきが得られてよかった。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">読んだ。知らないこともあってよい穴埋めになった気がする。これは式、これは型など曖昧にせず丁寧に解説されてるのが好印象でした<a href="https://t.co/T3dsKKWWJI">https://t.co/T3dsKKWWJI</a></p>&mdash; abekoh (@abekoh_bcky) <a href="https://twitter.com/abekoh_bcky/status/1640725254917214208?ref_src=twsrc%5Etfw">March 28, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### Production Ready GraphQL

[Production Ready GraphQL | The Book](https://book.productionreadygraphql.com/)

業務でGraphQL使うなら読めと言われたので。ただざっくりとしか読めてない…
ページネーションの話とかMutationの返り値にはPayloadを設定するとか、業務に活用できてよかった。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">英語本疲れたから逃げてたけど読んでこう、GraphQLスキーマ設計の迷いを払拭していきたい<a href="https://t.co/abnZpjgcv6">https://t.co/abnZpjgcv6</a></p>&mdash; abekoh (@abekoh_bcky) <a href="https://twitter.com/abekoh_bcky/status/1644008285484503040?ref_src=twsrc%5Etfw">April 6, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## 低レイヤー

### Goならわかるシステムプログラミング★

<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=abekohtech-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=4908686122&linkId=669738778e35e0a02618ba45d7a31fc9"></iframe>

Goを通じて低レイヤーまわり全般に触れていく本。とても読み応えあった。
システムプログラミング学びたいって人いたらまずこれを薦めていきたい。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">Goならわかるシステムプログラミング、どの解説も丁寧で読み応えあった。特定OSに絞らず、Linux/Mac/Windowsそれぞれ内部でどう扱っているか比較しながらなところも他にはない面白さ。<a href="https://t.co/FKv8JhkwEh">https://t.co/FKv8JhkwEh</a></p>&mdash; abekoh (@abekoh_bcky) <a href="https://twitter.com/abekoh_bcky/status/1647614212729081856?ref_src=twsrc%5Etfw">April 16, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### エンジニアのためのCPU入門

<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=abekohtech-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=4908686165&linkId=e478e9cd0c114cdfe57cf44b539e1363"></iframe>

現代のCPUの最適化手法についてとことん解説していく本。
大学の講義で学んだことあったのは基礎的なところだったので、そこから先の応用が目からウロコだった。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">「プログラマーのためのCPU入門」読み終わった、現代CPUでやってる最適化のあれやこれや、知らないこと多くて面白かった<a href="https://t.co/3JscBHUwKy">https://t.co/3JscBHUwKy</a></p>&mdash; abekoh (@abekoh_bcky) <a href="https://twitter.com/abekoh_bcky/status/1667792996090392578?ref_src=twsrc%5Etfw">June 11, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### Linuxのしくみ

<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=abekohtech-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B0BG8J5QJ1&linkId=7c844ab31fcb529885f78532fd2e896e"></iframe>

図が多くわかりやすかった。とりあえずLinuxざっくり理解するのに良さそう。

### ふつうのLinuxプログラミング

<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=abekohtech-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B075ST51Y5&linkId=8ca52fedd2345a5d0883119fa2b0551e"></iframe>

C言語を使ってシステムプログラミングのチュートリアル的なことができる内容。
HTTPサーバー実際に手を動かしてみて、普段業務で動かしてるサーバも内部的にはこんなことしてるんだなーと学びがあった。

C言語も久々に書いて、シンプルだがシンプル故に大変だなーと思うなど。

### 並行プログラミング入門

<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=abekohtech-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=4873119596&linkId=57a94a461d0345c2699b411593b370c1"></iframe>

以前に一度読んだけど挫折→もう一度チャレンジ。ただ後半はやはり難しい。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">並行プログラミング入門、システムプログラミングの本など読んだうえで改めてトライすると解像度上がった気がする<br>だが、まだ後半あたりは読んでて難しいなーって感じだった……逆にこの一冊きちんと理解できれば並行まわりかなり自信つきそうだ<a href="https://t.co/c8bYtOSV0Q">https://t.co/c8bYtOSV0Q</a></p>&mdash; abekoh (@abekoh_bcky) <a href="https://twitter.com/abekoh_bcky/status/1654486802571436038?ref_src=twsrc%5Etfw">May 5, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## パフォーマンス

### 達人が教えるWebパフォーマンスチューニング

<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=abekohtech-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B0B1Z9ZMY6&linkId=6927fc9cb2180041fa5cdcbd665c85b8"></iframe>

ISUCON参加するために読んだ。Webアプリケーションのチューニングの基本的なところが抑えられていてよかった。

全体的に浅く広く、著者が書きたいことを書くって感じの内容だったので、深掘りたいならそのトピックにあった別の本を読むのがよさそう。

### 詳解システムパフォーマンス

<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=abekohtech-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=4814400071&linkId=c7081647fb5727e31bf5d5749c54ea27"></iframe>

OSレベルのパフォーマンスの話。分厚くて全部読んでないけれど、最初の4章あたりまでは「パフォーマンスチューニングやってくのにこれだけは知っとけ」みたいな内容で勉強なった。

## データベース

### SQLアンチパターン★

<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=abekohtech-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=4873115892&linkId=a50aaae91c904aebbae3ecb0bd2d00fd"></iframe>

だいぶ前に買って積んでいたやつ。EAVとか以前疑問を持たずに触ってたが、読むと確かにな〜と思ったり、木構造についてのあれこれやとりあえずIDの話など業務にそのまま役に立つ内容が多かった。

原著で改版されたものが出てるっぽいので読み返すときはそちらを選ぼう。

[SQL Antipatterns, Volume 1: Avoiding the Pitfalls of Database Programming by Bill Karwin](https://pragprog.com/titles/bksap1/sql-antipatterns-volume-1/)

### 失敗から学ぶRDBの正しい歩き方★

<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=abekohtech-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B07P8PMHLL&linkId=f514c3d5f2f298dc8587b8d85cb4851c"></iframe>

SQLアンチパターンとは被らない内容だったのでこちらも読むべき。どこまで制約を入れるべきか、JSONを使うべきかの話など学びがあった。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">読んだ、意識できていないところ結構多くあって学びが多かった<br><br>失敗から学ぶRDBの正しい歩き方 (Software Design plus) <a href="https://t.co/pQTKCcZAKE">https://t.co/pQTKCcZAKE</a></p>&mdash; abekoh (@abekoh_bcky) <a href="https://twitter.com/abekoh_bcky/status/1626869718685745152?ref_src=twsrc%5Etfw">February 18, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## DevOps

### システム運用アンチパターン

<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=abekohtech-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=4873119847&linkId=ea1099bdb1a8c07582bd536071b66c2e"></iframe>

会社の輪読会で読んだ。単純なシステム運用のテクニックの話だけでなく、文化づくりなりコミュニケーションのやり方なり会社でDevOpsやってく上でのなんでもが詰まってる本だった。

文字文字しくてやや読みにくくはあったかも。

## その他

### プログラマー脳

<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=abekohtech-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B0BVDQM5H1&linkId=9024f98a2ac6c2117bcbc31fc92c5164"></iframe>

プログラミングにおける認知負荷に関して深掘りした話。認知科学の方面から攻めるという、珍しいアプローチからのプログラミングスキルアップの本だった。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">「プログラマー脳」読んだ。似た感じの良いコードとは？系の本の中でもより本質的な要素が多く、そこから自分なりに再構成できそうな気がして面白かった。裏付けとなる研究結果も満載でよかった<a href="https://t.co/gC324ofi2v">https://t.co/gC324ofi2v</a></p>&mdash; abekoh (@abekoh_bcky) <a href="https://twitter.com/abekoh_bcky/status/1670770059936161792?ref_src=twsrc%5Etfw">June 19, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### 情熱プログラマー★

<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=abekohtech-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B01IGW5MQ0&linkId=4c66788d7724e771b56fa3a77c2c90a2"></iframe>

読んで元気の出る本。キャリアについて不安になったらまた読み返す。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">「情熱プログラマー」読んだ。<br>ターゲットは研究や趣味でやるプログラマーではなく、明確に職業プログラマーに向けたもの。それもただプログラミング上達に対してでなく、どういう考え方でキャリア積めば幸せになるかってメッセージ性が強い。勇気をもらえる良い本だった<a href="https://t.co/JZYPdzvdb2">https://t.co/JZYPdzvdb2</a></p>&mdash; abekoh (@abekoh_bcky) <a href="https://twitter.com/abekoh_bcky/status/1673696129350012928?ref_src=twsrc%5Etfw">June 27, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### 「技術書」の読書術

<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=abekohtech-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B0BF469YLK&linkId=38552171bc1d888f5d17fecef5610a2e"></iframe>

技術書の読み方についていろいろ紹介。面白い読み方いろいろあるなーと気づきはあったものの、いや好き勝手に読ませてくれってなったのであまり参考にはなってないかも。

## まとめ

改めて感想書こうとして、内容忘れているのが多かった。量ではなく質を大切にしたい。
来年はあまり詰め込みすぎず、読み返したり難しい本をゆっくり読むことに重きをおきたいかも。『並行プログラミング入門』みたいに2年連続登場とかまた発生させても良しとする感じで。

基本は物理本派で、2月にラックを買ったがもう入りきれなくなってきている…読み返すことなさそうな本は処分するかなー。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">本棚組み立てたー正確にはラックだけど<br>分野ごとにソートできて大変満足 <a href="https://t.co/stNj6nYpru">pic.twitter.com/stNj6nYpru</a></p>&mdash; abekoh (@abekoh_bcky) <a href="https://twitter.com/abekoh_bcky/status/1628607795552747521?ref_src=twsrc%5Etfw">February 23, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

