const path = require('path');

const resolve = (pathname) => path.resolve(__dirname, pathname);
const nodeModule = (name) => require.resolve(name);

module.exports = {
  resolve: {
    modules: [resolve('../node_modules')],
    extensions: ['.web.js', '.js', '.json', '.jsx'],
    alias: {
      '@': resolve('../src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules(?!\/@storybook\/addon-info)/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        include: resolve('../src'),
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.(png|svg)$/,
        loader: nodeModule('url-loader'),
      },
      {
        test: /\.t(s|sx)?$/,
        exclude: /node_modules/,
        loader: ['ts-loader', 'react-docgen-typescript-loader'],
      },
    ],
  },
};
