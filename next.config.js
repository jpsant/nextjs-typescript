const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass');
const withImages = require('next-images');
const { nextI18NextRewrites } = require('next-i18next/rewrites');
const localeSubpaths = {};

module.exports = withPlugins(
  [
    [withImages],
    [
      withSass({
        webpack: function (config) {
          config.module.rules.push({
            test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif|graphql|gql)$/,
            exclude: /node_modules/,
            loader: 'graphql-tag/loader',
          });
          return config;
        },
        webpackDevMiddleware: (config) => {
          return config;
        },
      }),
    ],
  ],
  {
    rewrites: async () => nextI18NextRewrites(localeSubpaths),
    publicRuntimeConfig: {
      localeSubpaths,
    },
  },
);
