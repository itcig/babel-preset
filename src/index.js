'use strict';

module.exports = (api, options) => {
  api.assertVersion(7);

  return {
    presets: [['@itcig/babel-preset-optimize', { ...options }]],
  };
};
