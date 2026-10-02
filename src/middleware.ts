import { defineMiddleware } from 'astro:middleware';
import { BASE_URL } from './data/siteConfig';

export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next();
  const contentType = response.headers.get('content-type');

  if (contentType?.includes('text/html')) {
    let html = await response.text();
    const base = (import.meta.env.BASE_URL || BASE_URL).replace(/^\/|\/$/g, '');

    if (!base) {
      return new Response(html, {
        status: response.status,
        headers: response.headers,
      });
    }

    html = html.replace(
      /(href|src|poster|content)=["']\/((?!(\/|https?:|mailto:|tel:|javascript:|data:))[^"']*)["']/g,
      (match, attr, path) => {
        if (path === base || path.startsWith(`${base}/`)) {
          return match;
        }
        return `${attr}="/${base}/${path}"`;
      }
    );

    return new Response(html, {
      status: response.status,
      headers: response.headers,
    });
  }

  return response;
});
