const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename:'build.bundle.js',
        path: path.resolve(__dirname, 'build'),
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.(js)$/,
            use: 'babel-loader'
          }
        ],
      },
}