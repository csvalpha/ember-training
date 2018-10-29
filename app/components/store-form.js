import Component from '@ember/component';

export default Component.extend({

  // public
  model: null,

  // hooks
  onSave(){},
  onCancel(){},

  actions: {
    cancel(){
      if(this.model.isNew){
        this.model.deleteRecord();
      } else {
        this.model.rollbackAttributes();
      }

      this.onCancel();
    },
    async save(model){
      try {
        await model.save();

        this.onSave(model);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
        alert("Failed to save store");
      }
    }
  }
});
