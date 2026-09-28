import type { CollectionEntry } from "astro:content";
import { postFilter } from "./postFilter";
import { slugifyStr } from "./slugify";

type Tag = {
  tag: string;
  tagName: string;
};

/**
 * Builds a de-duplicated, sorted tag list from posts and events.
 *
 * - Drafts and scheduled posts are excluded via `postFilter()`
 * - Draft events are excluded
 * - `tag` is the slug used in URLs; `tagName` is the original label for display
 * - Uniqueness is based on the slug (so differently-cased labels collapse)
 */
export function getUniqueTags(
  posts: CollectionEntry<"posts">[],
  events: CollectionEntry<"events">[] = []
) {
  const postTags = posts.filter(postFilter).flatMap(post => post.data.tags);
  const eventTags = events
    .filter(({ data }) => !data.draft)
    .flatMap(event => event.data.tags);

  const tags: Tag[] = [...postTags, ...eventTags]
    .map(tag => ({ tag: slugifyStr(tag), tagName: tag }))
    .filter(
      (value, index, self) =>
        self.findIndex(tag => tag.tag === value.tag) === index
    )
    .sort((tagA, tagB) => tagA.tag.localeCompare(tagB.tag));
  return tags;
}