import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { BASE_URL, BLOG_DESCRIPTION, BLOG_TITLE } from "../constraint";
import type { APIRoute } from "astro";
import { postsDefaultSortFunc } from "@/content/utils";

export const GET: APIRoute = async () => {
  const posts = await getCollection("posts");
  return rss({
    title: BLOG_TITLE,
    description: BLOG_DESCRIPTION,
    site: BASE_URL,
    items: posts
      .filter((post) => !post.data.draft)
      .sort(postsDefaultSortFunc)
      .map((post) => ({
        title: post.data.title,
        pubDate: post.data.publishedAt,
        description: post.data.summary,
        link: `/posts/${post.id}`,
      })),
  });
};
