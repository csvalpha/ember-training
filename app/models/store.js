import Model from '@ember-data/model';
import { attr, hasMany } from '@ember-data/model';

import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations(
  {
    name: {
      description: 'Name',
      validators: [
        validator('presence', true),
        validator('length', {
          min: 3,
          max: 16
        })
      ]
    },
    address: {
      description: 'Address',
      validators: [
        validator('presence', true),
      ]
    }
  }
);

export default Model.extend(Validations, {
  name: attr(),
  address: attr(),

  books: hasMany('book')
});
