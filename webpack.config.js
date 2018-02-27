const path = require('path');
const webpack = require('webpack');
const WebpackAutoInject = require('webpack-auto-inject-version');

module.exports = {
    context: path.resolve(__dirname, './src/client'),

    entry: {
        arcman: ['babel-polyfill', './index.js']
    },

    resolve: {
        alias: {
            views: path.resolve(__dirname, 'src', 'client', 'views'),
            reducers: path.resolve(__dirname, 'src', 'client', 'reducers'),
            common: path.resolve(__dirname, 'src', 'client', 'common'),
            components: path.resolve(__dirname, 'src', 'client', 'components')
        }
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist/public/assets'),
        publicPath: '/assets',
    },

    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader'
                }]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },

    plugins: [
        new WebpackAutoInject({
            components: {
                AutoIncreaseVersion: false
            }
        })
    ]
};
