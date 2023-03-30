const {createProxyMiddleware} = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(
        ['/bpm', '/rest'],
        createProxyMiddleware({
            target: 'http://localhost:8888',
            changeOrigin: true,
            logLevel: 'debug',
        })
    );
};
