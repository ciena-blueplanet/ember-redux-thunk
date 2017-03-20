'use strict'

const mergeTrees = require('broccoli-merge-trees')
const path = require('path')

module.exports = {
  name: 'redux-thunk',
  options: {
    nodeAssets: {
      'redux-thunk': {
        vendor: ['dist/redux-thunk.js']
      }
    }
  },
  included() {
    this._super.included.apply(this, arguments);
    this.import('vendor/redux-thunk/dist/redux-thunk.js', {
      using: [{ transformation: 'amd', as: 'redux-thunk' }]
    });
  },
}
