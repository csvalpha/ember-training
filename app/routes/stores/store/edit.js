import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class StoreEditRoute extends Route {
  @action
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
