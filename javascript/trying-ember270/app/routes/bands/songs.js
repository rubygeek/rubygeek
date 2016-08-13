import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.modelfor('bands.band');
  }
});
