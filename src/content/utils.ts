import type { CollectionEntry } from "astro:content";

export function postsDefaultSortFunc(
  a: CollectionEntry<"posts">,
  b: CollectionEntry<"posts">
) {
  const aDate = a.data.publishedAt;
  const bDate = b.data.publishedAt;
  if (aDate > bDate) {
    return -1;
  } else if (aDate < bDate) {
    return 1;
  } else {
    return 0;
  }
}
