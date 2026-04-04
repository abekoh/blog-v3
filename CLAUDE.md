# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev              # 開発サーバー起動
pnpm build            # ビルド (astro build + pagefind インデックス生成)
pnpm preview          # ビルド済みサイトのプレビュー
pnpm lint             # ESLint + Prettier チェック
pnpm lint:fix         # ESLint + Prettier 自動修正
pnpm test:e2e         # E2Eテスト実行 (ビルド込み)
```

ビジュアルリグレッションのスナップショット更新は Docker 経由で行う (クロスプラットフォーム一貫性のため):
```bash
pnpm test:e2e:snapshot
```

## Architecture

Astro 5.x による静的ブログサイト。テックブログ (https://blog.abekoh.dev/)。

### コンテンツ管理

`src/content/` に Astro Content Collections で管理:
- `posts/` — Markdown/MDX のブログ記事。フロントマター: `title`, `summary`, `categories`, `tags`, `publishedAt`, `modifiedAt`, `draft`
- `tags/` — タグのデータ (JSON)。`id` と `name` を持つ

スキーマ定義は `src/content/config.ts`、ソート・タグ取得ユーティリティは `src/content/utils.ts`。

### ページルーティング

`src/pages/` が Astro のファイルベースルーティング:
- `/` — 記事一覧 (ページネーション付き)
- `/posts/[slug]` — 記事詳細
- `/tags/[tag]` — タグ別記事一覧
- `/search` — Pagefind による静的全文検索
- `/profile`, `/privacy`, `/rss.xml`

### 検索

[Pagefind](https://pagefind.app/) を使用した静的検索。`pnpm build` 実行時に `dist/` に対してインデックスを生成する。開発時 (`pnpm dev`) は検索機能が動作しないため、`pnpm build && pnpm preview` で確認する。

### スタイリング

Tailwind CSS (`tailwind.config.cjs`)。`src/global.css` でグローバルスタイルを管理。フォントは Google Fonts の M PLUS 1p。

### 定数・ユーティリティ

- `src/constraint.ts` — ブログタイトル、URL、ページサイズ等の定数
- `src/utils/date.ts` — 日付フォーマット (Asia/Tokyo タイムゾーン)

### パスエイリアス

`@/` は `src/` を指す (`tsconfig.json` で設定)。

### テスト

テストは E2E のみ (Playwright)。`e2e/e2e.spec.ts` にページ遷移・コンテンツ確認・ビジュアルリグレッションテストを記述。ビジュアルスナップショットは `e2e/e2e.spec.ts-snapshots/` に保存。
