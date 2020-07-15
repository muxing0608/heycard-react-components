module.exports = {
  singleQuote: true,
  // semi: false,
  trailingComma: 'es5',
  overrides: [
    {
      // 单元测试时，import 使用单引号会引起组件测试报错，所以 wxss 里面强制使用双引号
      files: '*.wxss',
      options: {
        parser: 'css',
        singleQuote: false,
      },
    },
  ],
}
