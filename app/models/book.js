import Model, { attr, hasMany, belongsTo } from '@ember-data/model';

export default class BookModel extends Model {
  @attr title;
  @attr datePublished;
  @attr isbn;

  @hasMany('store') stores;
  @belongsTo('author') author;
}
