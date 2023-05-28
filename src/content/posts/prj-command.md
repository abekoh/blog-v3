---
title: 'fish,tmux,neovim,ghq,pecoで開発スペース構築を快適にする'
summary: ''
categories: ['tech']
tags: ['vim','neovim','fish','tmux','shell']
publishedAt: 2020-03-13T16:43:00.000Z
modifiedAt: 
draft: false
isHtml: true
microCMSId: 'prj-command'
microCMSCreatedAt: 2021-03-20T14:57:30.176Z
microCMSUpdatedAt: 2021-03-25T12:49:30.792Z
microCMSRevisedAt: 2021-03-25T12:49:30.792Z
---
<p>ちょっとしたコード編集とかだったらターミナル上だけで完結させるのが好きでして。
効率よくプロジェクト選択、そのまま編集したりしやすくなる <code>prj</code> というコマンドを自作しています。
また、これに加えて使いやすいように他にも設定盛り込んでます。</p>
<p>なんだかんだ1年以上運用していて、満足しているのでアウトプットしておきます。</p>
<h2 id="環境">環境</h2>
<p>次のような環境が必要です</p>
<ul>
<li><a href="https://github.com/neovim/neovim">Neovim</a><ul>
<li><a href="https://github.com/mhinz/neovim-remote">neovim-remote</a></li>
</ul>
</li>
<li><a href="https://github.com/tmux/tmux">tmux</a></li>
<li><a href="https://fishshell.com/">fish</a></li>
<li><a href="https://github.com/peco/peco">peco</a></li>
</ul>
<p>Neovim,tmuxは必須ですが、fish,pecoはzsh,fzfに書き換えても良いと思います。
インストール方法はそれぞれリンク先を参照してください。</p>
<h2 id="デモ">デモ</h2>
<p><img src="/assets/prj-command.gif" alt="prj command"></p>
<p>わかりにくいかもですが、次のような特徴をみせてます。</p>
<ol>
<li><code>prj</code>で、ghqにより管理されたgitリポジトリをpecoをつかって選択</li>
<li>リポジトリを選択するとそのプロジェクト用のtmuxセッションが開かれ、カレントディレクトリがそのリポジトリ配下になる</li>
<li>tmuxセッション内で、Neovimは1タブでしか開けない</li>
<li>tmuxセッション内でもう一度<code>prj</code>を実行すると、別のプロジェクトも開ける</li>
</ol>
<p>次の項でその実現方法を解説します。</p>
<h2 id="解説">解説</h2>
<h3 id="prjコマンド">prjコマンド</h3>
<p>ghqとpecoの連携についてはこちらの記事の考えをそのまま使っています。</p>
<p><a href="https://qiita.com/itkrt2y/items/0671d1f48e66f21241e2">ghq, peco, hubで快適Gitライフを手に入れよう！ - Qiita</a></p>
<p>この組み合わせによって、レポジトリ管理・選択が劇的に楽になります。
さらに小細工を入れてtmuxセッションを開くようにしました。</p>
<p>prjコマンドはfish scriptで書いています。こんな感じ</p>


```fish
# prj.fish
function prj -d "start project"
  # 引数が設定されていれば、それをpecoにわたす
  if test (count $argv) -gt 0
    set prjflag --query "$argv"
  end
  set PRJ_PATH (ghq root)/(ghq list | peco $prjflag)
  # プロジェクトが選択されなければ終了
  if test -z $PRJ_PATH
    return
  end
  # プロジェクト名は 所有者/リポジトリ名 の形式。その名前に`.`を含む場合は`_`に置換
  set PRJ_NAME (echo (basename (dirname $PRJ_PATH))/(basename $PRJ_PATH) | sed -e 's/\./_/g')
  # プロジェクトのtmuxセッションが存在しなければ作成
  if not tmux has-session -t $PRJ_NAME
    tmux new-session -c $PRJ_PATH -s $PRJ_NAME -d
    tmux setenv -t $PRJ_NAME TMUX_SESSION_PATH $PRJ_PATH
  end
  # tmuxセッション外であればattach
  if test -z $TMUX
    tmux attach -t $PRJ_NAME
  # tmuxセッション内であればswitch
  else
    tmux switch-client -t $PRJ_NAME
  end
end

```


