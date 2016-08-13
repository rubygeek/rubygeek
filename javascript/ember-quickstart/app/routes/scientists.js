import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return ["Bob Smith", "Annie May", "Jorge Cruz"];
  }
});
