import { getRelativeLocaleUrl } from "astro:i18n";
import { EVENT_PATH } from "@/content.config";
import { slugifyStr } from "./slugify";
import config from "@/config";

function getEventPathSegments(filePath: string | undefined): string[] {
  return (
    filePath
      ?.replace(EVENT_PATH, "")
      .split("/")
      .filter(path => path !== "")
      .filter(path => !path.startsWith("_"))
      .slice(0, -1)
      .map(segment => slugifyStr(segment)) ?? []
  );
}

function getIdSlug(id: string): string {
  const eventId = id.split("/");
  return eventId.length > 0 ? String(eventId[eventId.length - 1]) : id;
}

function getEventSlugPath(id: string, filePath: string | undefined): string {
  const pathSegments = getEventPathSegments(filePath);
  const slug = getIdSlug(id);
  return pathSegments.length > 0
    ? [...pathSegments, slug].join("/")
    : String(slug);
}

/**
 * Returns the slug-only path for use as a route param in `getStaticPaths`.
 * No base prefix, no locale — Astro handles those at a higher level.
 * e.g. `/taller-de-git`
 */
export function getEventSlug(id: string, filePath: string | undefined): string {
  return `/${getEventSlugPath(id, filePath)}`;
}

/**
 * Returns a fully navigable URL for use in `<a href>`.
 * Applies both locale routing and the configured Astro base via
 * `getRelativeLocaleUrl`.
 * e.g. `/events/taller-de-git` or `/en/events/taller-de-git`
 */
export function getEventUrl(
  id: string,
  filePath: string | undefined,
  locale: string | undefined = config.site.lang
): string {
  return getRelativeLocaleUrl(
    locale,
    `events/${getEventSlugPath(id, filePath)}`
  );
}