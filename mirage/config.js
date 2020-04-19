export default function() {
  this.urlPrefix = 'https://jsonapiplayground.reyesoft.com';
  this.namespace = '/v2';

  // Or return all Mirage created `stores` with this:
  this.get('stores', ({ stores }) => {
    return stores.all();
  });

  // eslint-disable-next-line ember/no-get
  this.get('/stores/:id')
  this.patch('/stores/:id', 'store')
  this.post('/stores')

  // Above shorthands to
  // this.get('stores');
  //
  // See http://www.ember-cli-mirage.com/docs/v0.4.x/shorthands/#get-shorthands

  // Pass through all calls to https://jsonapiplayground.reyesoft.com/v2
  this.passthrough('');
}
