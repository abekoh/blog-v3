import * as dotenv from 'dotenv';
import {createClient} from 'microcms-js-sdk';
import * as fs from 'fs';

dotenv.config();

const client = createClient({
    serviceDomain: 'abekoh-tech-blog',
    apiKey: process.env.MICROCMS_API_KEY,
});

const posts = await client.get({
    endpoint: 'posts',
    queries: {
        limit: 100,
    }
})
posts.contents.forEach((post) => {
    const body = post.isHtml ? post.htmlBody : post.body;
    const content = `<!-- migrate from abekoh-tech-blog.microcms.io  -->
---
title: '${post.title}'
summary: '${post.summary}'
isHtml: ${post.isHtml}
categories: [${post.categories.map(c => `'${c.name}'`)}]
tags: [${post.tags.map(p => `'${p.name}'`)}]
publishedAt: ${post.publishedAt}
modifiedAt: ${post.modifiedAt}
microCMSId: '${post.id}'
microCMSCreatedAt: ${post.createdAt}
microCMSUpdatedAt: ${post.updatedAt}
microCMSRevisedAt: ${post.revisedAt}
draft: ${post.isDraft}
---
${body}
    `;
    fs.writeFileSync(`content/${post.id}.md`, content);
});