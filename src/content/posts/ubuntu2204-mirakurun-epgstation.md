---
title: 'Ubuntu 22.04, Mirakurun, EPGStationでテレビ録画サーバーを構築する'
summary: 'もともと Ubuntu 20.04 で構築してたサーバーを、適当にアプデしてあれこれしたら壊れてしまったので、何度目かわからない構築作業やってみた。
特に詰まりそうなところか、覚え書き書いておく。'
categories: ['tech']
tags: ['ubuntu','linux','tv-recording']
publishedAt: 2022-10-01T11:55:00.000Z
modifiedAt: 
draft: false
isHtml: false
microCMSId: 'ubuntu2204-mirakurun-epgstation'
microCMSCreatedAt: 2022-10-01T11:45:44.344Z
microCMSUpdatedAt: 2022-10-01T12:07:30.200Z
microCMSRevisedAt: 2022-10-01T12:07:30.200Z
---
もともと Ubuntu 20.04 で構築してたサーバーを、適当にアプデしてあれこれしたら壊れてしまったので、何度目かわからない構築作業やってみた。

特に詰まりそうなところか、覚え書き書いておく。

## 物理サーバー

2016年ごろに構築したMini-ITXサイズのPC。CPUオンボードなマザボつかった省電力なやつ。

![rock01](https://images.microcms-assets.io/assets/4f79e018736547879adf5670ebeaccc3/225b1bad371642cda08756dedc01c13d/rock01.jpg?w=300)

![rock03](https://images.microcms-assets.io/assets/4f79e018736547879adf5670ebeaccc3/5649930296e14d02969f71cf5c1342b5/rock03.jpg?w=300)

PT3組み込み済み。PT3は購入してもう8年くらい？だが何の問題なく使えている。我が家にはBSがないので地上波のみつなげる。

![rock02](https://images.microcms-assets.io/assets/4f79e018736547879adf5670ebeaccc3/f60bc404201044bf832db8990875d02e/rock02.jpg?w=300)


わかる範囲でのパーツ↓

- [ASRock アスロック N3150-ITX｜TSUKUMO公式通販サイト](https://shop.tsukumo.co.jp/goods/4537694200714)
- [CoolerMaster クーラーマスター Elite 110 Cube RC-110-KKN2-JP｜TSUKUMO公式通販サイト](https://shop.tsukumo.co.jp/goods/4719512046746)
- [Amazon | PT3 Rev.A | アースソフト | TVチューナー・キャプチャーボード 通販](https://www.amazon.co.jp/%E3%82%A2%E3%83%BC%E3%82%B9%E3%82%BD%E3%83%95%E3%83%88-PT3-Rev-A/dp/B00857CQAM)
- [CFD販売 シーエフデー販売 W3N1600Q-L4G｜TSUKUMO公式通販サイト](https://shop.tsukumo.co.jp/goods/4988755011242)
- [玄人志向 クロウトシコウ 玄人志向 400W電源 KRPW-L5-400W/80+｜TSUKUMO公式通販サイト](https://shop.tsukumo.co.jp/goods/4988755020602)
- [Amazon.co.jp: SCM ICカードリーダー/ライター B-CAS・住基カード対応 SCR3310/v2.0 : パソコン・周辺機器](https://www.amazon.co.jp/IC%E3%82%AB%E3%83%BC%E3%83%89%E3%83%AA%E3%83%BC%E3%83%80%E3%83%BC%EF%BC%8F%E3%83%A9%E3%82%A4%E3%82%BF%E3%83%BC-B-CAS%E3%83%BB%E4%BD%8F%E5%9F%BA%E3%82%AB%E3%83%BC%E3%83%89%E5%AF%BE%E5%BF%9C-SCR3310-v2-0-%E3%80%90%E7%B0%A1%E6%98%93%E3%83%91%E3%83%83%E3%82%B1%E3%83%BC%E3%82%B8%E5%93%81%E3%80%91/dp/B0085H4YZC)



## Ubuntu Server 22.04

Ubuntu Server 22.04のisoをDL

[Get Ubuntu Server | Download | Ubuntu](https://ubuntu.com/download/server)

Bootable USBメモリを作成する。いろいろツールはあるが、今回はこれ使った

[Universal USB Installer - Boot from USB | Pen Drive Linux](https://www.pendrivelinux.com/universal-usb-installer-easy-as-1-2-3/)

起動。
このとき、インストール先でないHDDや不要なUSBデバイス、LANケーブルなど抜いておくといろいろ事故らなくて済む。

[![ubuntu22_01](https://images.microcms-assets.io/assets/4f79e018736547879adf5670ebeaccc3/c2040ed97ea143a3ae82c31384c740a2/ubuntu22_01.png?w=300)](https://images.microcms-assets.io/assets/4f79e018736547879adf5670ebeaccc3/c2040ed97ea143a3ae82c31384c740a2/ubuntu22_01.png)

この画面がでたら設定開始。

[![ubuntu22_02](https://images.microcms-assets.io/assets/4f79e018736547879adf5670ebeaccc3/7396e9277f88453fa19d070698c8ffe3/ubuntu22_02.png?w=300)](https://images.microcms-assets.io/assets/4f79e018736547879adf5670ebeaccc3/7396e9277f88453fa19d070698c8ffe3/ubuntu22_02.png)

ディスクまるごと潰すので、ほぼデフォルトのままインストール。

[![ubuntu22_03](https://images.microcms-assets.io/assets/4f79e018736547879adf5670ebeaccc3/aca7f7a5133f482282d4ed21e0f453aa/ubuntu22_03.png?w=300)](https://images.microcms-assets.io/assets/4f79e018736547879adf5670ebeaccc3/aca7f7a5133f482282d4ed21e0f453aa/ubuntu22_03.png)

Ubuntu20.04のころからあったけど、GitHubの公開鍵そのまま同期できるのが超便利。

[![ubuntu22_04](https://images.microcms-assets.io/assets/4f79e018736547879adf5670ebeaccc3/acc74b4cebcd410bb049094b9f49501f/ubuntu22_04.png?w=300)](https://images.microcms-assets.io/assets/4f79e018736547879adf5670ebeaccc3/acc74b4cebcd410bb049094b9f49501f/ubuntu22_04.png)

デフォルトで必要なやつ入れられる。使いそうなものにチェック。

[![ubuntu22_05](https://images.microcms-assets.io/assets/4f79e018736547879adf5670ebeaccc3/542875a472ee4112ba42f50832b24d24/ubuntu22_05.png?w=300)](https://images.microcms-assets.io/assets/4f79e018736547879adf5670ebeaccc3/542875a472ee4112ba42f50832b24d24/ubuntu22_05.png)

LANケーブル繋いでおけば、そのままセキュリティアップデートも実施できる。

[![ubuntu22_06](https://images.microcms-assets.io/assets/4f79e018736547879adf5670ebeaccc3/c3843330b3e34f8e9304dba38ec4375a/ubuntu22_06.png?w=300)](https://images.microcms-assets.io/assets/4f79e018736547879adf5670ebeaccc3/c3843330b3e34f8e9304dba38ec4375a/ubuntu22_06.png)

DONE

[![ubuntu22_07](https://images.microcms-assets.io/assets/4f79e018736547879adf5670ebeaccc3/7cd871f8c3294018bc7bc4c92e52f6e5/ubuntu22_07.png?w=300)](https://images.microcms-assets.io/assets/4f79e018736547879adf5670ebeaccc3/7cd871f8c3294018bc7bc4c92e52f6e5/ubuntu22_07.png)

移行はsshで作業する。

## PT3ドライバの準備

と書いたが、Linuxにデフォルトであるので不要だった。

https://github.com/torvalds/linux/blob/master/drivers/media/pci/pt3/pt3.c

このドライバは俗にいうDVB版というもので、地上デジタル・ビデオ放送に使われている国際規格に準じているらしい。

その他に、chardev版([mtsudo/pt3](https://github.com/m-tsudo/pt3))というものがあって、こちらを扱う記事も多くあるが、今回はスルーでよかった。

## Mirakurun, EPGStation

TVチューナーサーバーのMirakurun、録画予約管理ソフトEPGStationを用意する。

Mirakurunは録画中・視聴中のチャンネルをいい感じに同期、管理してくれて超便利。設定などもわかりやすい。

[Chinachu/Mirakurun: A Modern DVR Tuner Server for Japanese TV.](https://github.com/Chinachu/Mirakurun)

EPGStationはスマホにも対応したモダンなUIで使いやすい。

[l3tnun/EPGStation: Mirakurun を使用した録画管理ソフト](https://github.com/l3tnun/EPGStation)



これらをひとまとめにしたdocker compose設定がこれ。

[l3tnun/docker-mirakurun-epgstation: Mirakurun + EPGStation on Docker](https://github.com/l3tnun/docker-mirakurun-epgstation)

結局、これをcloneして`docker compose up -d`してあげたら普通に起動できた。

Docker普及してなかったころはここからいろいろ躓いてた記憶だが、非常に便利になったものだ。。

EPGStationのポートがデフォルトで `8888` だったが、Mirakurunのポート(`40772`)の近くにしたかったので、`40773`に設定変えた。

[![mirakurun](https://images.microcms-assets.io/assets/4f79e018736547879adf5670ebeaccc3/6db8b638cdfa4a8d9ded8768aa9d8020/mirakurun.png?w=300)](https://images.microcms-assets.io/assets/4f79e018736547879adf5670ebeaccc3/6db8b638cdfa4a8d9ded8768aa9d8020/mirakurun.png)

[![epgstation](https://images.microcms-assets.io/assets/4f79e018736547879adf5670ebeaccc3/32500cc74e4140359b42fcf844ff2510/epgstation.png?w=300)](https://images.microcms-assets.io/assets/4f79e018736547879adf5670ebeaccc3/32500cc74e4140359b42fcf844ff2510/epgstation.png)

## Samba

録画ファイルをWindowsから見れるよう、ファイルサーバをSambaで設定。

だいたいこの通り。

[Install and Configure Samba | Ubuntu](https://ubuntu.com/tutorials/install-and-configure-samba#1-overview)

## TVTest

リアルタイムでWindowsからテレビ見るためにTVTestを設定。

詳細な手順は忘れたが、ずっと前に設定したTVTest + BonDriver_Mirakurunの設定を引継いで使っている。今回も問題なく動いた。

[Chinachu/BonDriver\_Mirakurun](https://github.com/Chinachu/BonDriver_Mirakurun)

BonDriver_Mirakurun.iniの`SERVER_HOST`をサーバーのIPの設定だけ変更でOK。

![tvtest](https://images.microcms-assets.io/assets/4f79e018736547879adf5670ebeaccc3/946d29cab721462f903ab50abd08c78e/tvtest.png)

## まとめ

無事構築しなおしできた。2年くらい前に入れ直したときとあまり変わってない気がする。

Prime, Netflixが普及した今、あまり録画しまくったりすることなくなったけど。たまにリアタイで見たい・配信より先に見たいってときに便利。
    