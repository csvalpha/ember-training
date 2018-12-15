export default function() {
  this.urlPrefix = 'https://jsonapiplayground.reyesoft.com';
  this.namespace = '/v2';

  // Pass through all calls to https://jsonapiplayground.reyesoft.com/v2/stores
  this.passthrough('/stores');

  // Or return all Mirage created `stores` with this:
  // this.get('stores', ({ stores }) => {
  //   return stores.all();
  // });

  // Above shorthands to
  // this.get('stores');
  //
  // See http://www.ember-cli-mirage.com/docs/v0.4.x/shorthands/#get-shorthands

}
