---
title: 'Goでradikoの番組をアーカイブするツールをつくってみる'
summary: 'radikoのタイムフリー番組を自動でダウンロード、それをいい感じに聴けるような仕組みを模索した備忘録。'
categories: [ 'tech' ]
tags: ['golang','radiko']
publishedAt: 2023-10-08T11:15:00.000+09:00
modifiedAt:
draft: false
isHtml: false
---

普段自分は深夜ラジオを作業用BGMで聴くことが多い。特に「星野源のオールナイトニッポン」は長いこと聴いている。

社会人になった今リアルタイムは厳しく、radikoのタイムフリーやSpotifyに配信されたものを聴く。
Spotify配信のものが手軽で過去のも聴けて便利なのだが、権利の関係で曲が流れない、BGMも一部流れない(ANNの代名詞・Bittersweet Sambaも流れない …)というところがネックで、やはりradiko経由で聴くのがよさそう。

Chinachuによるテレビ録画みたく、radikoもルールに従ってダウンロードする仕組みが欲しくなり、実装してみた。
やりたかったこと完璧にはできなかったが、その過程も含めてメモしておく。

## やったことざっくり

リポジトリ: [abekoh/radiko-archiver: Archive radiko programs](https://github.com/abekoh/radiko-archiver)

※動作不安定なところがまだ結構ありそう。また、使う場合は個人利用限定でお願いします。

- goroutine, channelなどを駆使して自動ダウンロードする仕組みをつくった
  - 先人のをかなり参考にした [yyoshiki41/radigo: Record radiko 📻](https://github.com/yyoshiki41/radigo)
- Podcastアプリで聴けるようにPodcast向けRSSをプライベートに配信しようとしたが、いろいろ懸念があり断念
- 代わりに、Dropboxに自動でアップロードするようにした

使い方はREADMEに簡単にまとめてる。

ちなみに、動作環境は[こちら](/posts/ubuntu2204-mirakurun-epgstation)の記事でも出てきた物理Ubuntuサーバー。

## 自動ダウンロード

goroutineを駆使して、

- rules.tomlをもとにスケジュールを`planner`で組み
- `dispatcher`でスケジュールに従って`fetcher`を実行
- `fetcher`でファイルのダウンロード、結合を実施

という動きにしている。goroutine、chan、selectなど非同期な要素を組み合わせて思い通りに実装できるのが楽しい。

workerをいくつか役割ごとに動かしてみたが、`dispatcher`ひとつだけ動かすだけでもシンプルでよいかも？それだとユニットテスト書くときごちゃりそうな気もするけど。

## Podcast RSS プライベート配信 (断念)

アーカイブしたファイルを聴く方法について、当初はPodcastアプリで聴く想定だった。

次のようなRSSの仕様に沿ってXMLをHTTPで公開、自宅LAN内だけで取れたらと思っていた。

- [Podcast RSS feed requirements - Apple Podcasts for Creators](https://podcasters.apple.com/support/823-podcast-requirements)
- [RSS feed guidelines for Google Podcasts - Podcasts Manager Help](https://support.google.com/podcast-publishers/answer/9889544?hl=en)

しかし、試してみたところそれだとダメ。インターネットからクロールできないといけないっぽい。そりゃそうか…

回避策として、BASIC認証設定して[Cloudflare Tunnel](https://www.cloudflare.com/products/tunnel/)でインターネット公開して`https://username:password@example.com/`といったURLを登録してしまえば突破できそうと思ったけど、
完全プライベート向けにしたいもののパスワードをそのままPodcastサービスに教えてしまうのは抵抗があったのでやめた。

結局、シンプルにダウンロードしたファイルをDropboxに順次アップロードする方法を取って、スマホから同期するようにした。

## 雑感

Go 1.21から入った [log/slog](https://pkg.go.dev/log/slog) を今回使ってログを出すようにしてみた。サードパーティほど機能もりもりではないものの素朴でちょっとしたアプリに入れるとかはとても良さそうだった。

ディレクトリ構成について、最近Go公式から出たものを参考に組んでみた。シンプルな指針ながらこういうのあると嬉しい。  
[Organizing a Go module - The Go Programming Language](https://go.dev/doc/modules/layout)


ラジオ・Podcastは1つのPodcastアプリで完結させるってことを目標にしてたができなくて残念。
さらに、愛用していた[Google Podcast](https://podcasts.google.com/)も来年サービス終了のようでこれも残念。
まぁPocket Castsなどに乗り換えても対して困らないんだけど…
余裕があったら、モバイル開発入門ついでにプライベート配信にも対応したPodcast再生アプリ開発とかやってみたい。
