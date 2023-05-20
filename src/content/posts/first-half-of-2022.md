---
title: '2022年上半期振り返り'
summary: 'やったこと振り返りなどメモ程度に。もう7月後半だけど。 ?? '''
categories: []
tags: ['Rust','Go','読書','OSS','LeetCode','English']
publishedAt: 2022-07-24T07:22:00.000Z
modifiedAt: 
draft: false
isHtml: false
microCMSId: 'first-half-of-2022'
microCMSCreatedAt: 2022-07-24T07:06:06.284Z
microCMSUpdatedAt: 2022-07-24T07:25:10.318Z
microCMSRevisedAt: 2022-07-24T07:25:10.318Z
---
やったこと振り返りなどメモ程度に。もう7月後半だけど。

## Rust

年始ごろからRust学び始めた。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">Rustやってみようとひたすらこれ読み進めてる<br>ownershipとかlifetimeとか独特だなーと思いつつ、ここC++だなーGoだなーPythonだなーJavaだなーとなって面白い<a href="https://t.co/JLlXj83A2P">https://t.co/JLlXj83A2P</a></p>&mdash; abekoh (@abekoh_bcky) <a href="https://twitter.com/abekoh_bcky/status/1477666371928731653?ref_src=twsrc%5Etfw">January 2, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">積み本また増やしてしまった<br>5章まで読んで、公式チュートリアルとはまた違う視点での復習になって良かった<a href="https://t.co/vRAhNtXC3J">https://t.co/vRAhNtXC3J</a></p>&mdash; abekoh (@abekoh_bcky) <a href="https://twitter.com/abekoh_bcky/status/1485272205785468929?ref_src=twsrc%5Etfw">January 23, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

流行ってたWordleの問題解くCLIつくった。

