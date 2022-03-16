const path = require('path');

module.exports = {
    entry: './src/owntest-sdiff.ts',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'owntest-sdiff.js',
        libraryTarget: 'this'
    },
    target: 'node',
    externalsPresets: {
        node: true
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true
                }
            }
        ]
    },
    resolve: {
        extensions: [ '.ts', '.js' ],
        modules: ['.', 'node_modules'],
        symlinks: false,
        cacheWithContext: false
    },
    mode: 'production',
};