import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from '@rspack/cli';
import { rspack } from '@rspack/core';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import RefreshPlugin from '@rspack/plugin-react-refresh';

const __dirname = dirname(fileURLToPath(import.meta.url));
// eslint-disable-next-line no-undef
const isDev = process.env.NODE_ENV === 'development';

// Target browsers, see: https://github.com/browserslist/browserslist
const targets = ['chrome >= 87', 'edge >= 88', 'firefox >= 78', 'safari >= 14'];

export default defineConfig({
  context: __dirname,
  entry: {
    main: './src/main.tsx',
  },
  resolve: {
    modules: [resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['...', '.ts', '.tsx', '.jsx'],
  },
  module: {
    parser: {
      // asset 模块的解析器选项
      asset: {
        dataUrlCondition: {
          // 模块小于100kb 将被base64 编码
          maxSize: 100 * 1024,
        },
      },
      // js 模块的解析器选项
      javascript: {},
      'css/auto': {
        namedExports: false,
      },
      'css/module': {
        namedExports: false,
      },
    },
    rules: [
      {
        test: /\.(svg$|png$)/,
        type: 'asset',
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'less-loader',
          },
        ],
        type: 'css/auto',
      },
      {
        test: /\.(jsx?|tsx?)$/,
        use: [
          {
            loader: 'builtin:swc-loader',
            options: {
              jsc: {
                parser: {
                  syntax: 'typescript',
                  tsx: true,
                },
                transform: {
                  react: {
                    runtime: 'automatic',
                    development: isDev,
                    refresh: isDev,
                  },
                },
              },
              env: { targets },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new rspack.HtmlRspackPlugin({
      template: './index.html',
    }),
    isDev ? new RefreshPlugin() : null,
  ].filter(Boolean),
  optimization: {
    minimizer: [
      new rspack.SwcJsMinimizerRspackPlugin(),
      isDev &&
        new rspack.LightningCssMinimizerRspackPlugin({
          minimizerOptions: { targets },
        }),
    ],
  },
  // resolve: {
  //   modules: [resolve(__dirname, 'src')],
  // },
  experiments: {
    css: true,
  },
  devServer: {
    historyApiFallback: true,
  },
  output: {
    publicPath: '/',
  },
});
