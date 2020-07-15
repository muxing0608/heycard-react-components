module.exports = {
  parserOptions: {
    semi: false,
    ecmaVersion: 6, // ECMAScript版本，7为ES7
    sourceType: 'module', //默认script，如果代码是ECMAScript模块，设置为module
  },
  parser: 'babel-eslint',
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  globals: {
    document: true,
    navigator: true,
    window: true,
    node: true,
  },
  plugins: ['react', 'jsx-a11y', 'import'],
  // 定制自己的规则
  rules: {
    strict: 0,
  },
}
