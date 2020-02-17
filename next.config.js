const isProduction = process.env.NODE_ENV === 'production';
const withPlugins = require('next-compose-plugins');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
});

const nextConfiguration = {
	webpack: config => {
		if (config.resolve.plugins) {
			config.resolve.plugins.push(new TsconfigPathsPlugin());
		} else {
			config.resolve.plugins = [new TsconfigPathsPlugin()];
		}
		// Fixes npm packages that depend on `fs` module
		config.node = {
			fs: 'empty',
		};

		return config;
	},
	env: {
		BACKEND_URL: isProduction ? 'https://api.faris-group.xyz' : 'https://api.faris-group.xyz',
	},
	target: 'serverless',
};

module.exports = withPlugins([[withBundleAnalyzer]], nextConfiguration);
