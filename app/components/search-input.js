import Component from '@ember/component';
import { task, timeout } from 'ember-concurrency';

export default Component.extend({
  classNames: ['search-input'],

  // public
  value: null,
  placeholder: "Search...",

  // hooks
  onChange(){},

  updateValue: task(function * (e){
    yield timeout(250);

    this.onChange(e.target.value);
  }).restartable(),
});
