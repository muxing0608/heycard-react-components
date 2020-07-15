// const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { getStyleLoaders } = require('./util')
const resolve = (pathname) => path.resolve(__dirname, pathname)
// const nodeModule = (name) => require.resolve(name)

// const rootDir = path.resolve(__dirname, '../')
// const componentDir = 'src/components'
// const componentsNames = fs.readdirSync(path.resolve(componentDir))
// const componentsMap = componentsNames.reduce((prev, name) => {
//   prev[name] = path.join(rootDir, `/${componentDir}/${name}/index.js`)

//   return prev
// }, {})

module.exports = {
  mode: 'production',
  // entry: {
  //   index: path.resolve(__dirname, '../src/components/index.js'),
  //   ...componentsMap,
  // },
  // entry: componentsMap,
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': resolve('src'),
      '@comp': resolve('src/components'),
      '@utils': resolve('src/utils'),
    },
  },
  entry: {
    index: resolve('../src/components/index.js'),
    vendor: [resolve('../src/utils/index.js')],
  },
  output: {
    filename: '[name].js',
    path: resolve('../lib'),
    // libraryTarget: 'umd',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: getStyleLoaders({
          importLoaders: 1,
        }),
      },
      {
        test: /\.less$/,
        exclude: /\.module\.less$/,
        use: getStyleLoaders(
          {
            modules: true,
            importLoaders: 2,
          },
          'less-loader'
        ),
        sideEffects: true,
      },
      {
        test: /\.module\.less$/,
        use: getStyleLoaders(
          {
            importLoaders: 2,
            modules: true,
          },
          'less-loader'
        ),
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },

      {
        test: /\.(png|jpg|gif|svg|woff|woff2|eot|otf|ttf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
      // {
      //   test: /\.j(s|sx)?$/,
      //   exclude: /node_modules/,
      //   loader: 'babel-loader',
      // },
      // {
      //   test: /\.t(s|sx)?$/,
      //   exclude: /node_modules/,
      //   loader: ['awesome-typescript-loader', 'eslint-loader']
      // },
      {
        test: /\.t(s|sx)?$/,
        exclude: /node_modules/,
        loader: ['awesome-typescript-loader', 'eslint-loader'],
      },
      {
        test: /\.j(s|sx)?$/,
        loader: ['eslint-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.j(s|sx)$/,
        exclude: /node_modules|\.stories.js?/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      // filename: '[name]/style/index.css',
      filename: '[name].css',
    }),
    new CleanWebpackPlugin(),
    // new HtmlWebpackPlugin({
    //   title: 'lib发布',
    //   template: path.join(__dirname, '../public/index.html'),
    // }),
  ],
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
    },
  },
}
