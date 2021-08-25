const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')([
  '@devsoutinho/ui',
  '@devsoutinho/universalui',
]);

module.exports = withPlugins([withTM], {
  trailingSlash: true,
});
