const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
    entry: {
        app: path.resolve(__dirname, './src/App.js')
    },
    mode: "development",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
<<<<<<< Updated upstream
        publicPath: 'http://192.168.100.30:8000/',
=======
        publicPath: 'http://localhost:5500/',      // cambia con el modem
>>>>>>> Stashed changes
        chunkFilename: 'js/[id].[chunkhash].js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true,           //esto permite navegar dentro de un SPA cuando usas router
        contentBase: path.resolve(__dirname, 'dist'),
        open: true,
        port: 5500,
        hot: true, 
<<<<<<< Updated upstream
        host: "192.168.100.30" 
=======
        // host: "192.168.0.3"     //cambia con el modem 
>>>>>>> Stashed changes
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.(s*)css$/,
                use: [
                    {
                        loader: 'style-loader' 
                    },
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
                use : {
                    loader: 'file-loader',
                    options: {
                        outputPath: 'assets/images/'
                    }
                }
            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html'),
            filename: './index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
    ]
}
