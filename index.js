'use strict'

module.exports = {
  name: 'redux-thunk',

  options: {
    nodeAssets: {
      'redux-thunk': {
        vendor: ['dist/redux-thunk.js']
      }
    }
  },

  included: function() {
    this._super.included.apply(this, arguments);

    this.import('vendor/redux-thunk/dist/redux-thunk.js', {
      using: [{ transformation: 'amd', as: 'redux-thunk' }]
    });
  }
}
