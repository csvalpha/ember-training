import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class StoreShowRoute extends Route {
  @service store;

  async model(params){
    return this.store.findRecord('store', params.store_id);
  }
}
