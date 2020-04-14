import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { isEmpty } from '@ember/utils';

export default class BooksIndexRoute extends Route {
  @service store;

  queryParams = {
    title: { refreshModel: true }
  };

  async model(params){
    const filter = {};
    if(!isEmpty(params.title)){
      filter.title = params.title
    }
    return this.store.query('book', {
      filter: filter
    });
  }
}
