---
title: '『開眼! JavaScript』読んだ'
summary: 'undefined ?? '''
categories: ['tech']
tags: ['JavaScript','読書']
publishedAt: 2020-02-23T09:20:11.000Z
modifiedAt: 
draft: false
isHtml: true
microCMSId: 'javascript-enlightenment'
microCMSCreatedAt: 2021-03-20T14:57:30.171Z
microCMSUpdatedAt: 2021-03-20T14:57:30.171Z
microCMSRevisedAt: 2021-03-20T14:57:30.171Z
---
<p>Oreillyから出てる『開眼！ JavaScript ――言語仕様から学ぶJavaScriptの本質』の読書メモです。</p>
<p><a href="https://www.oreilly.co.jp/books/9784873116211/">https://www.oreilly.co.jp/books/9784873116211/</a></p>
<p>仕事でもWebフロントアプリを触ることがあるものの、既存のコードを雰囲気で改修する程度で、今ひとつJSの挙動など理解できていなかったのでその辺りが知りたく。
ちょうどこの本が「JavaScript特有の癖、落とし穴」にフォーカスを当てていて、大変参考になりました。</p>
<p>以下、刺さったところの個人的メモ。</p>
<h3 id="jsは基本なんでもオブジェクト、プリミティブでもオブジェクトのように扱える">JSは基本なんでもオブジェクト、プリミティブでもオブジェクトのように扱える</h3>
<p>number, string, boolean, null, undefinedはプリミティブ、他はすべてオブジェクト扱い。
Array、Functionも結局Objectを着色したようなイメージ。</p>
<p>プリミティブであっても、それに対応するラッパーオブジェクト(numberならNumber)のプロパティ、メソッドが呼び出せる。呼び出したとき、そのときだけオブジェクトを生成→破棄という流れになる。</p>
<pre><code class="language-javascript">&#39;hoge&#39;.length // -&gt; 4
</code></pre>
<h3 id="jsのオブジェクトはミュータブル、基本なんでも挙動変えられる">JSのオブジェクトはミュータブル、基本なんでも挙動変えられる</h3>
<p>Arrayなどネイティブコンストラクタを持つオブジェクトであっても、windowなどグローバルオブジェクトであっても、そのプロパティ・メソッドは書き換え可能。
<code>window.alert()</code>でも書き換えて機能停止させることも可能。varつけず<code>foo = &#39;bar&#39;</code>とやればグローバルオブジェクトのプロパティをいじったことになる。</p>
<p>もちろん、可能なだけで破壊的な変更は推奨されない。</p>
<h3 id="thisはそれを呼び出すタイミングで指すものが決まる">thisはそれを呼び出すタイミングで指すものが決まる</h3>
<pre><code class="language-javascript">var foo = &#39;foo&#39;;
var myObject = { foo: &#39;I am myObject.foo&#39; };

var sayFoo = function() {
    console.log(this[&#39;foo&#39;]);
};

// myObjectのsayFooメソッドにsayFoo()関数を与える
myObject.sayFoo = sayFoo;

myObject.sayFoo(); // myObject.sayFoo()内でのthisはmyObjectなので&#39;I am myObject.foo&#39;を出力
sayFoo(); // sayFoo()内でのthisはグローバルオブジェクトなので&#39;foo&#39;を出力
</code></pre>
<p>(P.87より引用)</p>
<p>定義時の&#39;foo&#39;が常に出ると予想されるかもだが、実際は実行時のコンテキストに依存する。</p>
<h3 id="無名関数の即時実行">無名関数の即時実行</h3>
<pre><code class="language-javascript">(function(){ console.log(&#39;hoge&#39;); })()
</code></pre>
<p>functionの中身を即実行する書き方。
何度かこんなコードみたことあったのに、意味理解できていなかった。。</p>
<h3 id="関数の巻き上げ">関数の巻き上げ</h3>
<p>function後ろのほうで定義、前のほうで実行でも問題なし。</p>
<pre><code class="language-javascript">foo(); // -&gt; hoge
function foo() { console.log(&#39;hoge&#39;); }
</code></pre>
<p>これを関数の巻き上げと呼ぶ。JS特有ですね。
関数内で外側の変数つかってたりすると引っかかりそう。
(参考: <a href="https://qiita.com/39_isao/items/d9d80e98b5bd1938bc1d">やっとわかったjsの「巻き上げ」 - Qiita</a>)</p>
<h3 id="コンストラクタのprototypeはインスタンスでは__proto__で参照できる">コンストラクタのprototypeはインスタンスでは__proto__で参照できる</h3>
<p>Chrome Developer Toolsでオブジェクトについてる<code>__proto__</code>プロパティ、正体はそれを生成したコンストラクタの<code>prototype</code>への参照でした。
要するに、<code>myObj.__proto__</code>と<code>myObj.constructor.prototype</code>は同じものを指す。</p>
<p>この仕様は標準ではないらしい、けれど殆どのブラウザで機能している。</p>
<h3 id="numberのラッパーオブジェクトのメソッド呼び出し">numberのラッパーオブジェクトのメソッド呼び出し</h3>
<p>本文に直接無い内容だけど、自分理解のため。
数字をカンマ区切りにするとき、<code>toLocalString()</code>が使えるけど実際どう呼び出すんだろって色々ためすと</p>
<pre><code class="language-javascript">10000.toLocalString() // -&gt; エラー
&#39;10000&#39;.toLocalString() // -&gt; &#39;10000&#39;
10000..toLocaleString() // -&gt; &#39;10,000&#39;
(10000).toLocaleString() // &#39;10,000&#39;
Number(10000).toLocaleString() // -&gt; &#39;10,000&#39;
new Number(10000).toLocaleString() // -&gt; &#39;10,000&#39;
var a = 10000
a.toLocaleString() // -&gt; &#39;10,000&#39;
</code></pre>
<p>という具合。<code>10000.toLocalString()</code>だと数値として評価できていない。
3行目の<code>..</code>となるのは、最初のドットは小数点として評価されるため。</p>
<h3 id="その他">その他</h3>
<ul>
<li>プロトタイプチェーンについて図も使ってかなりじっくり解説されてわかりやすかった。ブログにまとめるの大変なので割愛。<br>(Web記事だとこちらがわかりやすそう: <a href="https://maeharin.hatenablog.com/entry/20130215/javascript_prototype_chain">や...やっと理解できた！JavaScriptのプロトタイプチェーン</a>)</li>
<li>便利ライブラリとしてUnderscore.jsが紹介されているが、今だとLodashのほうが主流かな？</li>
<li><code>Math.PI</code>といった定数は変更不可。円周率3にできたりしない。</li>
</ul>
<h3 id="感想">感想</h3>
<p>他にも色々へぇ〜となるポイントだらけでした。業務だとTypeScriptだけど、こういう癖をうまく吸収したりしてくれて助かっている反面、やっぱりきちんと理解しておかないと詰まりそうだなーという点が多々。非常に勉強になりました。</p>
<p>それなりにフロントも見れるように、さらにJS勉強していきたい所存です。</p>

    