const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:8000', // L'URL de votre serveur Laravel
            changeOrigin: true,
        })
    );
};
