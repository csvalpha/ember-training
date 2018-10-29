import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return this.store.createRecord('store');
  },

  actions: {
    willTransition(){
      if(this.controller.model.isNew){
        this.controller.model.destroyRecord();
      }
    }
  }
});
