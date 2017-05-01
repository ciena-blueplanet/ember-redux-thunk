import { test, module } from 'qunit';
import ReduxThunk from 'redux-thunk'

module('redux-thunk');

test('exports function', function(assert) {
  assert.equal(typeof ReduxThunk, 'function');
});
