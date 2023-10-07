---
title: 'Goでradikoの番組をアーカイブするツールをつくってみる'
summary: 'radikoのタイムフリー番組を自動でダウンロード、それをいい感じに聴けるような仕組みを模索したメモ'
categories: [ 'tech' ]
tags: ['golang']
publishedAt: 2023-09-19T00:25:00.000+09:00
modifiedAt:
draft: false
isHtml: false
---

普段自分は深夜ラジオを作業用BGMで聴くことが多い。特に「星野源のオールナイトニッポン」は長いこと聴いている。

社会人になった今リアルタイムは厳しく、radikoのタイムフリーやSpotifyに配信されたものを聴く。
Spotify配信のものが手軽で過去のも聴けて便利なのだが、権利の関係で曲が流れない、BGMも一部流れない(ANNの代名詞・Bittersweet Sambaも流れない)というところがネックで、やはりradiko経由で聴くのがよさそう。

Chinachuによるテレビ録画みたく、radikoもルールに従ってダウンロードする仕組みが欲しくなり、実装してみた。
やりたかったこと完璧にはできなかったが、その過程も含めてメモしておく。

## やったことざっくり

リポジトリ: [abekoh/radiko-archiver: Archive radiko programs](https://github.com/abekoh/radiko-archiver)

- goroutine, channelなどを駆使して自動ダウンロードする仕組みをつくった
  - 先人の例がかなり参考になった [yyoshiki41/radigo: Record radiko 📻](https://github.com/yyoshiki41/radigo)
- Podcastアプリで聴けるようにPodcast向けRSSをプライベートに配信しようとしたが、いろいろ懸念があり断念
- 代わりに、Dropboxに自動でアップロードするようにした

## 自動ダウンロードの仕組み

## Podcast RSS プライベート配信 (断念)

## 雑感

