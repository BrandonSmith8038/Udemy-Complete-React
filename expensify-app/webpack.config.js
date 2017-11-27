const path = require('path');

module.exports = env => {
  console.log('env', env);

  const isProduction = env === 'production';

  return {
    entry: [
      'webpack-dev-server/client?https://0.0.0.0:8080',
      'webpack/hot/only-dev-server',
      './src/app.js'
    ],
    output: { path: path.join(__dirname, 'public'), filename: 'bundle.js' },
    module: {
      rules: [
        { loader: 'babel-loader', test: /\.js$/, exclude: /node_modules/ },
        { use: ['style-loader', 'css-loader', 'sass-loader'], test: /\.s?css$/ }
      ]
    },
    devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
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
