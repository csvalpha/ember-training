import { assert } from '@ember/debug';
import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class StoreFormComponent extends Component {

  constructor(...args) {
    super(...args);

    assert('<StoreForm/> onCancel is required', typeof this.args.onCancel === 'function');
    assert('<StoreForm/> onSave is required', typeof this.args.onSave === 'function');
  }

  get model() {
    return this.args.model || null;
  }

  @action
  cancel(){
    this.args.onCancel();
  }

  @action
  async save(model){
    try {
      await model.save();

      this.onSave(model);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
      alert(`Failed to save "store"`);
    }
  }
}
