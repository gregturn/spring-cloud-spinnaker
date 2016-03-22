var path = require('path');

var node_dir = __dirname + '/node_modules';

module.exports = {
	entry: './src/main/js/app.js',
	devtool: 'sourcemaps',
	cache: true,
	debug: true,
	resolve: {
		alias: {
			'when': node_dir + '/rest/node_modules/when/when.js'
		}
	},
	output: {
		path: __dirname,
		filename: './target/classes/static/built/bundle.js'
	},
	module: {
		loaders: [
			{
				test: path.join(__dirname, '.'),
				exclude: /(node_modules)/,
				loader: 'babel-loader'
			}
		]
	}
};