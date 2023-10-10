const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://jap.digisole.in',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/api/v1' // Update the path if needed
      }
    })
  );
};
