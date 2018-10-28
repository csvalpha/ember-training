import DS from 'ember-data';
import { underscore } from '@ember/string';

export default DS.JSONAPISerializer.extend({
  keyForAttribute(key) {
    return underscore(key);
  }
});
