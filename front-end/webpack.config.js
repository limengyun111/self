const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	entry: './src/index.tsx',
	mode: 'development',
	// mode: 'production',
	devtool: 'inline-source-map',
	devServer: {
		static: path.join(__dirname, 'dist'),
		compress: true,
		port: 9000,
		hot: true,
		open: true,
		historyApiFallback: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'index.html',
		})
	],
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			// {
			//   test: /\.jsx?$/,
			//   exclude: /node_modules/,
			//   use: {
			//     loader: 'babel-loader',
			//     options: {
			//       presets: ['@babel/preset-env']
			//     }
			//   }
			// },
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.module.css$/i,
				use: [
					// 将 JS 字符串生成为 style 节点
					'style-loader',
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
};