export async function getServerSideProps({ res }) {
    const baseUrl = 'https://pageexpress.io';

    const staticPages = ['/']; // Aqui você pode adicionar mais páginas, se necessário

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
        .map((url) => {
            return `
            <url>
              <loc>${baseUrl}${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <priority>0.80</priority>
            </url>
          `;
        })
        .join('')}
    </urlset>
  `;

    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
}

export default function Sitemap() {
    return null; // Não precisa renderizar nada na página
}
