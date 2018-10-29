import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | stores/store/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:stores/store/index');
    assert.ok(route);
  });
});
