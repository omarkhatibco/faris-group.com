const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
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
};
