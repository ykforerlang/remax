declare module 'webpack/lib/*';
declare module 'babel-loader';
declare module 'enhanced-resolve';
declare module 'memory-fs/lib/join';
declare module '@remax/postcss-px2units';
declare module 'postcss-url';
declare module 'postcss-preset-env';
declare module '@babel/helper-module-imports';
declare module 'scheduler';
declare module 'slash2';
declare module 'esm';
declare module 'sander';
declare module 'webpack-virtual-modules';

declare namespace jest {
  interface Matchers<R, T> {
    toMatchOutput: (output: string) => R;
  }
}
