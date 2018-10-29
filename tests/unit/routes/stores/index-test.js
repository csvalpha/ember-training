import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | stores/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:stores/index');
    assert.ok(route);
  });
});
