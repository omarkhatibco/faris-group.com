const isProduction = process.env.NODE_ENV === 'production';
const withPlugins = require('next-compose-plugins');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

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
		BACKEND_URL: isProduction
			? 'https://api.faris-group.xyz/wp-json/wp/v2'
			: 'https://api.faris-group.xyz/wp-json/wp/v2',
	},
	target: 'serverless',
};

module.exports = withPlugins([], nextConfiguration);
