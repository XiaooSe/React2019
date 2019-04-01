const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, './src/index.html'),
    filename: 'index.html'
})

module.exports = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js|.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            { test: /\.css$/, loader: "style-loader!css-loader"}
        ]
    },
    plugins: [
        htmlPlugin
    ],
    devServer: {
        host: '127.0.0.1',
        port: 8888,
        hot: true,
        open: 'chrome'

    }
}