import Component from '@ember/component';

export default Component.extend({
  classNames: ['search-input'],

  // public
  value: null,
  placeholder: "Search...",

  // hooks
  onChange(){},

  actions: {
    updateValue(e){
      this.onChange(e.target.value);
    }
  }
});
