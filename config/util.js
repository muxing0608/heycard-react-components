const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const postcssPxToViewport = require('postcss-px-to-viewport-opt')
const postcssViewportUnits = require('postcss-viewport-units')
const cssnano = require('cssnano')

const nodeModule = (name) => require.resolve(name)

const getStyleLoaders = (cssOptions, preProcessor) => {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: { publicPath: '../../' },
    },
    {
      loader: nodeModule('css-loader'),
      options: cssOptions,
    },
    {
      loader: nodeModule('postcss-loader'),
      options: {
        ident: 'postcss',
        plugins: () => [
          require('postcss-flexbugs-fixes'),
          require('postcss-preset-env')({
            autoprefixer: {
              flexbox: 'no-2009',
            },
            stage: 3,
          }),
          postcssPxToViewport({
            viewportWidth: 750, // 设计稿宽度
            viewportHeight: 1334, // 设计稿高度，可以不指定
            unitPrecision: 4, // px to vw无法整除时，保留几位小数
            viewportUnit: 'vw', // 转换成vw单位
            selectorBlackList: ['.ignore', '.hairlines'], // 不转换的类名
            minPixelValue: 1, // 小于1px不转换
            mediaQuery: false, // 允许媒体查询中转换
            exclude: /(\/|\\)(node_modules)(\/|\\)/, // 排除node_modules文件中第三方css文件
          }),
          postcssViewportUnits({}),
          cssnano({
            'cssnano-preset-advanced': {
              zindex: false,
              autoprefixer: false,
            },
          }),
        ],
      },
    },
  ]

  if (preProcessor) {
    // 添加额外的loader
    loaders.push(nodeModule(preProcessor))
  }

  return loaders
}

module.exports = {
  getStyleLoaders,
}
