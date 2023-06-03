---
title: 'Go Conference 2023 参加メモ'
summary: '2023/06/01、ゴーコンに参加してきました。いろんなセッション聞いた自分用メモです。'
categories: [ 'tech' ]
tags: ['go']
publishedAt: 2023-06-03T18:00:00.000+09:00
modifiedAt:
draft: false
---

## タクシーアプリ『GO』高速マッチングシステムで実践したGoチューニングテクニック

https://gocon.jp/2023/sessions/A1-SP/

- リクエスト→レスポンスすぐに返すのではなく、数秒レベルのバッチで一気にレスポンス返す
- マッチングロジックはPythonでステートレス、それ以外はGo
- 並列化頑張るの話
- `golang.org/x/sync/semaphore` で並列数制御
- `errorgroup`は1つのgo routineしか返せないので、独自`errorgroup`を作成
- Redisでロック機構つくる

## 無理なく始めるGoでのユニットテストの並行化戦略

https://gocon.jp/2023/sessions/A2-SP/

- 並行と並列の言葉の定義大事
- `go test` の `-p` と `-parallel` は別物
  - `-p=2` とすると2つのテストプロセスが実行される
  - `-parallel=2` とするとパッケージの並列化
- `-p`はデフォルトで設定、`-parallel`は`t.Parallel()`を埋め込む必要性
- 平行化したテストで`os.Setenv`使うはNG、`t.Setenv`使おう
  - ↑`t.Parallel`と併用するとpanicすることも
- ループ変数再定義がmust, `tt := tt`
  - (最近`go vet`で検知できるようなった気もする)
- `t.Parallel()`自動付与
  - https://github.com/sho-hata/tparagen
  - https://github.com/kunwardeep/paralleltest でCIでチェック
- https://github.com/achiku/pgtxdb
  - https://github.com/DATA-DOG/go-txdb の改良版っぽい

## Fun with Slices

https://gocon.jp/2023/sessions/B3-L/

- https://twitter.com/danicat83 さん
- sliceの内部構造の話
- `reflect.SliceHeader`でスライスのヘッダ要素みれる
- `append`
  - 必要に応じて`underlying array`を拡張する
- `append`は`cap`の範囲を超えて適用？
  - (ついていけてない、スライド見返したい、、あとで見返す)
- きちんとslice新たに作るときは`make`したほうが無難そう
- `local := make([]int, 0, len(s), s...)`の最後、`copy(local, s)`するのと同じ
- Sliceをレシーバとする場合
  - レシーバが`*`つけなければコピーがはしる
- 並行処理でslice操作するときはsyncでなくchannel使おう！

## 「Go Style Guide」から学んだ可読性の高いコードの書き方

https://gocon.jp/2023/sessions/A4-S/

- https://google.github.io/styleguide/go/
- ゼロ値は設定しない、それによってOptionの場合は指定いｓた項目が目指す
- genericsは使わないで済むならう使わない
  - interface受け取るだけで済むならgenericいらない
- `fmt`で`"`を出力するなら、`\"`でなく`%q`使おう
- pkg名でローカル変数と被りそうなものは使わない
  - かぶるなら`pkg`suffixつける、`net/url`→`urlpkg`とか
- すべての場面で正しいというわけではない、チームのフェーズや規模等によって重要視するものは異なる

## 次なるrouterパッケージ選定のしざまと決め手について

https://gocon.jp/2023/sessions/A6-SP/

- https://github.com/gorilla/mux がarchiveされたので移行どうする問題
- std,echo,gin,chiあたり検討
- (forkして自分ら管理、とかその他fork先を探る、という手は考えなかったかというのも気になった)
  - https://techgaun.github.io/active-forks/index.html#https://github.com/gorilla/mux 特になさそうではある、、
- chiはかなり薄い感じでよさそう
  - うちもecho依存からgqlgenしているところがびみょいので、chiにしたさある

## どうしてもcgoから逃げられなくなったあなたに知ってほしいcgoの使い方入門

https://gocon.jp/2023/sessions/B7-L/

- スライド見やすい、cgo導入による負担の大きさのとこなど
- recoverできなるなるのとか辛そう
- cgoに関する公式Docはとても少ない
- https://www.swig.org/
- SWIGの使い方など
- 文字列の扱いの難しさ