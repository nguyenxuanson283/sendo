const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://searchlist-api.sendo.vn/',
      changeOrigin: true,
      onProxyReq: function(proxyRes, req, res) {
        // proxyRes.headers["Access-Control-Allow-Origin"] = "*";
        // console.log('proxyRes', proxyRes);
        delete proxyRes.removeHeader('Origin');
        delete proxyRes.removeHeader('origin');
      },
      pathRewrite: {
        '^/api': '/',
      },
    })
  );
};
