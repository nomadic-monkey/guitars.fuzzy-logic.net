export default {
  async fetch(request, env) {
    // Try the static asset first
    let res = await env.ASSETS.fetch(request);

    // On 404, if it's not a file (no extension), serve index.html
    if (res.status === 404 && request.method === "GET") {
      const url = new URL(request.url);
      if (!url.pathname.includes(".")) {
        const indexUrl = new URL("/index.html", url.origin);
        return env.ASSETS.fetch(new Request(indexUrl, request));
      }
    }
    return res;
  }
};