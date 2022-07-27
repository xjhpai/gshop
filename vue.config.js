module.exports = {
    devServer: {
        proxy: {
          '/api': { // 只对请求路由以/api开头的请求进行代理转发
            target: 'http://localhost:8080', // 转发的目标url
            changeOrigin: true // 支持跨域
             // pathRewrite: {'^/api': }
          }
        }
      },
    lintOnSave:false
}