import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('resources');

  this.route('authors', function() {
    this.route('author', { path: ':author_id' });
  });

  this.route('books', function() {
    this.route('book', { path: ':book_id' });
  });

  this.route('stores', function() {
    this.route('add');
    this.route('store', { path: '/:store_id' }, function() {
      this.route('edit');
    });
  });
});
