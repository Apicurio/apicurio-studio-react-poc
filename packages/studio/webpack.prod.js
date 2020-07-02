const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'node_modules/patternfly'),
          path.resolve(__dirname, 'node_modules/@patternfly/patternfly'),
          path.resolve(__dirname, 'node_modules/@patternfly/react-core/dist/styles/base.css'),
          path.resolve(__dirname, 'node_modules/@patternfly/react-core/dist/esm/@patternfly/patternfly'),
          path.resolve(__dirname, 'node_modules/@patternfly/react-styles/css'),
          path.resolve(__dirname, 'node_modules/rh-uxd'),
          path.resolve(__dirname, 'node_modules/@rh-uxd/rh-uxd'),
          path.resolve(__dirname, 'node_modules/@rh-uxd/integration-react/node_modules/@patternfly/patternfly'),
          path.resolve(__dirname, 'node_modules/@rh-uxd/integration-react/node_modules/@patternfly/react-core/dist/styles/base.css'),
          path.resolve(__dirname, 'node_modules/@rh-uxd/integration-react/node_modules/@patternfly/react-styles/css'),
          path.resolve(__dirname, 'node_modules/@rh-uxd/integration-react/node_modules/@patternfly/react-core/dist/esm/@patternfly/patternfly'),
          path.resolve(__dirname, 'node_modules/@rh-uxd/integration-react/dist/esm/@patternfly/patternfly'),
          path.resolve(__dirname, 'node_modules/monaco-editor),
          path.resolve(__dirname, 'node_modules/monaco-editor/esm/vs/base/browser/ui/**/*.css'),
          path.resolve(__dirname, 'node_modules/monaco-editor/esm/vs/base/browser/ui/**/**/*.css'),
          path.resolve(__dirname, 'node_modules/monaco-editor/esm/vs/editor/browser/**/*.css'),
          path.resolve(__dirname, 'node_modules/monaco-editor/esm/vs/editor/browser/**/**/*.css'),
        ],
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  }
});
