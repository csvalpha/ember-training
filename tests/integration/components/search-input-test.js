import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, fillIn } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | search-input', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<SearchInput />`);

    assert.equal(this.element.textContent.trim(), '');

    this.set('title', 'Some weird title');

    await render(hbs`<SearchInput @value={{title}} @onChange={{action (mut title)}} />`);
    await fillIn('input', 'You are not a wizard!');

    assert.equal(this.get('title'), 'You are not a wizard!');
  });
});
