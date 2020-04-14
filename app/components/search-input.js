import Component from '@glimmer/component';
import { task, timeout } from 'ember-concurrency';

export default class SearchInputComponent extends Component {
  classNames = ['search-input'];

  // public
  get value() {
    return this.args.value || null;
  }

  get placeholder() {
    return this.args.placeholder || "Search...";
  }

  // Debounce changes to the search value before propagating them
  @(task(function * (e){
    yield timeout(250);

    this.args.onChange(e.target.value);
  }).restartable()) updateValue;
}
