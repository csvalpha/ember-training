import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Integration | Component | store-form', function(hooks) {
  setupRenderingTest(hooks);
  setupMirage(hooks);

  test('it renders', async function(assert) {
    assert.expect(2);

    await render(hbs`<StoreForm
      @model={{model}}
      @onSave={{onSaveAction}}
      @onCancel={{onCancelAction}}
    />`);

    assert.equal(this.element.querySelector('label:nth-of-type(1)').textContent.trim(), 'Name', 'shows label Name');

    assert.equal(this.element.querySelector('button:nth-of-type(2)').textContent.trim(), 'Save', 'shows button Save');
  });
});
