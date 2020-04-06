const path = require('path');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const webpack = require('webpack');
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
	entry: { 
		index: './src/scripts/index.js',
		about: './src/scripts/about.js',
		analytics: './src/scripts/analytics.js'
		},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[chunkhash].js'
		},
	module: {
		rules: [
		{
		test: /\.(eot|ttf|woff|woff2)$/,
		use: {
			loader: 'file-loader' ,
			options: {
			name: 'fonts/[name].[ext]',
				},
			},
		},

		{
		test: /\.(png|jpe?g|gif|ico|svg)$/i,

		use: [
		{
			loader: 'file-loader',
			options: {
			name: './images/[name].[ext]',
			esModule: false
			}
		},
		{
			loader: 'image-webpack-loader',
			options: {}
		},
			]
		},

		{
		test: /\.js$/,
		exclude: /node_modules/,
		use: { 
			loader: "babel-loader" 
			}
		},

		{
		test: /\.css$/,
		use: [
			{
			loader:MiniCssExtractPlugin.loader,
			options: {
				publicPath: '../',
				},
			},
			'css-loader',
			'postcss-loader',
			],
		},
		]
	},

	plugins: [
		new MiniCssExtractPlugin({
			filename: 'styles/style.[contenthash].css'
		}),
		new OptimizeCssAssetsPlugin({
			assetNameRegExp: /\.css$/g,
			cssProcessor: require('cssnano'),
			cssProcessorPluginOptions: {
			preset: ['default'],
		},
			canPrint: true
		}),
		new HtmlWebpackPlugin({
			inject: false,
			template: 'src/index.html',
			filename: 'index.html',
			favicon: 'src/images/favicon.ico'
		}),
		new HtmlWebpackPlugin({
			inject: false,
			template: 'src/about.html',
			filename: 'about.html',
			favicon: 'src/images/group.ico'
		}),
		new HtmlWebpackPlugin({
			inject: false,
			template: 'src/analytics.html',
			filename: 'analytics.html',
			favicon: 'src/images/group03.ico'
		}),

		new WebpackMd5Hash(),
		new webpack.DefinePlugin({
		'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
		})
	]
};

