const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['@devsoutinho/universalui']);

module.exports = withPlugins([withTM], {
  trailingSlash: true,
});
