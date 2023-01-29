const path = require('path');
    module.exports = {
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname,'dist'), //(el path de salida carpeta dist-distribution)
            filename: 'main.js', //(nombre del archivo resultante)
        },
        
        resolve:{
            extensions:['.js','.jsx'] //(aquí colocaremos todas las extensiones que vamos utilizando en nuestro proyecto)
        },
        module :{
            rules: [
                {
                test: /\.(m?js|jsx)$/, //(Test declara que extensión de archivos aplicara el loader)
                exclude: /node_modules/, //(Exclude permite omitir archivos o carpetas especificas)
                use: {loader: "babel-loader"}, //(Use es un arreglo u objeto donde dices que loader aplicaras)
                }
            ]
        },
        devServer: { // configuración para el server
    		static: path.join(__dirname, 'dist'), // ruta de nuestro dist
            compress: true, // si deseamos comprimir
    		historyApiFallback: true, // si queremos tener un historial
    		port: 3006, // el puerto que deseamos utilizar
    		open: true, // para abrir nuestro navegar automáticamente 
        }
    }