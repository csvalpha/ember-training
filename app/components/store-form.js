import Component from '@ember/component';
import { assert } from '@ember/debug';

export default Component.extend({

  init(...args) {
    this._super(...args);

    assert('<StoreForm/> onCancel is required', typeof this.onCancel === 'function');
    assert('<StoreForm/> onSave is required', typeof this.onSave === 'function');
  },

  // public
  model: null,

  // required hooks
  onCancel(){},
  onSave(){},

  actions: {
    cancel(){
      this.onCancel();
    },

    async save(model){
      try {
        await model.save();

        this.onSave(model);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
        alert(`Failed to save "store"`);
      }
    }
  }
});
