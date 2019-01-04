import { module } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, fillIn } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import test from 'ember-sinon-qunit/test-support/test';

import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Integration | Component | store-form', function(hooks) {
  setupRenderingTest(hooks);
  setupMirage(hooks);

  test('it renders', async function(assert) {
    assert.expect(2);

    this.set('onSaveAction', () => {});
    this.set('onCancelAction', () => {});

    await render(hbs`<StoreForm
      @model={{model}}
      @onSave={{onSaveAction}}
      @onCancel={{onCancelAction}}
    />`);

    assert.equal(this.element.querySelector('label:nth-of-type(1)').textContent.trim(), 'Name', 'shows label Name');

    assert.equal(this.element.querySelector('button:nth-of-type(2)').textContent.trim(), 'Save', 'shows button Save');
  });

  test('it stores the model on save', async function(assert) {
    assert.expect(3);

    const store = this.owner.lookup('service:store');
    const model = await store.createRecord('store', {
      name: 'TestBookStore',
      address: 'SomeStreet 10'
    }).save();

    this.set('onSaveAction', this.spy());
    this.set('onCancelAction', this.spy());
    this.set('model', model);

    await render(hbs`<StoreForm
      @model={{model}}
      @onSave={{onSaveAction}}
      @onCancel={{onCancelAction}}
    />`);
    await fillIn('div[data-test-input-name] input', 'TestBookStore2');
    await click('button[data-test-button-save]');

    const savedModel = await store.findRecord('store', model.id);

    assert.equal(savedModel.name, 'TestBookStore2');
    assert.ok(this.onSaveAction.calledOnce);
    assert.ok(this.onCancelAction.notCalled);
  });
});
