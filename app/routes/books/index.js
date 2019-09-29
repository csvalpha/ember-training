import Route from '@ember/routing/route';
import { isEmpty } from '@ember/utils';

export default Route.extend({
  queryParams: {
    title: { refreshModel: true }
  },

  model(params){
    const filter = {};
    if(!isEmpty(params.title)){
      filter.title = params.title
    }
    return this.store.query('book', {
      filter: filter
    });
  }
});
