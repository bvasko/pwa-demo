const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

const WebpackShellPluginNext = require('webpack-shell-plugin-next');
const path = require('path');
const { InjectManifest, GenerateSW } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      clean: true,
      filename: 'js/[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    plugins: [
      new WebpackShellPluginNext({
        onBuildStart:{
          scripts: ['echo "===> Starting packing with WEBPACK 5"'],
          blocking: true,
          parallel: false
        },
        onBuildEnd:{
          scripts: ['echo "DONE"'],
          blocking: false,
          parallel: true
        }
      }),
      new HtmlWebpackPlugin({
        template: './index.html',
        title: 'Just Another Text Editor'
      }),
      new MiniCssExtractPlugin(),
      new GenerateSW(),
      new WebpackPwaManifest({
        name: 'just another text editor',
        short_name: 'J.A.T.E.',
        description: 'Take notes with js syntax highlighting',
        background_color: '#7eb4e2',
        theme_color: '#7eb4e2',
        start_url: '/',
        publicPath: '/',
        icons: [
          {
            src: path.resolve('./src/images/logo.png'),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join('images', 'icons'),
          },
        ],
      }),
      new InjectManifest({
        swSrc: './src-sw.js'
      })
    ],

    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.m?js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
      ],
    },
  };
};

/**
 *   
 */