const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'dist'), //(el path de salida carpeta dist-distribution)
        filename: 'main.js', //(nombre del archivo resultante)
    },
    mode:'development',
    resolve:{
        extensions:['.js','.jsx'], //(aquí colocaremos todas las extensiones que vamos utilizando en nuestro proyecto)
    },
    module :{
        rules: [
            {
                test: /\.(js|jsx)$/, //(Test declara que extensión de archivos aplicara el loader)
                exclude:/node_modules/, //(Exclude permite omitir archivos o carpetas especificas)
                use:{loader:'babel-loader',} //(Use es un arreglo u objeto donde dices que loader aplicaras)
            },
            {
                test:/\.html$/,
                use:[{loader:'html-loader'}]
            },
            {
                test:/\.s[ac]ss$/,
                use:['style-loader','css-loader','sass-loader']
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html',
            filename:'./index.html'
        }),
        new MiniCssExtractPlugin({
            filename:'[name].css'
        }),
    ],
    devServer: { // configuración para el server
        static: path.join(__dirname, 'dist'), // ruta de nuestro dist
        compress: true, // si deseamos comprimir
        port: 3006, // el puerto que deseamos utilizar
        open: true, // para abrir nuestro navegar automáticamente 
    }
}