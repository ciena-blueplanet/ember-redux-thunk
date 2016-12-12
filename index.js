'use strict'

const mergeTrees = require('broccoli-merge-trees')
const path = require('path')

module.exports = {
  name: 'redux-thunk',

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
