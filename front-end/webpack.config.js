/* eslint-disable */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
	entry: './src/index.tsx',
	output: {
		filename: '[name].boundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	// mode: 'development',
	mode: 'production',
	devtool: 'inline-source-map',
	optimization: {
		splitChunks: {
			chunks: 'all',

		},
		usedExports: true,
	},
	performance: {
		hints: false,
	},
	devServer: {
		static: path.join(__dirname, 'dist'),
		compress: true,
		port: 3000,
		hot: true,
		open: true,
		historyApiFallback: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'index.html',
			publicPath: 'http://localhost:3000'
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css',
		}),
	],

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				},
			},
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.module.css$/i,
				use: [
					// 将 JS 字符串生成为 style 节点
					// 'style-loader',
					MiniCssExtractPlugin.loader,
					// 将 CSS 转化成 CommonJS 模块
					// { loader: "css-modules-typescript-loader"},  // to generate a .d.ts module next to the .scss file (also requires a declaration.d.ts with "declare modules '*.scss';" in it to tell TypeScript that "import styles from './styles.scss';" means to load the module "./styles.scss.d.td")
					{
						loader: "css-loader",
						options: {
							esModule: false
							// modules: true
						}
					},
					// 'css-loader',
					// 将 Sass 编译成 CSS
					// 'sass-loader',
				],

			},
			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				use: [{
					loader: 'file-loader',
				}]
			}


		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	stats: {
		all: false,
		errors: true,
		warnings: true,
		modules: true,
		assets: true,
	}
};