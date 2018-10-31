import Component from '@ember/component';

export default Component.extend({

  // public
  model: null,

  // hooks
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
