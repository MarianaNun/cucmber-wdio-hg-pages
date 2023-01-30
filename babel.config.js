module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: '14',
        },
      },
    ],
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./test/'],
        alias: {
          test: './test',
          '@pages': './test/pages',
          '@components': './test/components',
          '@testData': './test/testData',
          '@api': './test/api',
          '@utils': './test/utils',
        },
      },
    ],
  ],
};
