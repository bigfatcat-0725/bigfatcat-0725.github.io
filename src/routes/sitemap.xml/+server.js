  export async function GET() {
	return new Response(
		`
		<?xml version="1.0" encoding="UTF-8"?>
      <urlset
            xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
            xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
                  http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
      <!-- created with Free Online Sitemap Generator www.xml-sitemaps.com -->
      
      
      <url>
        <loc>https://bigfatcat-0725.github.io/</loc>
        <lastmod>2023-12-13T23:24:35+00:00</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>https://bigfatcat-0725.github.io/1rm-calculator</loc>
        <lastmod>2023-12-13T23:24:35+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      
      
      </urlset>`.trim(),
		{
			headers: {
				'Content-Type': 'text/xml; charset=utf-8'
			}
		}
	);
}