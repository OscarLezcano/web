import type { CollectionEntry } from "astro:content";

/**
 * Returns events that are eligible to be shown to users, sorted by event
 * date ascending (upcoming first). Events without a date are sorted to the end.
 */
export function getSortedEvents(events: CollectionEntry<"events">[]) {
  return events
    .filter(({ data }) => !data.draft)
    .sort((a, b) => {
      const aTime = a.data.date?.getTime() ?? Number.MAX_SAFE_INTEGER;
      const bTime = b.data.date?.getTime() ?? Number.MAX_SAFE_INTEGER;
      return aTime - bTime;
    });
}