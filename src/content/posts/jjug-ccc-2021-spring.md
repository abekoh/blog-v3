---
title: 'JJUG CCC 2021 Spring 参加メモ'
summary: '2021/5/23に開催されたJJUG CCC 2021 Springで聞いたセッションのメモです。
あくまで個人認識レベルのメモなので、誤りなどあるかもです。 ?? '''
categories: ['tech']
tags: ['java','jvm']
publishedAt: 2021-05-26T14:35:00.000Z
modifiedAt: 
draft: false
isHtml: true
microCMSId: 'jjug-ccc-2021-spring'
microCMSCreatedAt: 2021-05-26T14:33:13.080Z
microCMSUpdatedAt: 2021-05-26T14:34:07.692Z
microCMSRevisedAt: 2021-05-26T14:34:07.692Z
---
<p>2021/5/23に開催された<a href="https://jjug.doorkeeper.jp/events/120427">JJUG CCC 2021 Spring</a>で聞いたセッションのメモです。<br>あくまで個人認識レベルのメモなので、誤りなどあるかもです。</p>
<h2 id="graalvmのjavaネイティブビルド機能でどの程度起動が速くなるのか？"><a href="https://fortee.jp/jjug-ccc-2021-spring/proposal/2b76dd15-f1e2-4d6b-9f34-7e0f9266c4ae">GraalVMのJavaネイティブビルド機能でどの程度起動が速くなるのか？</a></h2>
<p>動画: <a href="https://youtu.be/UhOHGMnCZqQ">https://youtu.be/UhOHGMnCZqQ</a></p>
<ul>
<li>表題の通り試してみたという内容</li>
<li>生のTomcatを利用</li>
<li>起動時間短縮(90%減)・MemoryFootprintを減らせるというメリット</li>
<li>スループットはそこまで改善なし、誤差範囲かも(16%減)</li>
</ul>
<h2 id="今どき？のjavaにおける例外処理についての考察"><a href="https://fortee.jp/jjug-ccc-2021-spring/proposal/3695e597-7fbd-4838-b0f9-642f0503d90b">今どき？のJavaにおける例外処理についての考察</a></h2>
<p>動画: <a href="https://youtu.be/QBnqkx8-5H4">https://youtu.be/QBnqkx8-5H4</a></p>
<ul>
<li>Javaの例外処理、throwしたものをドメイン層で取得するのイケてないしいい方法考えてみるという内容</li>
<li>Elmのように、エラーの可能性がある型を用意・パターンマッチングで例外処理とするのがいいかも？Java 16のSeald Classが使うといいかも</li>
</ul>
<h2 id="あなたの勘と経験は本当に合っていると断言できますか？-プロダクション環境での計測のススメ"><a href="https://fortee.jp/jjug-ccc-2021-spring/proposal/b9ec9d34-5faa-4ce3-9979-d79f2ce78518">あなたの勘と経験は本当に合っていると断言できますか？　プロダクション環境での計測のススメ</a></h2>
<p>動画: <a href="https://youtu.be/qgVG8AVrM7M">https://youtu.be/qgVG8AVrM7M</a></p>
<ul>
<li>継続的に本番環境でプロファイリングして、製造改善に役立てようって話</li>
<li>「推測するな、計測せよ」</li>
<li>Google Cloud Profilerで試した<ul>
<li>オンプレでも利用可能かつ無料</li>
<li>pprofという形式でエクスポートできる</li>
<li>不要コードがどれだけあるかを探すのにJaCoCoを利用</li>
</ul>
</li>
</ul>
<h2 id="ソフトウェアアーキテクチャの選び方"><a href="https://fortee.jp/jjug-ccc-2021-spring/proposal/fe3ad133-ce18-4408-9e05-a5e05cb79eb7">ソフトウェアアーキテクチャの選び方</a></h2>
<p>動画: <a href="https://youtu.be/_u7I79Gtg_o">https://youtu.be/_u7I79Gtg_o</a></p>
<ul>
<li>DDD・アーキテクチャ関連で有名な成瀬さんの発表</li>
<li>BGM、字幕の感じが完全にYouTuberのそれで見やすい。図も凝っててわかりやすかった</li>
<li>「難しいけどシンプルは成り立つ」</li>
<li>アーキテクチャ選定に関して、「メンバーの習熟度に合わせて選ぶ」という観点は目から鱗</li>
<li>特にJavaに特化した話でもないので応用効きそう</li>
</ul>
<h2 id="オンライン広告入札システムとzgc"><a href="https://fortee.jp/jjug-ccc-2021-spring/proposal/7512569c-6a6e-450f-b983-ff503a360a27">オンライン広告入札システムとZGC</a></h2>
<p>動画: <a href="https://youtu.be/loGP6UJ_DlE">https://youtu.be/loGP6UJ_DlE</a></p>
<ul>
<li>次世代のGC実装、ZGCを使って高スループット・低レイテンシを目指す</li>
<li>GCの最適化にはOputunaを利用</li>
<li>ZGCが目指すのは、停止時間をヒープに依存せず最小限にすること</li>
<li>ZGCは1回のGCは高速である一方で、めちゃくちゃ回数は多い</li>
<li>いろいろ行ったが、求めていた改善は叶わなかった。メモリ100GB未満ではあまり効果ない？TBレベルで真価を発揮するという考察</li>
</ul>
<h2 id="how-should-java-developers-build-front-ends-today"><a href="https://fortee.jp/jjug-ccc-2021-spring/proposal/711817f8-05c1-4ee6-84c8-d43538311dbb">How Should Java Developers Build Front-Ends Today?</a></h2>
<p>動画: <a href="https://youtu.be/kQxTuZ8bUI0">https://youtu.be/kQxTuZ8bUI0</a></p>
<ul>
<li>Javaエンジニアはどの技術でフロントを書くべきか？</li>
<li>英語セッションだけどスライドがとてもわかりやすかった</li>
<li>最初に評価基準を決めて、分野ごとに評価(Web, Mobile, Desktop)</li>
<li>流行りは宣言的(Declarative)、命令的(Imperative)はもう古い</li>
<li>もちろん最終的な判断はあなた、コンテキストによって最適解は変わる</li>
<li>ざっくりおすすめのサマリ<ul>
<li>Web: React &gt; Angular &gt; Vue.js (JSF, Thymeleafはおすすめしない)</li>
<li>Mobile: React使いならReact Native &gt; Flutter、そうでないならFlutter &gt; React Native &gt; Xamarin(MAUIに期待)</li>
<li>Desktop: ...Webで十分では？</li>
</ul>
</li>
<li>FlutterはDardだけど、DartはJavaと似てるよ</li>
</ul>
    