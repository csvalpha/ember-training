import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return this.store.createRecord('store');
  },

  actions: {
    willTransition(transition){
      if(this.controller.model.isNew){
        if (confirm('Are you sure you want to leave?')){
          this.controller.model.deleteRecord();
        } else {
          transition.abort();
        }
      }
    }
  }
});
