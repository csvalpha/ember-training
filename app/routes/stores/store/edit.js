import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    willTransition(transition){
      if(this.controller.model.hasDirtyAttributes){
        if (confirm('Are you sure you want to leave?')){
          this.controller.model.rollbackAttributes();
        } else {
          transition.abort();
        }
      }
    }
  }
});
