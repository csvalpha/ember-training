import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
  host = 'https://jsonapiplayground.reyesoft.com';
  namespace = 'v2';
}
