var proxy = null;
if (process.env.VUE_APP_MODE == 'development') {
	// 配置代理解决跨域问题
	proxy = {
		'/api': {
			target: 'http://14.29.197.200:18000/',
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
