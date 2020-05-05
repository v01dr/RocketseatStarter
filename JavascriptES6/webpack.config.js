module.exports = [{
    entry: './module02/class/src/main.js',
    output: {
        path: __dirname + '/module02/class/public',
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: __dirname + '/module02/class/public'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', 
                }
            }
        ],
    },
}];