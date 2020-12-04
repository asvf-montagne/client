const fs = require('fs')
const globby = require('globby')
const fetch = require('node-fetch');


const backendURL = `https://backend.asvf-montagne.fr`
const frontendURL = `https://beta.asvf-montagne.fr`


async function getPostsIds() {
  return (await fetch(`${backendURL}/posts/view/ids?limit=1000`)).json()
}


module.exports = class SeoGeneratorPlugin {
  async generateSiteMap() {

    const pages = (await globby([
      'pages/**/*.js',
      '!pages/_*.js',
      '!pages/**/[id].js',
      '!pages/api',
      '!pages/dashboard/**',
    ])).map(page => frontendURL + page.replace('pages', '')
      .replace('.js', '')
      .replace('.md', '')
      .replace('/index', '')
    );


    // add stories to pages
    (await getPostsIds()).forEach(id => pages.push(frontendURL + '/stories/' + id))

    const sitemap = `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.sort().map(page => `
  <url>
      <loc>${page}</loc>
  </url>
`).join('')}
</urlset>`

    fs.writeFileSync('public/sitemap.xml', sitemap)
  }

  generateRobot() {
    fs.writeFileSync('public/robots.txt', `
User-agent: *
Allow: /
Disallow: /dashboard/

Sitemap: ${frontendURL}/sitemap.xml`)
  }

  apply(compiler) {
    compiler.hooks.emit.tapPromise('SeoGeneratorPlugin', async () => {
      await this.generateSiteMap()
      this.generateRobot()
    });
  }
}
