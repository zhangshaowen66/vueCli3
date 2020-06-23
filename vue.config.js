var proxy = null;
if (process.env.VUE_APP_MODE == 'development') {
	// 配置代理解决跨域问题
	proxy = {
		'/api': {
			target: process.env.VUE_APP_MODE,
			pathRewrite: {
				'^/api': ''
			}
		},
	}
}
module.exports = {
	devServer: {
		proxy: proxy
	}
}
