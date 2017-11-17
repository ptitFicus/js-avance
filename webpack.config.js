const path = require('path');
const webpack = require('webpack');

const config = {
    context: __dirname + '/src',
    entry: ['babel-polyfill', './app.js'],
    output: {
        path: __dirname + '/dist',
        filename: 'app.bundle.js',
        publicPath: '/assets'
    },
    devServer: {
        contentBase: __dirname + '/src'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}

if (process.env.NODE_ENV !== 'production') {
    config.devtool = 'eval-source-map';
}

module.exports = config;
