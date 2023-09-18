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
ISUCONに出場予定なので、さくっともろもろ編集するにはシェル環境だけで完結できるとよいかな、という考えから再構築をはじめた。

リニューアル前の環境としては、こちらの記事で紹介したものをベースに更に少し変更を加えたものだった。具体的にfishはやめてzshをしばらく使っていた。理由は後述

[fish,tmux,neovim,ghq,pecoで開発スペース構築を快適にする - abekoh's tech note](https://blog.abekoh.dev/posts/prj-command)

もろもろ設定したものがこちら。リニューアル前のものはtagをつけてスナップショットとして追いやすくしている。

[abekoh/dotfiles: my dotfiles](https://github.com/abekoh/dotfiles)

以下、分類ごとに採用したツールを紹介

## ターミナル: Alacritty

長らくiTerm2を使っていたが、Alacrittyというのに乗り換えてみた。

[Alacritty - A cross-platform, OpenGL terminal emulator](https://alacritty.org/)

RustとOpenGLの力で高速というのが売りのもの。とはいえ個人的にはiTerm2との差は感じない。

また、複数パネル・タブなどの機能はない(複数ウィンドウはできそう)、設定はYAML(次期バージョンではTOML)でしか設定できないという硬派であるが、それが以前のiTerm2とtmuxの機能両方を混ぜながら使うスタイルより統一感を助長してくれてよいかなと思った。

シンプルで硬派なところに惹かれて採用。

最近だと[Warp](https://www.warp.dev/), [WezTerm](https://wezfurlong.org/wezterm/)も流行っているが、ターミナルエミュレータ自体はシンプル志向でいきたかったので採用せず。

## シェル: zsh + Starship + zinit + Atuin

こちらは2年ほど前からfishをやめてzshにした。
理由として、fishは独自構文多すぎで学習コストが厄介なのと、世に多くあるPOSIX互換のコマンド・ワンライナー等のコピペが動かず辛かったところ。

結局zshにして、Starship 入れたり補完周りのプラグイン入れたりすればfishでできてた補完・情報表示などは再現できる。

Starshipはゼロコンフィグで、見た目をいい感じにできてよい。gitのステータスはもちろん、各種言語の使用バージョン表示など。

[Starship: Cross-Shell Prompt](https://starship.rs/)

zinitはプラグイン管理、ここはあまり比較検討できてない。

[zdharma-continuum/zinit: 🌻 Flexible and fast ZSH plugin manager](https://github.com/zdharma-continuum/zinit)

また、コマンド履歴はAtuinで後からの検索をサクサクできるようにしている。登録すれば別のデバイスとの共有も可能らしいが、コマンド履歴をインターネット越しに共有は抵抗があるので利用していない。

[Atuin - Magical Shell History](https://atuin.sh/)

## マルチプレクサ: Zellij

tmuxの大体としてZellijを導入。

[Zellij](https://zellij.dev/)

tmuxでできてたことは何でもできる。設定項目も豊富。

できるだけデフォルトの設定を尊重しつつ、Vim操作で被ったところは別のものを割り当てたりで調整。有効なレイアウトなら下にガイドが表示されているのがわかりやすくて嬉しい。

Alacritty導入により複数タブ・パネルが使えないのでこちらに全て頼ることとなる。[Autostart](https://zellij.dev/documentation/integration#autostart-on-shell-creation)の設定を入れてzsh起動したら自動でZellijが立ち上がるようにした。

## エディタ: Neovim + AstroNvim

NeoVimであれこれプラグイン入れて環境整えて久しいが、以前より利用頻度が減った(主にGoLand, WebStormでコードを書く)のでチューニングがだるくなっていた。
プラグイン大量使いだと、それぞれのキーバインドを被らないようにあれこれ割当なおすのは楽しい半面、しっかり設計しないとモグラ叩きのように次から次へ設定をし直すハメになってしまう。

そこで、AstroNvimという、これさえ入れればいろいろいい感じにしてくれるってやつに頼ることにした。

[Getting Started | AstroNvim](https://astronvim.com/)

LSPのおかげで色々な言語の補完が簡単に実現できてうれしい。自動でどのLSPを使うかの設定は入れておいた

```lua
-- init.lua
return {
  plugins = {
    {
      "williamboman/mason-lspconfig.nvim",
      opts = function(_, opts)
        opts.ensure_installed = require("astronvim.utils").list_insert_unique(opts.ensure_installed, {
          "ansiblels",
          "astro",
          "bashls",
          "clangd",
          "cmake",
          "cssls",
          "dockerls",
          "gopls",
          "html",
          "jsonls",
          "jdtls",        -- java
          "tsserver",     -- javascript / typescript
          "marksman",     -- markdown
          "intelephense", -- php
          "prismals",
          "pyright",      -- python
          "solargraph",   -- ruby
          "taplo",        -- toml
          "tailwindcss",
          "terraformls",
          "lemminx", -- xml
          "yamlls",
          "sqlls",
          "hls", -- haskell
          "graphql",
        })
      end,
    },
  },
}
```

追加で以下のようなプラグインを入れた

- [jacoborus/tender.vim: A 24bit colorscheme for Vim, Airline and Lightline](https://github.com/jacoborus/tender.vim)
  - カラースキーマ
- [zbirenbaum/copilot.lua: Fully featured & enhanced replacement for copilot.vim complete with API for interacting with Github Copilot](https://github.com/zbirenbaum/copilot.lua)
  - GitHub Copilotプラグイン、公式のプラグインよりカスタマイズしやすい
- [t9md/vim-quickhl: quickly highlight <cword> or visually selected word](https://github.com/t9md/vim-quickhl)
  - 選択したキーワードをハイライトするやつ、かなり昔からお世話になりっぱなし
- [iamcco/markdown-preview.nvim: markdown preview plugin for (neo)vim](https://github.com/iamcco/markdown-preview.nvim)
  - Markdownプレビュー、カーソル位置の追尾までしてくれる

AstroNvimのデフォルトで好みじゃないところはいろいろ変更している。以下の設定ファイル参照。

[dotfiles/config/astronvim at main · abekoh/dotfiles](https://github.com/abekoh/dotfiles/tree/main/config/astronvim)

## 独自設定

### prjコマンド

### パネル上下入れ替え

### cdコマンドでgitルートジャンプ

### セットアップ

## まとめ

