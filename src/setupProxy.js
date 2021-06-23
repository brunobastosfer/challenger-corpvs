const proxy = require("http-proxy-middleware")

module.exports = function(app) {
  app.use(
    proxy("/api/search/posicoes/", {
      target: "https://middleware.vanguardatech.com",
      secure: false,
      changeOrigin: true
    })
  )
}

