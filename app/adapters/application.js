import DS from 'ember-data';
import AdapterFetch from 'ember-fetch/mixins/adapter-fetch';

export default DS.JSONAPIAdapter.extend(AdapterFetch, {
  host: 'https://jsonapiplayground.reyesoft.com',
  namespace: 'v2'
});