<p>これでtmux連携が可能になりました。</p>
<h3 id="セッション内で開くneovimを1つに">セッション内で開くNeovimを1つに</h3>
<p>セッション内で自分は複数タブを使い、一方でNeovim、一方でファイル確認、一方でサーバー起動とかやります。そうやってると、ついついNeovimを複数タブで開いてしまい、どこでどのファイルを編集していたかわからなくなります。<br>それを回避するために、neovim-remoteを採用しました。</p>
<p>neovim-remoteを使うと、すでに起動してあるNeovimに開くファイルを追加する、といった動きをさせることができます。</p>
<p>socketファイルをわかりやすくプロジェクト名として/tmpに保存し、同プロジェクトで新た<code>nvim</code>すると<code>nvr --remote-tab --servername /tmp/{プロジェクト名}</code>で既存Neovimの新規タブとして開かれるようになります。</p>
<p><code>nvim</code>コマンドをfishでラッピングし実現しました。</p>


```fish
# nvim.fish
function nvim -d "neovim wrapping"
  # tmuxセッション内でなければそのまま
  if test -z $TMUX
    command nvim $argv
  else
    # /tmp/にtmuxセッションを保管
    set socket_path /tmp/(echo (tmux display-message -p '#S') | sed 's/\//_/g' )
    if test -S $socket_path
      # すでにソケットが存在してたらそれに接続
      nvr --remote-tab --servername $socket_path $argv
      # 該当のnvimに移動
      set session_id (tmux list-panes -F '#{session_id}')
      set pane_ids (tmux list-panes -a -F "#{session_id},#{window_index},#{pane_index},#{pane_current_command}" | grep "^$session_id,.*,nvim\$" | string split ',')
      tmux select-window -t $pane_ids[2] && tmux select-pane -t $pane_ids[3]
    else
      # ソケットがなければ作成して起動
      command env NVIM_LISTEN_ADDRESS=$socket_path nvim $argv
    end
  end
end

```


<h3 id="cdコマンド空打ちでプロジェクトルートに移動">cdコマンド空打ちでプロジェクトルートに移動</h3>
<p>デモに記録していませんでしたが、これも便利なので紹介。<br>tmuxセッション内で<code>cd</code>空打ちすると、homeではなくプロジェクトルートに移動するようにしています。</p>
<p>例のごとく、fishでラッピング</p>


```fish
# cd.fish
function cd --description "Change directory"
  if test -n "$TMUX" -a -z "$argv"
    set session_path (tmux show-environment | grep TMUX_SESSION_PATH | string replace "TMUX_SESSION_PATH=" "")
    if test $session_path
      builtin cd $session_path
      return $status
    end
  end
end

```


<p>自分の設定では、<a href="https://github.com/fish-shell/fish-shell/blob/master/share/functions/cd.fish">標準のcd.fish</a>をコピーしてきて<a href="https://github.com/abekoh/dotfiles/blob/master/config/fish/functions/cd.fish">書き加えた</a>かたちにしています。</p>
<h2 id="設定全体">設定全体</h2>
<p>dotfilesを公開しているので、全体像はこちらから。今回のfishコマンドたちはconfig/fish/functionsに置いてます。</p>
<p><a href="https://github.com/abekoh/dotfiles">abekoh/dotfiles</a></p>
<p>ただ完全に自分用で、使ってない機能、保守していないところもあるのであしからず。。</p>
<h2 id="まとめ">まとめ</h2>
<p>fishでコマンド上書きでゴリ押しですが、使い勝手よくて気に入っています。
こういった作業改善、凝りだすと止まらなくなってしまうので危険です。。笑</p>

    