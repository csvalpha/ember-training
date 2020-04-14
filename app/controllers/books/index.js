import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class BooksIndexController extends Controller {
  queryParams = ['title'];

  @tracked
  title = '';
}
