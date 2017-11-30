const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = env => {
  console.log('env', env);

  const isProduction = env === 'production';
  const CSSExtract = new ExtractTextPlugin('styles.css');

  return {
    entry: [
      // 'webpack-dev-server/client?https://0.0.0.0:8080',
      // 'webpack/hot/only-dev-server',
      './src/app.js'
    ],
    output: { path: path.join(__dirname, 'public'), filename: 'bundle.js' },
    module: {
      rules: [
        { loader: 'babel-loader', test: /\.js$/, exclude: /node_modules/ },
        {
          test: /\.s?css$/,
          use: CSSExtract.extract({
            use: [
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          })
        }
      ]
    },
    plugins: [CSSExtract],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      stats: 'errors-only',
      overlay: { errors: true, warnings: true }
    }
  };
  /* disableHostCheck: true,
        hot: true,
        host: process.env.IP,
        //https: true,
        port: process.env.PORT,
        "public": "udemy-complete-react-cowboy8038.c9users.io" //no trailing slash */
};
