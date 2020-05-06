module.exports = [
    {
        entry: ['@babel/polyfill', './module04/class/src/main.js'],
        output: {
            path: __dirname + '/module04/class/public',
            filename: 'bundle.js',
        },
        devServer: {
            contentBase: __dirname + '/module04/class/public'
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
/**
 *   
     {
        entry: ['@babel/polyfill', './module03/challenge/src/main.js'],
        output: {
            path: __dirname + '/module03/challenge/public',
            filename: 'bundle.js',
        },
        devServer: {
            contentBase: __dirname + '/module03/challenge/public'
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
    }  
    ,
    {
        entry: ['@babel/polyfill', './module03/class/src/main.js'],
        output: {
            path: __dirname + '/module03/class/public',
            filename: 'bundle.js',
        },
        devServer: {
            contentBase: __dirname + '/module03/class/public'
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
    ,       
    {
        entry: './module02/challenge/src/main.js',
        output: {
            path: __dirname + '/module02/challenge/public',
            filename: 'bundle.js',
        },
        devServer: {
            contentBase: __dirname + '/module02/challenge/public'
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
    },       
    {
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
    }
];
 */