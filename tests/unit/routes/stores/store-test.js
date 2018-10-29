import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | stores/store', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:stores/store');
    assert.ok(route);
  });
});
