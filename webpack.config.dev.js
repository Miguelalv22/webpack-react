const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.mjs',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.mjs'],
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|mjs|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.html$/,
                use: [
                    { loader: 'html-loader' }
                ]
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExractPlugin({
            filename: '[name].css'
        }),
    ],
    devServer: {
        static: path.join(__dirname, 'dist'),
        compress: true,
        port: 3006
    }
}