
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/gustavoabell/gusttavo/my-blog-for-devs/.cache/dev-404-page.js")),
  "component---src-pages-index-js": preferDefault(require("/home/gustavoabell/gusttavo/my-blog-for-devs/src/pages/index.js"))
}

