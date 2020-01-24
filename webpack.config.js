const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

const optimization = () =>{
    const config = {
        splitChunks: {
            chunks: 'all'
        }
    }
    if(isProd){
        config.minimizer = [
            new OptimizeCssAssetWebpackPlugin(),
            new TerserWebpackPlugin()
        ]
    }
    return config
}

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`

const cssLoaders = (extra) =>{
    const loader = [
        {
            loader: MiniCssExtractPlugin.loader,
            options: {
                hmr: isDev,
                reloadAll: true
            },
        }, 
        'css-loader'
    ]

    if(extra){
        loader.push(extra)
    }

    return loader;
} 

const babelOptions = preset => {
    const opts = {
        presets: [
            '@babel/preset-env'
        ],
        plugins: [
            '@babel/plugin-proposal-class-properties'
        ]
    }

    if(preset){
        opts.presets.push(preset)
    }

    return opts
}

const pluginsBase = () =>{
    const base = [
        new HTMLWebpackPlugin({
            template: './index.html',
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, 'src/favicon.ico'),
                to: path.resolve(__dirname,'dist')
            }
        ]),
        new MiniCssExtractPlugin({
            filename: filename('css')
        })
    ]

    return base
}

module.exports = {
    context: path.resolve(__dirname,'src'),
    mode: 'production',
    entry: {
        main: ['@babel/polyfill','./index.jsx']
    },
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname,'dist')
    },
    resolve:{
        alias: {
            '@styles': path.resolve(__dirname,'src/styles')
        }
    },
    optimization: optimization(),
    devServer:{
        port: 4200,
        hot: isDev
    },
    devtool: isDev ? 'source-map' : '',
    plugins: pluginsBase(),
    module:{
        rules:[
            {
                test: /\.css$/,
                use: cssLoaders()
            },
            {
                test: /\.less$/,
                use: cssLoaders('less-loader')        
            },
            {
                test: /\.s[ac]ss$/,
                use: cssLoaders('sass-loader')
            },
            {
                test: /\.(ttf|woff|woff2)$/,
                use: ['file-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_module/,
                loader: {
                    loader: 'babel-loader',
                    options: babelOptions()
                }
            },
            {
                test: /\.ts$/,
                exclude: /node_module/,
                loader: {
                    loader: 'babel-loader',
                    options: babelOptions('@babel/preset-typescript')
                }
            },
            {
                test: /\.jsx$/,
                exclude: /node_module/,
                loader: {
                    loader: 'babel-loader',
                    options: babelOptions('@babel/preset-react')
                }
            }
        ]
    }
};