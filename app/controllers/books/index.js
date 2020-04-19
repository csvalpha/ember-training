import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object'

export default class BooksIndexController extends Controller {
  queryParams = ['title'];

  @tracked
  title = '';

  @action
  updateTitle(value) {
    this.title = value;
  }
}