[RustでWordle補助ツールつくってみた - abekoh's tech note](https://blog.abekoh.dev/posts/wordle-helper-with-rust)

actix-web, Yew使って積本管理アプリでも作ってみるかーとやろうとしたが、モチベ続かず断念。WebAssemblyつかったウェブフレームワーク、応援したいものの、まだまだ発展途上。

[abekoh/rs-books: [WIP] manage my bookshelf](https://github.com/abekoh/rs-books)

所有権の考え方なり、文法なり、いろいろ楽しい反面、なかなか実用的なユースケースが身近で思いつかずにいる。とはいえ技術的な面白さ駆動で学習継続中。

## ファミコンエミュレータ

[Rustでゲームボーイアドバンスエミュレーターを書いた](https://zenn.dev/tanakh/articles/gba-emulator-in-rust)という記事に触発されてはじめた。現在CPU実装まで。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">ファミコンエミュレータ実装、CPUが完成。Snake Gameが動いた！！ <a href="https://t.co/D3HQsYeZxx">pic.twitter.com/D3HQsYeZxx</a></p>&mdash; abekoh (@abekoh_bcky) <a href="https://twitter.com/abekoh_bcky/status/1548880076552384512?ref_src=twsrc%5Etfw">July 18, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

[Introduction - Writing NES Emulator in Rust](https://bugzmanov.github.io/nes_ebook/)に沿って実装している。
まずどこから手を付けるべきか全然わからなかったので非常にありがたい。音を出すところ(APU)のところはComing soonとなっている。

頑張って進めてマリオが動くところを見たい。

## Go

転職前の有休期間でつくってたものブラッシュアップして公開。バックエンドGo、だけどなんだかんだフロントのコメント表示箇所がんばってる。

[ニコニコ実況の過去ログをアニメの放送情報から検索して見れるサービスをつくった - abekoh's tech note](https://blog.abekoh.dev/posts/nicojk-anime-archive-viewer)

会社では相変わらずGoで、楽しい、辛いを繰り返してる。
Javaのデザインパターンやアーキテクチャなどの考え方がGoだとうまくはまらんってことも多く、経験を通していろいろ学べている。

あと、Mockライブラリの[matryer/moq](https://github.com/matryer/moq)が一押しなので皆使おう。↓選定ログ

[Goのモックライブラリの技術選定](https://zenn.dev/abekoh/scraps/ed6dc16ac9cabd)

## LeetCode

社内の人に触発されてやってみた。

[abekoh - LeetCode Profile](https://leetcode.com/abekoh/)

50問程度で止まってる。。

CS出身ながら全然忘れてる、全然解けないがあって苦しい。また目標決めてやる気出たら再開する。

解答はここにおいてる。Rust/C++でそれぞれユニットテストをいい感じに書けるように環境構築した。

[abekoh/leetcode: my leetcode solutions](https://github.com/abekoh/leetcode)

## OSS

普段めちゃ使ってるわけだし貢献しようと試みている。
現状ドキュメント修正など、かんたんなとこしか手が出ていない。

- [remove .DS_Store by abekoh · Pull Request #2976 · rustwasm/wasm-bindgen](https://github.com/rustwasm/wasm-bindgen/pull/2976)

- [Replace `tokio::time::delay_for` with `tokio::time::sleep` by abekoh · Pull Request #273 · actix/actix-website](https://github.com/actix/actix-website/pull/273)

- [Fix dependencies and add mut by abekoh · Pull Request #80 · oreilly-japan/conc_ytakano](https://github.com/oreilly-japan/conc_ytakano/pull/80)

普段使うOSSじゃないと課題を見つけるの難しそう。Rust学びながらRust関連に貢献したい、って考えてたけど、まずは業務で使ってるGo関連に絞るのもありかも？

## 読書

このあたり。つぶやいてないけど読んだのもある。ここは昨年同様年末にまとめたい。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">『SCRUM BOOT CAMP THE BOOK』読んだ。<br>スクラムのイベントやロールについて、スクラムガイドより具体的な解説や動き方、プラクティスなど散りばめられててよかった。漫画が主軸なおかげもあってサクッと読めた。<a href="https://t.co/YLkcceM0ma">https://t.co/YLkcceM0ma</a></p>&mdash; abekoh (@abekoh_bcky) <a href="https://twitter.com/abekoh_bcky/status/1477995260123152396?ref_src=twsrc%5Etfw">January 3, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">きちんとGOOS本読もうとしてたが、第3部の実例はあまり頭に入ってっこんな…実際に書きながらがよさそう<a href="https://t.co/zMJnTFRt0j">https://t.co/zMJnTFRt0j</a></p>&mdash; abekoh (@abekoh_bcky) <a href="https://twitter.com/abekoh_bcky/status/1490343646138277889?ref_src=twsrc%5Etfw">February 6, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">『チームトポロジー』読んでるなう<br>PART1で自分もなんとなくイメージしていたが伝えれずにいた、気持ちよくエンジニアリングできるチームについてしっかり言語化されていてすごい良い…<a href="https://t.co/Ms5m8VdjpF">https://t.co/Ms5m8VdjpF</a></p>&mdash; abekoh (@abekoh_bcky) <a href="https://twitter.com/abekoh_bcky/status/1495096004794007553?ref_src=twsrc%5Etfw">February 19, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">これ読んでる<br>プロダクトバックログの作成・精査あたりのノウハウ全然わかんなかったが参考になりそうだ<a href="https://t.co/xZPEyPFwnK">https://t.co/xZPEyPFwnK</a></p>&mdash; abekoh (@abekoh_bcky) <a href="https://twitter.com/abekoh_bcky/status/1508005176350699520?ref_src=twsrc%5Etfw">March 27, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">読みました<br>悪い例を出す→なぜ悪いかを解説→良いパターンの紹介<br>と、徹底して例示・なぜ？から入るところが納得感感じられてよかったです<br><br>良いコード／悪いコードで学ぶ設計入門―保守しやすい　成長し続けるコードの書き方 <a href="https://t.co/F3dHrj5ojP">https://t.co/F3dHrj5ojP</a> <a href="https://twitter.com/hashtag/%E3%83%9F%E3%83%8E%E9%A7%86%E5%8B%95%E6%9C%AC?src=hash&amp;ref_src=twsrc%5Etfw">#ミノ駆動本</a></p>&mdash; abekoh (@abekoh_bcky) <a href="https://twitter.com/abekoh_bcky/status/1520232770894630912?ref_src=twsrc%5Etfw">April 30, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">『ソフトウェアアーキテクチャの基礎 』読了<br>個人的に第3部「テクニックとソフトスキル」の、アーキテクトとしてどう振る舞うべきか？ある課題に対してどうアプローチすればよいか？といった考え方の話が一番沁みた<a href="https://t.co/eqsmtIRJ13">https://t.co/eqsmtIRJ13</a></p>&mdash; abekoh (@abekoh_bcky) <a href="https://twitter.com/abekoh_bcky/status/1523306772798132224?ref_src=twsrc%5Etfw">May 8, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">実用 Go言語<br>Javaやってた人に向けた感じになっててとても嬉しい<a href="https://t.co/lhU151WjcT">https://t.co/lhU151WjcT</a></p>&mdash; abekoh (@abekoh_bcky) <a href="https://twitter.com/abekoh_bcky/status/1534907555230924800?ref_src=twsrc%5Etfw">June 9, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## 英語

オンライン英会話体験やってみたり、[英語のハノン](https://www.amazon.co.jp/dp/B09NY53725/)毎日練習するとかしてたが挫折。
1年後には外資面接チャレンジしたい、みたいな雑〜な目標考えてたけどだめですね。

もっと身近に何したいって思えることを目標にして英語は再開したい。
VTuberのにじさんじグループが好きだから、そこからNIJISANJI ENで英語学ぶのに可能性を感じていて、そこを目標にすること検討中。
[Rosemi-sama](https://www.youtube.com/channel/UC4WvIIAo89_AzGUh1AZ6Dkg)の雑談聞き取れるようなりたい。


## まとめ

ブログエントリににもなっていないことまとめられた。いろいろやってる反面挫折も多い、、熱中してやり遂げられるものほしいな。とはいえ何でもやってみて得られることも多くあるので自分のペースで下半期ももろもろトライしたい。
    