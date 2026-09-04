import { type NextRequest, NextResponse } from "next/server";

const PROXY_PATH = "/senbo";

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname =
    url.pathname.startsWith(`${PROXY_PATH}/static/`) ||
    url.pathname.startsWith(`${PROXY_PATH}/array/`)
      ? "us-assets.i.posthog.com"
      : "us.i.posthog.com";

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("host", hostname);
  requestHeaders.delete("authorization");
  requestHeaders.delete("cookie");

  url.protocol = "https";
  url.hostname = hostname;
  url.port = "443";
  url.pathname = url.pathname.replace(/^\/senbo/, "");

  return NextResponse.rewrite(url, {
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: "/senbo/:path*",
};
