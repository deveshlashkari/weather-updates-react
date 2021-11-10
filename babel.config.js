/**
babel.config.js with useful plugins. 
*/
module.exports = function (api) {
  api.cache(true);
  api.assertVersion("^7.4.5");

  const presets = [["@babel/preset-env"], ["@babel/preset-react"]];
  const plugins = [["@babel/plugin-syntax-jsx"]];

  return {
    presets,
    plugins,
  };
};
