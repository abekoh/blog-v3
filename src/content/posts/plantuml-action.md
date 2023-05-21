---
title: 'GitHub Actions + PlantUMLでドメインモデルの管理を楽にする'
summary: 'undefined ?? '''
categories: ['tech']
tags: ['github-actions','plantuml']
publishedAt: 2021-01-11T13:30:00.000Z
modifiedAt: 
draft: false
isHtml: true
microCMSId: 'plantuml-action'
microCMSCreatedAt: 2021-03-20T14:57:30.192Z
microCMSUpdatedAt: 2021-03-25T12:45:30.974Z
microCMSRevisedAt: 2021-03-25T12:45:30.974Z
---
<p>ドメインモデルの図を複数人、エンジニア・ドメインエキスパート間で共有するにあたって、
やり方はいろいろ考えられますが、</p>
<ul>
<li>差分がわかりやすい</li>
<li>バージョン管理ができる</li>
</ul>
<p>という点からやはりGitで管理できると嬉しいと思います。</p>
<p>Gitで管理しやすいフォーマットとして、DSLから図を自動生成してくれるPlantUMLが使いやすく定番です。
ドメインモデルについては下図のようにオブジェクト図で書けるとよいかと思います。</p>
<p><img src="https://images.microcms-assets.io/assets/4f79e018736547879adf5670ebeaccc3/931d2af2b63a4e4f8c194face6aa24ba/domain-model.png" alt="ドメインモデル図の例">
(『実践ドメイン駆動設計』 P.356, 図10-7をもとに作成)</p>
<p><strong>このPlantUMLによるドメインモデルの管理をGitHubのPR上で効率行えるようにするための、Github Actionsのテンプレを開発しMarketplaceに公開しました。</strong></p>
<p><a href="https://github.com/marketplace/actions/generate-and-commit-plantuml-diagrams">Generate and Commit PlantUML Diagrams · Actions · GitHub Marketplace</a></p>
<p>使い方などはREADMEを参考に。使い勝手は以下のサンプルPRを見ていただければわかりやすいと思います。</p>
<p><a href="https://github.com/abekoh/commit-plantuml-action/pull/33">Example by abekoh · Pull Request #33 · abekoh/commit-plantuml-action</a></p>
<p>.pumlファイルに差分が生じたとき、同じところに.pngとして画像が生成され、コミットされます。</p>
<p>さらに<code>enableReviewComment</code>を有効にすれば、生成された図のリンクとプレビューがコメントに投稿されます。
Beforeを展開して古い図との差分も確認可能です。</p>
<p><img src="https://images.microcms-assets.io/assets/4f79e018736547879adf5670ebeaccc3/d734e6b01c6045e68571718e34101dc6/commit-plantuml-action.png" alt="Review comment sample"></p>
<p>毎回リンクをたどってレビューを行う必要がなく、使い勝手よく扱えると思います。</p>
<p>注意点としては、PlantUMLが依存しているgraphvizの影響でライセンスがGPLとなっている点です…<br><a href="https://plantuml.com/ja/vizjs">このあたり</a>のPlantUMLの別実装を使ってより緩いライセンス使えないか、模索していきたいところ。</p>

    