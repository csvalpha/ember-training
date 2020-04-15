import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class AuthorShowRoute extends Route {
  @service store;

  async model(params){
    return this.store.findRecord('author', params.author_id);
  }
}
