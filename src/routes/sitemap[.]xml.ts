import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/sitemap.xml')({
  server: {
    handlers: {
      GET: async () => {
        // Replace or add your website's clean pages below inside the <urlset> block
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://sitemaps.org">
  <url>
    <loc>https://nothingbuthouse.events</loc>
    <priority>1.0</priority>
  </url>
</urlset>`;

        return new Response(xml, {
          headers: {
            'Content-Type': 'application/xml; charset=utf-8',
            'X-Content-Type-Options': 'nosniff',
          },
        });
      },
    },
  },
});
