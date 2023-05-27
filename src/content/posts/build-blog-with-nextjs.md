---
title: 'Next.js+Vercel+microCMSでブログをリニューアルしました'
summary: '流行りの構成でブログリニューアルしてみました。'
categories: ['tech']
tags: ['nextjs','reactjs','vercel','javascript','microcms','typescript']
publishedAt: 2021-04-24T08:10:00.000Z
modifiedAt: 
draft: false
isHtml: true
microCMSId: 'build-blog-with-nextjs'
microCMSCreatedAt: 2021-04-23T16:03:49.640Z
microCMSUpdatedAt: 2021-10-13T11:25:00.038Z
microCMSRevisedAt: 2021-10-13T11:25:00.038Z
---
<p>表題の通り、リニューアルしました。こっそり2週間くらい前から反映させてます。<br>
</p><h2 id="hc69c85bcf9">背景</h2><p>もともとこのブログはHugo + GitHub Pagesで構築しておりました。<br>
<img src="https://images.microcms-assets.io/assets/4f79e018736547879adf5670ebeaccc3/8768ddd0b6314a4d97da239d3c95c765/blog-with-hugo.png" alt><br>
<a href="https://blog.abekoh.dev/posts/how-to-build-this-blog" target="_blank" rel="noopener noreferrer">Hugo, Github Pages, CircleCIつかってブログ構築 - abekoh&#x27;s tech note</a><br>
<br>
これでも機能は十分でしたが、</p><ul><li>すべてGitHub Pages上にリソースを置いていた(画像も含めて)ので、リポジトリ自体のサイズ肥大化が気になる(個人ブログレベルなので大したものではないが)</li><li>Hugoのテンプレそのまま使っており、フロント知識あまり身に付けず運用できている</li><li>カスタマイズはGo Templateを用いたものを触る必要あり。<span style="font-size: 0.75em">個人的に気分が乗らない…</span></li></ul><p>といったことが不満でした。<br>
<br>
情報漁ると、最近はNext.js + Vercel + microCMSといった構成が一つの流行りらしく、モダンなフロントまわりの勉強がてらこの構成で構築してみることにしました。<br>
</p><h2 id="h44e51f96ce">参考資料</h2><p>構築についてはこれらの記事ほぼそのままです。</p><ul><li><a href="https://dev.classmethod.jp/articles/vercel-microcms-nextjs-blog/" target="_blank" rel="noopener noreferrer">[Next.js+Vercel+microCMS] microCMS と Next.js でブログを作る</a> Developers.ioの記事</li><li><a href="https://blog.microcms.io/microcms-next-jamstack-blog/" target="_blank" rel="noopener noreferrer">microCMS + Next.jsでJamstackブログを作ってみよう</a> microCMS公式の記事</li></ul><p>microCMSは公式のチュートリアルが充実しており、他にもたくさん参考できそうなところが多そうでした。<br>
<br>
またReactと最近のJavaScript&#x2F;TypeScriptに関しては、<a href="https://blog.abekoh.dev/posts/tech-books-Feb-2021" target="_blank" rel="noopener noreferrer">ここ</a>でも紹介した通りこの同人誌が非常に参考になりました。</p><ul><li><a href="https://oukayuka.booth.pm/items/2368045" target="_blank" rel="noopener noreferrer">りあクト！ TypeScriptで始めるつらくないReact開発 第3.1版【Ⅰ. 言語・環境編】 - くるみ割り書房 ft. React - BOOTH</a></li></ul><p>Next.jsについては公式Doc、ときどきググってみるって感じで</p><ul><li><a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer">Getting Started | Next.js</a></li></ul><p>デザインフレームワークはMaterial-UIを採用しました。</p><ul><li><a href="https://material-ui.com/" target="_blank" rel="noopener noreferrer">Material-UI: A popular React UI framework</a></li></ul><p><br>
さらに、最近のHTML&#x2F;CSSまわりの情報をこの本ざっと読んでキャッチアップしました。<br>
かなり知らない記述方法など知れてよかったです。SEOだけでなく、iOS向け、Android向け、Twitter&#x2F;Facebook共有用のためのmeta&#x2F;link設定など非常に多くあってびびりました。<br>
</p><h2 id="h6cdd50302f">Tips</h2><p>構築していく上でつまづいたところ、力入れたところなどをいくつか紹介します。<br>
</p><h3 id="h15424c503e">Material-UIをNext.jsで使う</h3><p>Material-UIをNext.jsといったSSRなフレームワークで利用する際、一工夫が必要となります。</p><ul><li><a href="https://material-ui.com/guides/server-rendering/" target="_blank" rel="noopener noreferrer">Server Rendering - Material-UI</a></li></ul><p>公式にも書かれている通り、リクエストごとに<code>ServerStyleSheets</code>をサーバーサイドで生成、CSSとして埋め込むといったことをしないといけないようです。<br>
Next.jsでのサンプルもここにあります。</p><ul><li><a href="https://github.com/mui-org/material-ui/tree/master/examples/nextjs" target="_blank" rel="noopener noreferrer">material-ui&#x2F;examples&#x2F;nextjs at master · mui-org&#x2F;material-ui</a></li></ul><p>罠でハマったのが、<code>&lt;Head&gt;</code>のimport元。<br>
下記のように_document.tsxで呼ぶ場合とそれ以外で異なり、間違ってると正常にページが表示されませんでした。</p>

