module.exports = {
  afterInstall: function () {
    return this.addPackagesToProject([
      {name: 'redux-thunk', target: '2.2.0'}
    ])
  },

  normalizeEntityName: function () {
    // this prevents an error when the entityName is not specified
  }
}
