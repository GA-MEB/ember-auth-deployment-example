import Model from 'ember-data/model';

export default Model.extend({
  name: DS.attr('string'),
  contact: DS.attr('string'),
  goal: DS.attr('string')
});