```tsx
// _document.tsx
import { Head } from 'next/document';
// _app.tsx など
import Head from 'next/head';
```

<p><br>
</p><h3 id="hfc6e96955b">各種環境向けアイコン&#x2F;favicon</h3><p>faviconといえば昔はfavicon.icoひとつ置くだけでOKでしたが、今はスマホ用ブラウザ用など規格が乱立しているようでした。<br>
このGeneratorを使って一発で作成→設定することができました。</p><ul><li><a href="https://realfavicongenerator.net/" target="_blank" rel="noopener noreferrer">Favicon Generator for perfect icons on all browsers</a></li></ul><p>プレビューや設定されてるかチェックする機能もあって便利です。<br>
</p><h3 id="h0be87c007c">技術系タグにアイコンをつける</h3><p>こだわりポイントです。<br>
deviconというOSSに、さまざまな技術スタックのアイコンが用意されてます。</p><ul><li><a href="https://devicon.dev/" target="_blank" rel="noopener noreferrer">DEVICON | All programming languages and development tools related icons font</a></li></ul><p>これを_document.tsxにてインポートしておいて</p>

```tsx
<Head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.11.0/devicon.min.css">
</Head>
```

<p>Material-UIの<a href="https://material-ui.com/components/icons/" target="_blank" rel="noopener noreferrer">Icon</a>コンポーネントで利用するようにしてみました。タグ自体は<a href="https://material-ui.com/components/chips/" target="_blank" rel="noopener noreferrer">Chip</a>を用いてます。</p>

```tsx
<Chip
  icon={tag.icon ? <Icon className={tag.icon}></Icon> : undefined}
  label={tag.name}
/>
```

<p><br>
</p><h3 id="h4e5b7095e8">Next.jsでRSSやsitemap.xmlなど設定</h3><p>こちらの記事が参考になりました。</p><ul><li><a href="https://zenn.dev/catnose99/articles/c7754ba6e4adac" target="_blank" rel="noopener noreferrer">Next.jsで動的にRSSフィードを生成する</a></li><li><a href="https://zenn.dev/catnose99/articles/c441954a987c24" target="_blank" rel="noopener noreferrer">Next.jsで動的にXMLサイトマップを生成する</a></li></ul><p>JSX&#x2F;TSXで他のページと同様に作ってしまえるので管理が非常に楽です。<br>
</p><h3 id="h735bd6ae03">OGP画像を動的に生成</h3><p>OGPとは<a href="https://ogp.me/" target="_blank" rel="noopener noreferrer">Open Graph protocol</a>のことで、TwitterやFacebook、Slackにリンクを貼り付けたときに見える画像やテキスト情報についての規格です。<br>
次の記事を参考に、canvasを使って動的に生成するようにしてみました。</p><ul><li><a href="https://ji23-dev.com/blogs/nextjs-ogp" target="_blank" rel="noopener noreferrer">【Next.js × Vercel】OGP画像を動的生成してみた | JI23-DEV</a></li></ul><p><br>
この記事のOGP画像は次のリンクに設定しています。<br>
<a href="https://blog.abekoh.dev/api/ogp-images/build-blog-with-nextjs" target="_blank" rel="noopener noreferrer">https:&#x2F;&#x2F;blog.abekoh.dev&#x2F;api&#x2F;ogp-images&#x2F;build-blog-with-nextjs</a><br>
タイトルをASCII文字なら幅2、それ以外なら幅1としてカウントし、適当なところで改行するようにしてみました。<br>
</p><h2 id="ha214098e44">まとめ</h2><p>特にReact&#x2F;Next.jsの知識が身についてきて楽しかったです。<br>
まだまだ改良したい部分があるので、引き続きブラッシュアップしていきます。</p>
    