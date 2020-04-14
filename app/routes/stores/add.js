import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class StoreAddRoute extends Route {
  @service store;

  async model(){
    return this.store.createRecord('store');
  }

  @action
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
