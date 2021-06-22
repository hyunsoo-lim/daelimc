const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
  app.use(
      createProxyMiddleware('/api/*', {
          target: 'http://localhost:3001/',
          changeOrigin: true
      })
  )

  app.use(
    createProxyMiddleware('/api2/*', {
        target: 'http://daelimc.co.kr:3001/',
        changeOrigin: true
    })
)

  app.use(
    createProxyMiddleware('/img/*', {
        target: 'http://localhost:3001/',
        changeOrigin: true
    })
)

app.use(
    createProxyMiddleware('/download/*', {
        target: 'http://localhost:3001/',
        changeOrigin: true
    })
)
};