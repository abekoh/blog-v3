---
title: 'RustでWordle補助ツールつくってみた'
summary: 'Wordle、流行ってますね。
うまく決まれば気持ちいい一方、そんな単語知らんねんってことも多々あります。
そんな鬱憤を晴らすべく補助ツールを作ってみました。

…というのは建前で、Rustの勉強がてら何か作ってみたかったというのが発端です。'
categories: ['tech']
tags: ['rust']
publishedAt: 2022-02-04T16:06:00.000Z
modifiedAt: 2024-01-28T18:00:00.000+09:00
draft: false
isHtml: false
microCMSId: 'wordle-helper-with-rust'
microCMSCreatedAt: 2022-02-04T16:16:38.414Z
microCMSUpdatedAt: 2022-02-05T16:06:54.349Z
microCMSRevisedAt: 2022-02-05T16:06:54.349Z
---

2024/01/28追記: Amazonへのリンクを修正しました。

---

Wordle、流行ってますね。
うまく決まれば気持ちいい一方、そんな単語知らんねんってことも多々あります。
そんな鬱憤を晴らすべく補助ツールを作ってみました。

…というのは建前で、Rustの勉強がてら何か作ってみたかったというのが発端です。

## つくったもの

CLIでWordleの候補となる単語を洗い出してくれるものです。

[abekoh/wordle_helper: Help solving Wordle question with CLI.](https://github.com/abekoh/wordle_helper)

![Demo](/assets/wordle_helper.gif)

特徴は以下の通り。

- インタラクティブに質問に答えるだけで答えにたどり着ける(はず。辞書になければ…)
- カラフルなプレビューがあり視覚的にわかりやすい
- 辞書、文字長などオプションで変更可能

練習用とはいえそこそこリッチになりました。
使ってみたい方いましたらGitHubのREADME覗いてください。

## 日本語対応したかったが…

[ポケモンWordle](https://wordle.mega-yadoran.jp/) たるものも登場したので、日本語も対応しようとしたのですが…
依存している [mitsuhiko/dialoguer](https://github.com/mitsuhiko/dialoguer) がASCII以外の文字を受け付けないようで、そこに改修が必要になってくるのでひとまずStayで。

[Error is occured when input Japanese characters · Issue #36 · abekoh/wordle_helper](https://github.com/abekoh/wordle_helper/issues/36)

一応 [sindresorhus/pokemon](https://github.com/sindresorhus/pokemon) を拝借してポケモン辞書作成して、fuzzy-selectを↑↓だけで選択してあげれば動きます。表示ズレ起きますが。。

```bash
curl https://raw.githubusercontent.com/sindresorhus/pokemon/main/data/ja.json | jq --raw-output '.[]' > /tmp/poke_jp.txt
wordle-helper -d /tmp/poke_jp.txt -m 10
```

![Demo Poke](/assets/worlde_helper_poke.gif)

## 感想

RustのEnumとパターンマッチング、依存ライブラリのマクロや言語機能として使えるユニットテストのおかげで気持ちよく書けました。
Rust特有の所有権・ライフタイムについても最初は「ん？？」ってなることありましたが、意外と慣れるもので、逆に「これはこのstructに持たせるべきだよなー」とか考えたりできるのが楽しく、他の言語書く時にも活かせるかもと感じました。

ちなみに、学習はこのあたりで進めました。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">Rustやってみようとひたすらこれ読み進めてる<br>ownershipとかlifetimeとか独特だなーと思いつつ、ここC++だなーGoだなーPythonだなーJavaだなーとなって面白い<a href="https://t.co/JLlXj83A2P">https://t.co/JLlXj83A2P</a></p>&mdash; abekoh (@abekoh_bcky) <a href="https://twitter.com/abekoh_bcky/status/1477666371928731653?ref_src=twsrc%5Etfw">January 2, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">積み本また増やしてしまった<br>5章まで読んで、公式チュートリアルとはまた違う視点での復習になって良かった<a href="https://t.co/vRAhNtXC3J">https://t.co/vRAhNtXC3J</a></p>&mdash; abekoh (@abekoh_bcky) <a href="https://twitter.com/abekoh_bcky/status/1485272205785468929?ref_src=twsrc%5Etfw">January 23, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<a href="https://www.amazon.co.jp/dp/4873119782">https://www.amazon.co.jp/dp/4873119782</a>

その気になったらまたRustの言語としてどう感じたかの記事とか書いてみたいと思います。

    
