const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'webpack-react-test',
			template: 'src/index.html'
		}),
		new CleanWebpackPlugin()
	],
	resolve: {
		extensions: ['*', '.js', '.jsx'],
	},
	devServer: {
		static: path.resolve(__dirname, './dist'),
		port: 3000,
    	open: true,
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/,
				use: ['file-loader']
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"
	
			}
		]
	}
}