---
title: '今年読んだ本まとめ2023'
summary: '今年読んだ本のひとことまとめ、備忘録的なもの。2023年版。'
categories: ['tech']
tags: ['computer-science','golang','ddd','database','devops','clang','typescript','reading-book']
publishedAt: 2023-12-28T23:30:00.000+09:00
modifiedAt: 
draft: false
isHtml: false
---
## はじめに

今年読んだ本のひとことまとめ、備忘録的なもの。2023年版。

それなりにたくさん挙げてはいるものの、通読していなかったり内容ほぼ忘れてるのもあるのであしからず。通読失敗したやつは必要になったときに読み返したいところ。

特にお気に入りの本には★をつけてます。また、前回までに紹介したが読み返した本も挙げてます。

前回まで:

- [今年読んだ本まとめ2022 - abekoh's tech note](/posts/books-2022)
- [今年読んだ本まとめ2021 - abekoh's tech note](/posts/books-2021)

## 設計・コーディング手法

### 単体テストの考え方/使い方★

<a href="https://www.amazon.co.jp/dp/B0BLTG8Z9K">https://www.amazon.co.jp/dp/B0BLTG8Z9K</a>

今年読んだ中で一番学びがあった。テストの書き方はもちろん、設計の考え方も大変参考になる。

テストはもともとSpringでDIしやすいことをいいことにモックを作りまくる(いわゆるロンドン学派)のが好きだったけれど、この本を読んで考え方をシフトし、モックは必要最小限でリファクタリング耐性を重視した実装にするようになった。

関数型アーキテクチャの話など、テストしやすい設計・実装についても多く学びがあった。

今年書いた以下の記事でも、学んだことを生かしつつ引用した内容となっている。

- [moqを使ったGoのテスト](https://zenn.dev/abekoh/articles/21acde07e1f555)
- [開発効率を追い求めた実装プラクティス集](https://zenn.dev/micin/articles/effective-development-practices)

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">半分ちょい読んだが、ぐう名著では<br>DDDトリレンマを提唱した方による著書でもあり、その詳細や実践パターンなんかも取り上げられてて面白い<br><br>単体テストの考え方/使い方 <a href="https://t.co/EnrYaNnOX3">https://t.co/EnrYaNnOX3</a></p>&mdash; abekoh (@abekoh_bcky) <a href="https://twitter.com/abekoh_bcky/status/1619356822707781632?ref_src=twsrc%5Etfw">January 28, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">「読み込みに関してドメイン・モデルは必要ない」って言い切っててわろた。全体的に清々しさがあって良いんだよなこの本</p>&mdash; abekoh (@abekoh_bcky) <a href="https://twitter.com/abekoh_bcky/status/1620067179256504327?ref_src=twsrc%5Etfw">January 30, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### モノリスからマイクロサービスへ

<a href="https://www.amazon.co.jp/dp/4873119316">https://www.amazon.co.jp/dp/4873119316</a>

段階的にアーキテクチャを変更していく話はマイクロサービス関係なく活用できそう。実際モノリス内部での大幅改修でこの本の考え方応用してみている。

### データ指向プログラミング

<a href="https://www.amazon.co.jp/dp/B0BWR57K64">https://www.amazon.co.jp/dp/B0BWR57K64</a>

オブジェクト指向プログラミングに反して、データとコードを分離・汎用データ型だけを使う・データはイミュータブルといった思想をもつデータ指向プログラミング(DOP)についての解説本。

データとコードを分離、すなわちオブジェクトに振る舞わせないといった考え方が良いという点は自分も薄々感じてたところなので面白かった。その点を[開発効率を追い求めた実装プラクティス集](https://zenn.dev/micin/articles/effective-development-practices)で引用して紹介してみた。

一方で、汎用データ型を使っていく・データの型検証はJSON Schemaでやっていくみたいな考えは実際開発者体験は良いものにはならなさそう。JSなら普通にTypeScriptで型定義・互換性のある型ならそのまま変換なく使えるじゃん、くらいの考えで導入したい。

物語形式で話が進むが、なんというか、登場人物が素直に受け入れすぎてたり、そうはならんやろと思ったりとリアリティは薄く感じた。

### システム設計の面接試験

<a href="https://www.amazon.co.jp/dp/B0C61BNTW9">https://www.amazon.co.jp/dp/B0C61BNTW9</a>

面接試験というテーマのもと、ニュースフィードシステム、チャット、動画サイトなどのサービスのアーキテクチャ設計についてどんなアーキテクチャが模範解答か？どういった点が深掘りされる点になるか？を解説していく内容。

特定のベンダー依存なく、どういうサーバ構成でどこでキューを使ってロードバランサ使って…とざっくりのアーキテクチャの見本市にもなる点が良い気がする。そういう書籍は意外とないような？知らないだけかもだけど。

一方で、翻訳が全体的にいまひとつ。エンジニアが監修していないような訳になっていたのがやや残念。

### 進化的アーキテクチャ

<a href="https://www.amazon.co.jp/dp/4873118565">https://www.amazon.co.jp/dp/4873118565</a>

全体的にふわっとした内容でいきなり読むとよくわからないが、『ソフトウェアアーキテクチャの基礎』を通過しているともう少し理解が進むような気がする内容。(同じ著者でこの本のほうが古いはずだけれど)

特に目立つキーワードが「適応度関数」。すべてのソフトウェアアーキテクチャにおいてそれに必要な要件(機能要件・非機能要件問わず)があり、それにいかに適応できるかの指標を適応度関数として定義、観測して適応させていくことが重要といったことは掴めた。

### Domain Modeling Made Functional

<a href="https://www.amazon.co.jp/dp/B07B44BPFB">https://www.amazon.co.jp/dp/B07B44BPFB</a>

会社の輪読会で読んだ。関数型でどうDDDやってくか？という内容。

言語はF#だが、考え方自体は他の言語でも適用できる面も多い印象だった。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">必要に迫られてきたので読みはじめた<br><br>ドメインエキスパートとのやり取りが冒頭に出てくるのはEvansリスペクトかな。ちょくちょくDDD特有の用語が出てくるから少し予習しておいたほうが読みやすいのかもしれない<a href="https://t.co/3VPYa2MUlF">https://t.co/3VPYa2MUlF</a></p>&mdash; abekoh (@abekoh_bcky) <a href="https://twitter.com/abekoh_bcky/status/1621833442798505990?ref_src=twsrc%5Etfw">February 4, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">カリー化がDependency Injectionに活用されるのなるほどなー点と点がつながった感覚</p>&mdash; abekoh (@abekoh_bcky) <a href="https://twitter.com/abekoh_bcky/status/1622230677587632128?ref_src=twsrc%5Etfw">February 5, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">ChoiceTypesのRDB保存で複雑じゃなけりゃとりあえずSTIで1テーブルにしとけってのがあまり腑に落ちないかな、本当に変わることなけりゃよいけど基本はテーブル分けておきたい<br>ORMなんか使わんぞってスタイルなのは好き</p>&mdash; abekoh (@abekoh_bcky) <a href="https://twitter.com/abekoh_bcky/status/1629780804955156480?ref_src=twsrc%5Etfw">February 26, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## プログラミング言語

### プロを目指す人のためのTypeScript入門

<a href="https://www.amazon.co.jp/dp/4297127474">https://www.amazon.co.jp/dp/4297127474</a>

TypeScript業務で使ってきたものの知らないことがたくさんあって気づきが得られてよかった。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">読んだ。知らないこともあってよい穴埋めになった気がする。これは式、これは型など曖昧にせず丁寧に解説されてるのが好印象でした<a href="https://t.co/T3dsKKWWJI">https://t.co/T3dsKKWWJI</a></p>&mdash; abekoh (@abekoh_bcky) <a href="https://twitter.com/abekoh_bcky/status/1640725254917214208?ref_src=twsrc%5Etfw">March 28, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### Production Ready GraphQL

[Production Ready GraphQL | The Book](https://book.productionreadygraphql.com/)

業務でGraphQL使うなら読めと言われたので。ただざっくりとしか読めてない…
ページネーションの話とかMutationの返り値にはPayloadを設定するとか、業務に活用できてよかった。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">英語本疲れたから逃げてたけど読んでこう、GraphQLスキーマ設計の迷いを払拭していきたい<a href="https://t.co/abnZpjgcv6">https://t.co/abnZpjgcv6</a></p>&mdash; abekoh (@abekoh_bcky) <a href="https://twitter.com/abekoh_bcky/status/1644008285484503040?ref_src=twsrc%5Etfw">April 6, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## 低レイヤー

### Goならわかるシステムプログラミング★

<a href="https://www.amazon.co.jp/dp/4908686122">https://www.amazon.co.jp/dp/4908686122</a>

Goを通じて低レイヤーまわり全般に触れていく本。とても読み応えあった。
システムプログラミング学びたいって人いたらまずこれを薦めていきたい。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">Goならわかるシステムプログラミング、どの解説も丁寧で読み応えあった。特定OSに絞らず、Linux/Mac/Windowsそれぞれ内部でどう扱っているか比較しながらなところも他にはない面白さ。<a href="https://t.co/FKv8JhkwEh">https://t.co/FKv8JhkwEh</a></p>&mdash; abekoh (@abekoh_bcky) <a href="https://twitter.com/abekoh_bcky/status/1647614212729081856?ref_src=twsrc%5Etfw">April 16, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### エンジニアのためのCPU入門★

<a href="https://www.amazon.co.jp/dp/4908686165">https://www.amazon.co.jp/dp/4908686165</a>

現代のCPUの最適化手法についてとことん解説していく本。
大学の講義で学んだことあったのは基礎的なところだったので、そこから先の応用が目からウロコだった。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">「プログラマーのためのCPU入門」読み終わった、現代CPUでやってる最適化のあれやこれや、知らないこと多くて面白かった<a href="https://t.co/3JscBHUwKy">https://t.co/3JscBHUwKy</a></p>&mdash; abekoh (@abekoh_bcky) <a href="https://twitter.com/abekoh_bcky/status/1667792996090392578?ref_src=twsrc%5Etfw">June 11, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### Linuxのしくみ

<a href="https://www.amazon.co.jp/dp/B0BG8J5QJ1">https://www.amazon.co.jp/dp/B0BG8J5QJ1</a>

図が多くわかりやすかった。とりあえずLinuxざっくり理解するのに良さそう。

### ふつうのLinuxプログラミング

<a href="https://www.amazon.co.jp/dp/B075ST51Y5">https://www.amazon.co.jp/dp/B075ST51Y5</a>

C言語を使ってシステムプログラミングのチュートリアル的なことができる内容。
HTTPサーバー実際に手を動かしてみて、普段業務で動かしてるサーバも内部的にはこんなことしてるんだなーと学びがあった。

C言語も久々に書いて、シンプルだがシンプル故に大変だなーと思うなど。

### 並行プログラミング入門

<a href="https://www.amazon.co.jp/dp/4873119596">https://www.amazon.co.jp/dp/4873119596</a>

以前に一度読んだけど挫折→もう一度チャレンジ。ただ後半はやはり難しい。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">並行プログラミング入門、システムプログラミングの本など読んだうえで改めてトライすると解像度上がった気がする<br>だが、まだ後半あたりは読んでて難しいなーって感じだった……逆にこの一冊きちんと理解できれば並行まわりかなり自信つきそうだ<a href="https://t.co/c8bYtOSV0Q">https://t.co/c8bYtOSV0Q</a></p>&mdash; abekoh (@abekoh_bcky) <a href="https://twitter.com/abekoh_bcky/status/1654486802571436038?ref_src=twsrc%5Etfw">May 5, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## パフォーマンス

### 達人が教えるWebパフォーマンスチューニング

<a href="https://www.amazon.co.jp/dp/B0B1Z9ZMY6">https://www.amazon.co.jp/dp/B0B1Z9ZMY6</a>

ISUCON参加するために読んだ。Webアプリケーションのチューニングの基本的なところが抑えられていてよかった。

全体的に浅く広く、著者が書きたいことを書くって感じの内容だったので、深掘りたいならそのトピックにあった別の本を読むのがよさそう。

### 詳解システムパフォーマンス

<a href="https://www.amazon.co.jp/dp/4814400071">https://www.amazon.co.jp/dp/4814400071</a>

OSレベルのパフォーマンスの話。分厚くて全部読んでないけれど、最初の4章あたりまでは「パフォーマンスチューニングやってくのにこれだけは知っとけ」みたいな内容で勉強なった。

## データベース

### SQLアンチパターン★

<a href="https://www.amazon.co.jp/dp/4873115892">https://www.amazon.co.jp/dp/4873115892</a>

だいぶ前に買って積んでいたやつ。EAVとか以前疑問を持たずに触ってたが、読むと確かにな〜と思ったり、木構造についてのあれこれやとりあえずIDの話など業務にそのまま役に立つ内容が多かった。

原著で改版されたものが出てるっぽいので読み返すときはそちらを選ぼう。

[SQL Antipatterns, Volume 1: Avoiding the Pitfalls of Database Programming by Bill Karwin](https://pragprog.com/titles/bksap1/sql-antipatterns-volume-1/)

### 失敗から学ぶRDBの正しい歩き方★

<a href="https://www.amazon.co.jp/dp/B07P8PMHLL">https://www.amazon.co.jp/dp/B07P8PMHLL</a>

SQLアンチパターンとは被らない内容だったのでこちらも読むべき。どこまで制約を入れるべきか、JSONを使うべきかの話など学びがあった。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">読んだ、意識できていないところ結構多くあって学びが多かった<br><br>失敗から学ぶRDBの正しい歩き方 (Software Design plus) <a href="https://t.co/pQTKCcZAKE">https://t.co/pQTKCcZAKE</a></p>&mdash; abekoh (@abekoh_bcky) <a href="https://twitter.com/abekoh_bcky/status/1626869718685745152?ref_src=twsrc%5Etfw">February 18, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## DevOps

### システム運用アンチパターン

<a href="https://www.amazon.co.jp/dp/4873119847">https://www.amazon.co.jp/dp/4873119847</a>

会社の輪読会で読んだ。単純なシステム運用のテクニックの話だけでなく、文化づくりなりコミュニケーションのやり方なり会社でDevOpsやってく上でのなんでもが詰まってる本だった。

文字文字しくてやや読みにくくはあったかも。

## その他

### プログラマー脳

<a href="https://www.amazon.co.jp/dp/B0BVDQM5H1">https://www.amazon.co.jp/dp/B0BVDQM5H1</a>

プログラミングにおける認知負荷に関して深掘りした話。認知科学の方面から攻めるという、珍しいアプローチからのプログラミングスキルアップの本だった。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">「プログラマー脳」読んだ。似た感じの良いコードとは？系の本の中でもより本質的な要素が多く、そこから自分なりに再構成できそうな気がして面白かった。裏付けとなる研究結果も満載でよかった<a href="https://t.co/gC324ofi2v">https://t.co/gC324ofi2v</a></p>&mdash; abekoh (@abekoh_bcky) <a href="https://twitter.com/abekoh_bcky/status/1670770059936161792?ref_src=twsrc%5Etfw">June 19, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### 情熱プログラマー★

<a href="https://www.amazon.co.jp/dp/B01IGW5MQ0">https://www.amazon.co.jp/dp/B01IGW5MQ0</a>

読んで元気の出る本。キャリアについて不安になったらまた読み返す。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">「情熱プログラマー」読んだ。<br>ターゲットは研究や趣味でやるプログラマーではなく、明確に職業プログラマーに向けたもの。それもただプログラミング上達に対してでなく、どういう考え方でキャリア積めば幸せになるかってメッセージ性が強い。勇気をもらえる良い本だった<a href="https://t.co/JZYPdzvdb2">https://t.co/JZYPdzvdb2</a></p>&mdash; abekoh (@abekoh_bcky) <a href="https://twitter.com/abekoh_bcky/status/1673696129350012928?ref_src=twsrc%5Etfw">June 27, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### 「技術書」の読書術

<a href="https://www.amazon.co.jp/dp/B0BF469YLK">https://www.amazon.co.jp/dp/B0BF469YLK</a>

技術書の読み方についていろいろ紹介。面白い読み方いろいろあるなーと気づきはあったものの、いや好き勝手に読ませてくれってなったのであまり参考にはなってないかも。

## まとめ

改めて感想書こうとして、内容忘れているのが多かった。量ではなく質を大切にしたい。
来年はあまり詰め込みすぎず、読み返したり難しい本をゆっくり読むことに重きをおきたいかも。『並行プログラミング入門』みたいに2年連続登場とかまた発生させても良しとする感じで。

基本は物理本派で、2月にラックを買ったがもう入りきれなくなってきている…読み返すことなさそうな本は処分するかなー。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">本棚組み立てたー正確にはラックだけど<br>分野ごとにソートできて大変満足 <a href="https://t.co/stNj6nYpru">pic.twitter.com/stNj6nYpru</a></p>&mdash; abekoh (@abekoh_bcky) <a href="https://twitter.com/abekoh_bcky/status/1628607795552747521?ref_src=twsrc%5Etfw">February 23, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

