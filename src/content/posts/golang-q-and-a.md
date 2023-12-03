---
title: 'Go入門とQ&A ver.2023.10'
summary: '他言語経験者向けに、Goの入門方法と、よく悩むところのQ&Aをまとめてみた記事です。'
categories: [ 'tech' ]
tags: [ 'golang' ]
publishedAt: 2023-10-19T23:05:00.000+09:00
modifiedAt:
draft: false
isHtml: false
---

会社の他言語経験者のエンジニア向けに、Goの入門方法とよく悩むところのQ&Aをまとめてみた記事のオープン版です。

**推敲しきれていない・やや思想含む・誤りがあるかも・検証しきれていない部分もありそう**ですが、個人ブログということでひとまずサクっと出してみます。  
(誤りを見つけていただいたら[Issues](https://github.com/abekoh/blog-v3/issues)に報告してただけるととても嬉しいです。)

もちろん2023年10月版なので古くなっていく内容です。折を見て更新版出したい。

---

## はじめに

この記事では、Go言語を初めて触る人向けに、Goを使った開発がどんなものか、いろいろな項目に対する答えを紹介していきます。

文法などの形式的な入門は別の書籍やチュートリアルに譲り、他の言語経験した人にとってとっつきにくいところを重点的に取り上げてみます。

普段の別言語を扱うことが中心の人も、ぜひ何かしらの機会でGoに触れてもらえる機会になれると幸いです。

特に、社内の他の主流言語・フレームワーク、Ruby/Rails, JavaScript/TypeScript経験者に向けたイメージで書き始めてます。具体のプラクティスは深掘って触らないと理解しにくくなってしまいましたが、まずは雰囲気だけでも掴んで貰えればと思います。

## Go言語はどんな言語？

### ざっくり

とほほ氏の説明が簡潔でよかったので引用: [とほほのGo言語入門 - とほほのWWW入門](https://www.tohoho-web.com/ex/golang.html)

> ・Google が開発したプログラミング言語です。「Go言語」や「Golang」と表記されます。  
> ・UNIX、B言語(C言語の元)、UTF-8の開発者ケン・トンプソンや、UNIX、Plan 9、UTF-8の開発者ロブ・パイクによって設計されました。  
> ・静的型付け、メモリ安全性、ガベージコレクションを備えるコンパイル言語です。  
> ・シンプル、高速、メモリ効率が良い、メモリ破壊が無い、並行処理が得意などの特徴を備えています。  
> ・メモリ破壊が無く、並行処理を得意とする、進化したC言語という側面があります。  
> Linux、Mac OS X、Windows、Android、iOS で動作します。

ざっくりはこんな言語です。Android/iOSで動かす事例はあまり聞かないですが…代わって最近はWASM対応が盛んなように見えます。

### コンパイル言語

Ruby/JavaScript/TypeScriptとの大きな違いを考えると、実行時のためにコンパイルが必要なことかな、と思います。(TypeScriptはJavaScriptにトランスパイルしますが)

コンパイルは「LinuxのAMD64向け」「MacのAArch64向け」と決めて実行し、それにあった実行形式・機械語に変換されるので、コンパイルしたものを修正して動作変更したり、どんなコードを動いているのか覗くことは困難になります。この点はスクリプト言語のほうが柔軟でよいかもですね！(この辺もTypeScriptはどのECMAScriptをターゲットにしつつ難読化されて…みたいになるのでもはや同じかも)

一方で、機械語になった段階でそれなりに最適化されているので基本的には高速です。ただこの高速さも結局アプリの実装やその他ミドルウェア・データ量の都合などにいろいろ左右されるので一概には言えません。

### 文法

他言語との違いを考えると、文法がシンプルってところかと思います。これもシンプルで要素少なすぎたり、独特だったりで批判の種になるところですが。この辺はZennに上げた記事が参考になるかも？

[業務アプリケーション開発にGoを採用する理由](https://zenn.dev/micin/articles/c5d12be524c675)

とはいえ近年、標準パッケージなりでもちょっとずつ便利機能が追加されてきており状況はだんだん変わりつつあります。

### どんなところで使われている？

公式の最新のSurveyによると: [Go Developer Survey 2023 Q1 Results - The Go Programming Language](https://go.dev/blog/survey2023-q1-results)

Goユーザーの使い方TOP3は

*   API / RPCサービス(72%)
*   コマンドベースのプログラム(61%)
*   ライブラリ・フレームワーク(44%)
    

のようです。回答者の80%は仕事で使ってる人なので、必然的にAPIあたりが強いかも？

とはいえ、時点のコマンドベースのプログラムも強いです。馴染み深いところだと

*   Docker (CLI)
*   Kubernetes
*   Terraform
*   gh (GitHub CLI)
*   ecspresso / lambroll
    

あたりでしょうか。他のCLIでも実は中身Goでしたってことは多いかなと思います。

## 学び方

学び方は様々で自分にあった方法探せばよいですが、ざっくりおすすめは

*   まずは[A Tour of Go](https://go.dev/tour/welcome/1) をやってみる
*   適当なCLIやWebサーバー作ってみる、わかんないことはChatGPTに聞く
*   並行処理ちゃんとやりたかったら [O'Reilly Japan - Go言語による並行処理](https://www.oreilly.co.jp/books/9784873118468/) 読む
*   もっと実用ベースの話が知りたかったら
    *   [O'Reilly Japan - 実用 Go言語](https://www.oreilly.co.jp/books/9784873119694/)
    *   [Go言語 100Tips ありがちなミスを把握し、実装を最適化する - インプレスブックス](https://book.impress.co.jp/books/1122101133)
    *   [Effective Go - The Go Programming Language](https://go.dev/doc/effective_go)
    *   [Go Style | styleguide](https://google.github.io/styleguide/go/)
    *   [golang/go: The Go programming language](https://github.com/golang/go) の標準パッケージの書き方みてみる
*   もっと中身深掘りしたかったら
    *   [Goならわかるシステムプログラミング 第2版 – 技術書出版と販売のラムダノート](https://www.lambdanote.com/products/go-2) OSの話なのでGoに限らず勉強になる
    *   [The Go Programming Language Specification - The Go Programming Language](https://go.dev/ref/spec) 言語仕様
    *   [golang/go: The Go programming language](https://github.com/golang/go) 頑張って読む
        

といったところです。ちなみに自分も全部できてないので頑張りたいです。

## Q&A

さて本題です。Goを扱っていく上で悩みそうなところをQ&A形式で紹介していきます。どれも自分が初めてGoを業務で使い始めたときは知らなかったことで、初心者にはとっつきにくいところをざっと答えていきます。

### バージョン管理はどうすれば？

多くの言語ではanyenv, asdfなど使ってバージョン管理・プロジェクトごとに固定しておくものと思います。

Goの場合もgoenvといったもので管理できますが、そもそも必要としないという人が多いようです。

理由としては、

*   後方互換が非常に優れている
*   バージョンアップが一瞬で対応できるので、古いバージョンを使い続ける必要があまりない
*   仮に古いバージョンが必要になった場合は次のようなコマンドで実行できる(未来のRCバージョンも同様)
    
```sh
go install golang.org/dl/go1.21.1@latest
# `go1.21.1`というコマンドでそのバージョンのgoを実行できる
```
        

といったあたりなのかなーと思います。

### おすすめのエディタは？

[Go Developer Survey 2023 Q1 Results - The Go Programming Language](https://go.dev/blog/survey2023-q1-results) によると、人気TOP3は上から

1.  VS Code
2.  GoLand / IntelliJ
3.  Vim / Neovim
    

のようです。お好きなものを使ってよいと思いますが、金銭的に問題なければGoLandが多機能で個人的にオススメです。

### タスクランナーは？

Goでは `make` という、C/C++経験やソースから何らかビルドしたりする経験がある方には馴染みのあるものを利用されることが多いです。

一方で、 `Makefile` の書き方がやや癖があるというか、bashに似ててできることが異なっていたりと混乱招きがちです。

- [go-task/task: A task runner / simpler Make alternative written in Go](https://github.com/go-task/task)

がYAMLで書くタスクランナーで機能も多く良い感じでした。

### 他の言語のXXみたいな書き方はできない？

ググったりChatGPTに聞いてでなければ基本ないですが、もしかしたら
- [Sub-repositories - Go Packages](https://pkg.go.dev/golang.org/x)
- [samber/lo: 💥  A Lodash-style Go library based on Go 1.18+ Generics (map, filter, contains, find...)](https://github.com/samber/lo)

にお望みのものがあるかもしれません。

### 循環依存できないの？

Goではパッケージに循環依存があるとコンパイルエラーとなります。よく考えずにコード書いてると発生しがちです。

理由についてはこちら: [Goが循環インポートをエラーにする理由](https://zenn.dev/nobonobo/articles/c3ead54a87d136)

回避策として、 `interface` を活用するなどで[依存性逆転の原則](https://ja.wikipedia.org/wiki/%E4%BE%9D%E5%AD%98%E6%80%A7%E9%80%86%E8%BB%A2%E3%81%AE%E5%8E%9F%E5%89%87) をしてあげればよいのですが、そもそも設計方針が誤っていないかをよく確認しましょう。

### エラー返却つらいんだけど？

Goは基本`throw` は行わず、ひたすら `return err` するのが基本方針になります。

これは現状仕方なく、筋肉で解決するしかないです。最近はCopilotでドーピングできるので頼りましょう。

とはいえ、[Go Developer Survey 2023 Q1 Results](https://go.dev/blog/survey2023-q1-results)によると、人気TOP3は上から
でも課題のトップに挙げられているところで、Goチームも対応策を模索しているようです。

まだまだ確定ではないですが、Go 2 Draft Designsにてこれに対応するSyntax sugarも出ているようでした。期待です。

[Error Handling — Problem Overview](https://go.googlesource.com/proposal/+/master/design/go2draft-error-handling-overview.md)

※ちなみに、Go 2はこちらのブログで「出ることはない」と明言されています。

[Backward Compatibility, Go 1.21, and Go 2 - The Go Programming Language](https://go.dev/blog/compat)

また、使い方さえ誤らなければ `panic()` も積極的によいと思います。線引としては、次のようなイメージです

*   普通にエラー発生可能性がありえる場合は`return err` する
*   滅多に発生しないが、制御下にないライブラリやミドルウェアとの接続の場合など中身がわからないものは `return err` する
*   アプリ起動時にエラー発生すると何もできなくなる、早急に終了したい場合は `panic()` してよい
*   制御下にある、自前の実装でエラー発生が発生することがほぼない・発生しても開発中に気づけるものは `panic()` してよい
    *   `context.Context` の `Value` の取得時の型チェックなど
        

また、WebAPIのHandler内などで `panic()` が起こる場合(意図しなくてもnil dereferenceで起こることがある)は、アプリ全体が終了して他ユーザにも影響出てしまう可能性があり、きちんと `recover()` しておくべきです。多くのWebフレームワークでは Recover Middlewareを提供しているのでとりあえず入れておきましょう。

Echoの例: [Recover | Echo](https://echo.labstack.com/docs/middleware/recover)

### エラーのスタックトレースどう取るのがよいの？

普通に標準パッケージだけ使ってもスタックトレースは取れません。一応Wrap(エラーに情報追加で付与して返す)ことは `fmt.Errorf`でできるようになりました。

このあたりは今も混沌を極めており、[こちらのまとめ](https://twitter.com/sonatard/status/1639510779992113154)とか見ると感じ取れるかと思います。

一応現実的な選択肢としては…

*   [pkg/errors](https://github.com/pkg/errors) を使う。アーカイブされているがシンプルなライブラリなので良しとする
*   [cockroachdb/errors](https://github.com/cockroachdb/errors) を使う。 `pkg/errors` の上位互換であるが多機能すぎるかも

あたりになります。
    

### インタフェース実装しているのかわかりにくい！

Goの `interface` はDuck typingの典型例で、明示的にimplementsなどでinterfaceを指定しなくても、規定のメソッドをstructに生やせばinterfaceとして成り立つようになっています。

そこで問題になっているのが、「このstructはどのinterfaceを実装しているのか？」「逆にinterfaceを実装しているstructはどれか？」というところです。

これに対してエディタでの解決策としては、GoLandだとアイコンを視認・クリックですぐにわかります。

<Image src="/assets/goland-interface-icon.png" alt="goland-interface-icon" width="480" aspectRatio="1:1" />

VSCodeだとコマンドパレット経由でチェックできたりしますが視認はできず…ここは詳しくないので良いPluginがあるかもわからないです。

<!-- ![](./attachments/Screenshot%202023-10-11%20at%2015.57.20.png?api=v2) -->

また、コード上できちんと実装をチェックする手法として、zero valueを定義して割当してみる方法があります。次のような感じ

[Frequently Asked Questions (FAQ) - The Go Programming Language](https://go.dev/doc/faq#guarantee_satisfies_interface)

```
type T struct{}
var _ I = T{}       // Verify that T implements I.
var _ I = (*T)(nil) // Verify that *T implements I.
```

これを書いておくと、後からの変更でインタフェース定義から外れた場合はコンパイルエラーになります。

### LoggerとかConfigとかいろんなところで呼び出したいんだけど？

[なぜ Go ではロガーをコンストラクタ DI してはならないのか](https://zenn.dev/mpyw/articles/go-dont-inject-logger)

自分の試行錯誤した末の答えは↑と同じですが、 `context.Context` に詰め込んで `ctx` で引数回しする、が良いかと思います。

`context.Context` はrequest-scopedに絞ったもののみを要素として与えるのが鉄則のようですが、Webサービスの場合はいろんなところで同じ参照先のものをサクッと取得したい場合にどんどん使っちゃってよいかと思います。

### パッケージ構成どんな感じにするがよい？

いろいろ流儀があり定まっていない印象です。最近になって公式で「こんな感じかな」ってのを出しました。

[Organizing a Go module - The Go Programming Language](https://go.dev/doc/modules/layout)

`internal` にフラットに外部公開しないパッケージを並べて、ルートや `cmd`をエントリーポイントにするって形が提案されています。

`internal` は特別な意味を持つディレクトリ名で、この中のパッケージは `go.mod`で依存してもインポートできないのですが、プライベートリポジトリが主流の社内リポジトリでインポートされる可能性が低ければあまり気にしなくても良いかなと思われます。

Standard Go Layoutというのが別途存在しますが、

[golang-standards/project-layout: Standard Go Project Layout](https://github.com/golang-standards/project-layout)

こちらは非公式で、Goチームの方もはっきりstandardでないと言及しています。

[this is not a standard Go project layout · Issue #117 · golang-standards/project-layout](https://github.com/golang-standards/project-layout/issues/117)

### おすすめのWebAPIフレームワークは？

前提として、Rails/Redwoodのようなフルスタックなフレームワークはあまり聞かないです、[Buffalo – Rapid Web Development in Go](https://gobuffalo.io/) というのがあるようですが国内の例は出てこずです。

なので、「HTTPで喋る・いい感じにルーティングするためのもの」という狭い意味でのフレームワークとして考えます。

まず軽量なものとしては、

*   `net/http` のみ
    
*   `net/http` + [gorilla/mux](https://github.com/gorilla/mux)
    

あたりが挙げられます。gorilla/muxはルーティングまわり改善したりクエリをいい感じにあれこれしたりする薄いながらも便利なものですが、 [こちらのProposal](https://github.com/golang/go/issues/61410) がAcceptされたため `ServeMux` が改善される見込みで近いうちに状況が変わるかもしれません。

もう少し機能が多いものだと、

*   [High performance, extensible, minimalist Go web framework | Echo](https://echo.labstack.com/)
*   [Gin Web Framework](https://gin-gonic.com/)
*   [chi](https://go-chi.io/#/)
    

あたりをよく聞きます。

chiは後発で、この中だと比較的薄め・標準の `context.Context` を活用しており、個人的に新規で開発する場合はこれにしたいなーと思うことはあります。

また、GraphQLを導入する場合は

*   [gqlgen](https://gqlgen.com/) + [graph-gophers/dataloader](https://github.com/graph-gophers/dataloader)
    

がデファクトスタンダードな印象です。dataloaderはv7のgeneric版を使いましょう。

RESTとGraphQLを混在させる必要がある場合、Echo/Ginは使わずchiにしたほうが良さそうです(未検証ですのでやや推測)。

Echoの上にgqlgenを乗せる対応をしてみた感じ、echo独自の `echo.Context` とgqlgen内の `context.Context` で扱いがややこしくなってしまっています。おそらくchiだとスマートになるはず。

### SQLは？ORMは何使えば？

SQLを扱うデータベースの接続について。これもこれさえ使えばってのはなく、よりどりみどりです。

とりあえずざっと紹介・印象など

|     |     |     |
| --- | --- | --- |
| **ライブラリ・リンク** | **ざっくり** | **所感** |
| `database/sql` | 標準のみ、SQLをstringで書く | 超軽量ならこれでもよい |
| [sqlx](https://github.com/jmoiron/sqlx) | 標準がすこしリッチに、SQLをstringで書く・マッピングがやや便利に | こちらもある程度軽量なら |
| [GORM](https://gorm.io/index.html) | ORM、独自にエラーハンドリングなどあれこれ | 一番人気ながらも使用感は……セキュリティの懸念や互換性もあやしいことが多い。 |
| [ent](https://entgo.io/) | ORM、Prismaっぽい？コードファーストでスキーマから実行コードまでなんでも生成 | ゼロからつくるならよいが途中から差し込むのは大変そう。独自の概念が多いのでこれに依存は好みでないかも |
| [sqlc](https://sqlc.dev/) | スキーマDDL読み込んでモデル生成、DML読み込んでコード生成 | SQLごりごり書く。生成されたコードもシンプルでブラックボックスがほぼない。一方動的なクエリが書けない・エラーハンドリングなどカスタマイズがしにくいという欠点もあり。 |
| [sqlboiler](https://github.com/volatiletech/sqlboiler) | (未検証) | [O'Reilly Japan - 実用 Go言語](https://www.oreilly.co.jp/books/9784873119694/) で紹介されてた |
| [Bun](https://bun.uptrace.dev/) | (未検証) | SNSでたまにきく |
| [xo](https://github.com/xo/xo) | (未検証) | SNSでたまにきく、玄人向けらしい |

またこれに加えて、DBのドライバが必要です。PostgreSQLの場合、

*   [lib/pq](https://github.com/lib/pq)
*   [jackc/pgx](https://github.com/jackc/pgx)
    

の2つがありますが、前者はメンテが止まっているので後者がよさそうです。

ライブラリ・ORMの組み合わせ次第ですが、 `database/sql` を活用するものであればORMの併用もがんばれば可能です。

### Loggerは？

JSONを吐き出すような、いわゆる構造化ログに限定して話すと、

*   `log/slog`
*   [rs/zerolog](https://github.com/rs/zerolog)
*   [uber-go/zap](https://github.com/uber-go/zap)
    

あたりが上がります。

特に `log/slog` はGo1.21で出てきたばかりの標準パッケージで注目されています。あまりリッチな機能がいらないならこれでよさそうです。

### 公式のテストの書き方、大変じゃない？

GoはTable-Driven Testingがスタンダードなテストの書き方だ、とよく言われてます。

確かに「同じ関数にいろんな入力値パターンを試したい」という、他言語などだとParameterized Testと呼ばれるようなものには良いのですが、「テストごとに入力値以外の前提条件が大きく異なる」場合はTable-Drivenだとかなり辛い印象です。

次のように、 `preset()` で事前セットアップ・デフォルト値用意、 `t.Run` でサブテスト実行するような形が主でもよいかなと思ってます。

```go
 func TestExec(t *testing.T) {
   preset := func(t *testing.T) Args {
     t.Helper()
     // 共通処理
     // 必要に応じてデフォルト値を渡す
     return Args{
       A: 1
     }
   }
   
   t.Run("テスト1", func(t *testing.T) {
     args := preset(t)
     got, err := Exec(args)
     require.NoError(t, err)
     assert.Equal(t, "hoge", got)
   })
   
   t.Run("テスト2", func(t *testing.T) {
     args := preset(t)
     // 必要に応じてデフォルト値から変更
     args.A = 2
     _, err := Exec(args)
     assert.Error(t, err)
   })
 }
```

なお、値のアサーションは標準パッケージにはなく、 `reflect.DeepEqual()` とかを公式関連だと使われたりしますが、多くのサービスやOSSでは [stretchr/testify](https://github.com/stretchr/testify) が使われている印象です。

### モックつくりたいんだけど

[golang/mock](https://github.com/golang/mock) が主流でしたがPublic Archiveになり、[uber-go/mock](https://github.com/uber-go/mock) のほうで現在はメンテされているようです。

個人的には[matryer/moq](https://github.com/matryer/moq)の使用感がよくてオススメです。その使用感の話は記事にしているので参照ください。

[moqを使ったGoのテスト](https://zenn.dev/abekoh/articles/21acde07e1f555)


### Linterは何を設定すれば？

いくつかありますが、

ゼロコンフィグ状態でもちょうどいい感じの設定がされてて、ややデファクトっぽくなってきている

[Staticcheck](https://staticcheck.io/)

がとりあえず良さそうです。

いろんなLinterをかけあわせて使える

[golangci-lint](https://golangci-lint.run/)

というのも人気ですが、ごちゃ混ぜ感もありデフォルト設定や全部enableにすると辛いことになる感じなので、必要なものだけに絞って有効にするのがよさそうです。

あと、golangci-lintの中にもありますが、goコマンド標準で使える

[`go vet`](https://pkg.go.dev/cmd/vet)

は必ず通るようにしておくと安心です。

### Formatterはどれがよい？

[`go fmt`](https://pkg.go.dev/fmt)

が標準でついてきますが、importの整備が今ひとつで、

[goimports command - golang.org/x/tools/cmd/goimports - Go Packages](https://pkg.go.dev/golang.org/x/tools/cmd/goimports)

のほうがおすすめです。一方 `goimports` もimport文の間に空行が入ったり入らなかったりという問題があり、まだ改善の余地が見受けられるというのが正直なところです。

[x/tools/cmd/goimports: support repairing import grouping/ordering · Issue #20818 · golang/go](https://github.com/golang/go/issues/20818)

### 最新情報キャッチアップするには？

ざっくりこのあたり追うとよさそう？

*   [The Go Blog - The Go Programming Language](https://go.dev/blog/)
*   [proposal: review meeting minutes · Issue #33502 · golang/go](https://github.com/golang/go/issues/33502) 毎週GoチームとしてどのProposalを採用したか、不採用としたかがまとめて送られる。ここ読むだけで直近のリリースで何がでてくるかわかる
*   [Gophers Japan - connpass](https://gocon.connpass.com/), [golang.tokyo - connpass](https://golangtokyo.connpass.com/), 他各企業のGo主体のカンファレンス
*   ↑でよく話してる方のSNS
    

## おわりに

ざっくばらんな内容になりましたが、思いつくだけのプラクティスを書いてみました。

勉強会などで他の会社のGoユーザーと話してみても、ベストプラクティスはまだまだ固まっておらず模索してたり、同じようなところで悩んでいる印象でした。

ここに書いた内容も勿論2023年現在のスナップショットで、現時点でもユニークで前進的なものもあればあまりベストとは言えないものもあるかもしれません。引き続き様々な情報キャッチアップ・発信を続けていけたらと思います。
