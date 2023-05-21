import * as dotenv from "dotenv";
import { createClient } from "microcms-js-sdk";
import * as fs from "fs";

dotenv.config();

const client = createClient({
  serviceDomain: "abekoh-tech-blog",
  apiKey: process.env.MICROCMS_API_KEY,
});

const posts = await client.get({
  endpoint: "posts",
  queries: {
    limit: 100,
  },
});

fs.mkdirSync("content/posts", { recursive: true });
posts.contents.forEach((post) => {
  const body = post.isHtml ? post.htmlBody : post.body;
  const content = `---
title: '${post.title}'
summary: '${post.summary ?? ""}'
categories: [${post.categories.map((c) => `'${c.name}'`)}]
tags: [${post.tags.map((p) => `'${p.id}'`)}]
publishedAt: ${post.publishedAt}
modifiedAt: ${post.modifiedAt ?? ""}
draft: ${post.isDraft}
isHtml: ${post.isHtml}
microCMSId: '${post.id}'
microCMSCreatedAt: ${post.createdAt}
microCMSUpdatedAt: ${post.updatedAt}
microCMSRevisedAt: ${post.revisedAt}
---
${body}
    `;
  fs.writeFileSync(`content/posts/${post.id}.md`, content);
});

const tags = await client.get({
  endpoint: "tags",
  queries: {
    limit: 100,
  },
});
fs.mkdirSync("content/tags", { recursive: true });

tags.contents.forEach((tag) => {
  const content = {
    id: tag.id,
    name: tag.name,
  };
  fs.writeFileSync(`content/tags/${tag.id}.json`, JSON.stringify(content));
});
