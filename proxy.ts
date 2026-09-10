import { NextResponse, type NextRequest } from "next/server";

import { defaultLocale, isLocale, type Locale } from "@/lib/i18n";

/** Best supported locale for the request, falling back to the default one. */
function negotiateLocale(request: NextRequest): Locale {
  const header = request.headers.get("accept-language");
  if (!header) return defaultLocale;

  const preferred = header
    .split(",")
    .map((part) => {
      const [tag, quality] = part.trim().split(";q=");
      return { tag: tag.split("-")[0].toLowerCase(), q: Number(quality ?? 1) };
    })
    .sort((a, b) => b.q - a.q);

  const match = preferred.find(({ tag }) => isLocale(tag))?.tag;
  return match && isLocale(match) ? match : defaultLocale;
}

/** The site lives under /fr and /en; the bare root negotiates between them. */
export default function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  url.pathname = `/${negotiateLocale(request)}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/"],
};
