const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, './src/index.html'),
    filename: 'index.html'
})

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output:{
    // 这里的name 是告诉我们入口进去的文件上是什么名字，打包出来也同样是什么名字
      path:path.resolve(__dirname, 'dist'),
      publicPath: '/xuni',
      filename:'[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['es2015', 'react']
                  }
                }
            },
            { test: /\.css$/, use: ["style-loader", "css-loader"]}
        ]
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json'],
      alias: {
        '@': path.join(__dirname, './src')  // 这样，@表示项目根目录中src的这一层路径
      }
    },
    plugins: [
        htmlPlugin
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        host: '127.0.0.1',
        port: 8888,
        hot: true,
        open: 'chrome'

    }
}