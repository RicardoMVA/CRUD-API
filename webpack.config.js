const path = require('path')
const nodeExternals = require('webpack-node-externals');

module.exports = {
	entry: ['babel-polyfill', './app.js'],
	node: {
  		fs: 'empty',
  		net: 'empty'
	},
	output: {
		path: path.resolve(__dirname, ''),
		filename: 'app-production.js'
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['env']
				}
			}
		}]
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'public'),
		publicPath: '/public/'
	},
	devtool: 'source-map',
	target: 'node',
	node: {
		__dirname: false
	},
	externals: [nodeExternals()]
}
