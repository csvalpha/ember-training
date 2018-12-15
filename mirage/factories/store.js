import { Factory } from 'ember-cli-mirage';

export default Factory.extend({

  name(i) {
    return `Store #${i}`;
  },

  address: 'Cobblestone Rd. 218',
});
