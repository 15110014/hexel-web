const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VENDOR_LIBS = [
    'axios',
    'bootstrap',
    'jquery',
    'react',
    'react-dom',
    'react-redux',
    'react-router-dom',
    'redux',
    'redux-thunk',
]
module.exports = {
    entry: {
        bundle : './src/index.js',
        vendor : VENDOR_LIBS
    },
    optimization: {
        splitChunks: {
          cacheGroups: {
            vendor: {
              chunks: "initial",
              test: "vendor",
              name: "vendor",
              enforce: true
            }
          }
        },
        runtimeChunk: {
            name: "manifest",
        },
    },
    output : {
        path : path.join(__dirname, 'dist'),
        filename : '[name].[chunkhash].js'
    },
    module : {
        rules : [
            {
                use : 'babel-loader',
                test : /\.js$/,
                exclude : '/node_modules'
            },
            {
                use : [
                    'style-loader',
                    'css-loader'
                ],
                test : /\.css$/
            },
            {
                loader : 'file-loader',
                test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.svg$|\.woff$|\.woff2|\.eot$|\.ttf$|\.wav$|\.mp3$|\.ico$/
            }
        ]
    },
    plugins : [
        new webpack.ProvidePlugin({
            '$' : 'jquery',
            'jQuery' : 'jquery',
            'window.$' : 'jquery',
            'window.jQuery' : 'jquery',
            'Popper': 'popper.js'
        }),
        new HtmlWebpackPlugin({
            template : 'src/index.html'
        })
    ],
    mode: 'development'
}