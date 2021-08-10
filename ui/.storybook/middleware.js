const createProxyMiddleware = require('http-proxy-middleware')

module.exports = function expressMiddleware(router) {
  router.use(
    '/api',
    createProxyMiddleware({
      target: 'http://server:3000',
      changeOrigin: true,
    })
  )
}
