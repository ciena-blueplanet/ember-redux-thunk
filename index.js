'use strict'

const VersionChecker = require('ember-cli-version-checker');
const amdShim = require('./lib/amd-shim');

const nodeAssets = {
  'redux-thunk': {
    vendor: ['dist/redux-thunk.js']
  }
};

const nodeAssetsPre210Support = {
  'redux-thunk': {
    vendor: {
      include: ['dist/redux-thunk.js'],
      processTree(input) {
        const nameMapping = {
          'dist/redux-thunk': 'redux-thunk'
        };
        return amdShim(input, nameMapping);
      }
    }
  }
};

module.exports = {
  name: 'redux-thunk',

  options: { nodeAssets },

  included(app) {
    const checker = new VersionChecker(this);
    const dep = checker.for('ember-cli', 'npm');

    // In 2.10.0, ember-cli introduced anonymous AMD support
    // for all the poor souls stuck in earlier versions, we
    // polyfill that functionality manually
    if (dep.isAbove('2.10.0')) {
      this._super.included.apply(this, arguments);
      this.import('vendor/redux-thunk/dist/redux-thunk.js', {
        using: [{ transformation: 'amd', as: 'redux-thunk' }]
      });
    } else {
      while (typeof app.import !== 'function' && app.app) {
        app = app.app;
      }
      this.app = app
      app.options.nodeAssets = nodeAssetsPre210Support;
      app.import('vendor/redux-thunk/dist/redux-thunk.js');
    }
  }
}
