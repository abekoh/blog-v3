---
slug: 'how-to-build-this-blog'
title: 'Hugo, Github Pages, CircleCIつかってブログ構築'
summary: ''
categories: ['tech']
tags: ['hugo','circle-ci','github-pages','google-domains']
publishedAt: 2019-12-14T04:40:05.000Z
modifiedAt: 2021-04-24T08:45:00.000Z
draft: false
isHtml: true
microCMSId: 'how-to-build-this-blog'
microCMSCreatedAt: 2021-03-20T14:57:30.197Z
microCMSUpdatedAt: 2021-04-24T08:36:22.647Z
microCMSRevisedAt: 2021-04-24T08:36:22.647Z
---
<p>このブログの構築メモ。
やっぱりブログもGitHubで管理できたらいいなーと探したら、この組み合わせで簡単にいい感じにできそうだったのでやってみた。</p>
<h2 id="hugoとは">Hugoとは</h2>
<p><a href="https://gohugo.io/">https://gohugo.io/</a></p>
<p>Go製の静的サイト生成ツール。
とにかく簡単にブログがつくれる。ブログじゃなくてもポートフォリオサイトやOSSプロジェクトページなんかもいける。</p>
<p>Markdownでかけるのも嬉しい。非常にGitHubフレンドリーな感じ。</p>
<p>個人的に惜しいと思う点は、超スタンダードな感じのテーマの多くがGPLなところ。
編集中のはPrivateにする場合ここが引っかかってしまうので、なくなくそれらを弾いてテーマ選びました。</p>
<p>とりあえずこれを無編集で使ってます。</p>
<p><del>https://github.com/zwbetz-gh/vanilla-bootstrap-hugo-theme</del></p>
<p>→ これに変更しました <a href="https://github.com/achary/engimo">https://github.com/achary/engimo</a></p>
<h2 id="構成">構成</h2>
<p><img src="/assets/circleci-github-hugo.png" alt="全体構成"></p>
<p>Github Pagesの機能をつかって公開するんですが、Hugoのソース自体はPrivateで管理。
abekoh.github.ioにはCircleCIがmaster pushするだけ。</p>
<p>CircleCI選んだ理由は、とりあえず有名でモダンなやつ試したかったから。
最近だとGithub Actionsがよかったかな、と後から思ったけどまぁいいか。</p>
<h2 id="circleci設定">CircleCI設定</h2>
<p>hugoのビルドは、Orbがあったのでそれを使う。
Orbはビルド手順のテンプレートみたいなの。</p>
<p><a href="https://circleci.com/orbs/registry/orb/circleci/hugo">https://circleci.com/orbs/registry/orb/circleci/hugo</a></p>
<p>その後、Github Pagesへのpushは手動で設定。
このあたり参考にさせていただきました。</p>
<ul>
<li><a href="https://qiita.com/sterashima78/items/ddb8161eb6345d9fb15b">CircleCIでgithub pagesに自動デプロイする</a></li>
<li><a href="https://t32k.me/mol/log/hugo-circleci-ghpages-2018/">CircleCIでHugoを実行してGitHub Pagesにデプロイ</a></li>
</ul>
<p>引っかかったのが、ssh鍵設定してもcloneできない問題。
<a href="https://discuss.circleci.com/t/git-clone-fails-in-circle-2-0/15211">こちら</a>参考に、<code>StrictHostKeyChecking=no</code>にすれば解決しました。</p>
<p>最終的に.circleci/config.ymlはこんな感じ。
なれてきたらまた直していきたい。</p>


```yaml
version: 2.1
orbs:
  hugo: circleci/hugo@0.4.1
jobs:
  deploy:
    docker:
      - image: cibuilds/base
    steps:
      - add_ssh_keys:
          # CirlceCIのSSH Permissionsに設定したSSH Keyのfingerprintを設定
          fingerprints:
            - "SO:ME:FIN:G:ER:PR:IN:T"
      # ビルドしたworkspaceをもってくる
      - attach_workspace:
          at: .
      - deploy:
          name: deploy to Github Pages
          command: |
            # ssh警告無視
            echo "HostName github.com" >> ~/.ssh/config
            echo "StrictHostKeyChecking no" >> ~/.ssh/config

            DEPLOY_DIR=deploy
            # USER_EMAILはCircleCIのEnvironment Variablesで設定
            git config --global user.email $USER_EMAIL
            git config --global user.name $CIRCLE_USERNAME
            git clone git@github.com:abekoh/abekoh.github.io.git $DEPLOY_DIR

            cd $DEPLOY_DIR
            rm -vrf ./*
            cp -v -R ../public/* ./

            # ドメイン設定
            echo "blog.abekoh.dev" > CNAME

            git add -f .
            git commit -m "Deploy #$CIRCLE_BUILD_NUM from CircleCI [ci skip]"
            git push origin master -f
workflows:
  version: 2.1
  main:
    jobs:
      - hugo/build:
          # TODO: HTMLチェックをonに
          html-proofer: false
      # masterマージ時のみデプロイ
      - deploy:
          requires:
            - hugo/build
          filters:
            branches:
              only: master

```


<h2 id="ドメイン設定">ドメイン設定</h2>
<p>ついでにドメインも取得してみたので設定。</p>
<p>Google Domainsで、devドメインつくりました。
年間1200円、安いですね。</p>
<p><img src="/assets/google-domains-cname-config.png" alt="Google Domains設定">
このようにCNAME設定して、</p>
<p><img src="/assets/github-pages-domain-config.png" alt="Github Pages">
abekoh/abekoh.github.ioのSettingsでドメイン設定するだけ。</p>
<p>なお、CNAMEファイルがpush時に毎回消えてしまうような設定になっているので、.cricleci/config.ymlのpipelineのとおりCNAMEを毎回作成するようにしています。</p>
<h2 id="感想">感想</h2>
<p>やっぱりGitHub上で完結できるのよいですね。書きたいネタをIssueに登録、PR作って解決という流れで一人で運用ができて楽しい。</p>

<h2>2021/04/24追記</h2>
<p><a href="https://blog.abekoh.dev/posts/build-blog-with-nextjs">こちらの記事</a>のとおり、リニューアルしたのでこの内容のとおりではなくなっております。<br>
記録のために、スクリーンショットをこちらに置いておきます。
</p>
<p><img src="/assets/blog-with-hugo.png"/></p>
    