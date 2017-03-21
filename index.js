'use strict'

const mergeTrees = require('broccoli-merge-trees')
const path = require('path')

module.exports = {
  name: 'redux-thunk',

  /**
   * Workaround needed for 2.12+
   * see: https://github.com/ember-redux/ember-redux/issues/105#issuecomment-288001558
   * @returns {boolean} Set to true to force JS compile
   * @private
   */
  _shouldCompileJS: function () {
    return true
  },

  treeForAddon (tree) {
    const reduxThunkPath = path.dirname(require.resolve('redux-thunk/src/index.js'))
    let reduxThunkTree = this.treeGenerator(reduxThunkPath)

    if (!tree) {
      return this._super.treeForAddon.call(this, reduxThunkTree)
    }

    const trees = mergeTrees([reduxThunkTree, tree], {
      overwrite: true
    })

    return this._super.treeForAddon.call(this, trees)
  }
}
