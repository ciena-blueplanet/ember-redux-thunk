import {expect} from 'chai'
import {describe, it} from 'mocha'

import ReduxThunk from 'redux-thunk'

describe('redux-thunk', function () {
  it('exports function', function () {
    expect(typeof ReduxThunk).to.equal('function')
  })
})
