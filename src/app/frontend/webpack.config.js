// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
// const CopyPlugin = require('copy-webpack-plugin');
// const isProduction = process.env.NODE_ENV == 'production';


// const stylesHandler = MiniCssExtractPlugin.loader;



module.exports = {
	entry: path.resolve(__dirname, 'src/index.js'),
	mode: 'none',
	target: ['web', 'browserslist'],
	output: {
		path: path.resolve(__dirname, '../../../dist'),
		clean: true,
		library: {
			type: 'commonjs'
		},
		filename: 'frontend.[contenthash].js'
	},
	devServer: {
		static: {
			directory: path.join(__dirname, '../../../dist'),
		},

		watchFiles: [
			'./src/scss',
			'./src/ts'
		],

		compress: true,
		historyApiFallback: true,
		open: true,
		port: 8080
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../index.html'),
			minify: {
				// exclude the minification
				collapseWhitespace: false
			}
		}),
		new webpack.SourceMapDevToolPlugin({
			filename: '[file].map.[query]',
			exclude: path.resolve(__dirname, 'src'),
		}),

		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css'
		}),
		// new CopyPlugin({
		// 	patterns: [
		// 		{ from: '../../../dist/backend/src/app/backend/src/serve/index.js', to: '../../../dist/backend', },
		// 		{ from: '../../../dist/backend/src/app/backend/src/serve/index.js.map', to: '../../../dist/backend', },

		// 	],
		// }),
		// Add your plugins here
		// Learn more about plugins from https://webpack.js.org/configuration/plugins/
	],
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/i,
				loader: 'ts-loader',
				include: [
					path.join(__dirname, 'src/ts')
				]
				// exclude: ['/node_modules/'],
				// options: {
				// 	????????? !!!!configFile: path.resolve(__dirname, "tsconfige.json"),
				// }

			},
			{
				test: /\.js$/i,
				include: [
					path.resolve(__dirname, 'src/ts')
				],
				use: [{
					loader: 'babel-loader',
					options: {
						presets: [
							['@babel/preset-env', { targets: "defaults" }]
						],
						plugins: [
							'@babel/plugin-proposal-class-properties',
						],
						configFile: "./babel.config.js"
					}
				}],

			},
			{
				test: /.\.s?[ac]ss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader',
					'postcss-loader',
				]
			},
			{
				test: /\.html$/i,

				loader: 'html-loader'
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'pic/[name][ext]'
				}
			},

			// Add your rules for custom modules here
			// Learn more about loaders from https://webpack.js.org/loaders/
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
	},
};

// 'production';
// 'development';
