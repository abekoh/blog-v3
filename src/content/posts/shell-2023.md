---
title: 'シェル環境2023'
summary: 'シェルまわりをリニューアルした。その備忘録'
categories: [ 'tech' ]
tags: [ 'astro', 'tailwindcss', 'cloudflare' ]
publishedAt: 2023-05-31T23:00:00.000+09:00
modifiedAt:
draft: false
isHtml: false
---

シェルまわりの環境をリニューアルしてみて、その備忘録を残す。

リニューアル前の環境としては、こちらの記事で紹介したものをベースに更に少し変更を加えたものだった。具体的にfishはやめてzshをしばらく使っていた。理由は後述

[fish,tmux,neovim,ghq,pecoで開発スペース構築を快適にする - abekoh's tech note](https://blog.abekoh.dev/posts/prj-command)

もろもろ設定したものがこちら。リニューアル前のものはtagをつけてスナップショットとして追いやすくしている。

[abekoh/dotfiles: my dotfiles](https://github.com/abekoh/dotfiles)

以下、分類ごとに採用したツールを紹介

## ターミナル: Alacritty

長らくiTerm2を使っていたが、Alacrittyというのに乗り換えてみた。

[Alacritty - A cross-platform, OpenGL terminal emulator](https://alacritty.org/)

RustとOpenGLの力で高速というのが売りのもの。とはいえ個人的にはiTerm2との差は感じない。
また、複数パネル・タブなどの機能はない(複数ウィンドウはできそう)、設定はYAML(次期バージョンではTOML)でしか設定できないという硬派であるが、それが以前のiTerm2とtmuxの機能両方を混ぜながら使うスタイルより統一感を助長してくれてよいかなと思った。シンプルで硬派なところに惹かれて採用。

## シェル: zsh + zinit

## マルチプレクサ: zellij

## エディタ: Neovim + AstroNvim

## 独自設定

### prjコマンド

### パネル上下入れ替え

### cdコマンドでgitルートジャンプ

### セットアップ

## まとめ

