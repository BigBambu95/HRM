const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
	mode: 'development',
	entry: path.resolve(__dirname, 'src/index.jsx'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js',
		chunkFilename: '[name].bundle.js',
		publicPath: '/',
	},
	devServer: {
		port: 3000,
		contentBase: './dist',
		hot: true,
		overlay: true,
		compress: true,
		historyApiFallback: true,
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: '/node_modules',
				use: 'babel-loader',
			},
			{
				test: /\.css$/,
				exclude: '/node_modules',
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	resolve: {
		modules: [path.resolve(__dirname, 'src'), 'node_modules'],
		extensions: ['.jsx', '.js'],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'public/index.html'),
		}),
	],
}

module.exports = config