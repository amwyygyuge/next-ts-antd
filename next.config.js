/* eslint-disable */
const withCss = require('@zeit/next-css')
const withTypescript = require('@zeit/next-typescript')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
	require.extensions['.css'] = file => {}
}
const isProd = process.env.NODE_ENV === 'production'

module.exports = withCss(
	withTypescript({
		webpack(config, options) {
			//  这里面还可以再配置哦 最后一个要return
			if (options.isServer) config.plugins.push(new ForkTsCheckerWebpackPlugin())
			config.node = {
				fs: 'empty'
			}
			return config
		},
		generateBuildId: async () => {
			// For example get the latest git commit hash here
			return 'my-build-id'
		},
		async exportPathMap(defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
			if (dev) {
				return defaultPathMap
			}
			return { '/': { page: '/' } }
		}
	})
)
