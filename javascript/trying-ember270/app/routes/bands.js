import Ember from 'ember';

var Band = Ember.Object.extend({
  name: ''
});

export default Ember.Route.extend({
  model: function(){
    var ledZeppelin = Band.create({name: 'Led Zeppelin'});
    var pearlJam = Band.create({name: 'Pearl Jam'});
    var fooFighters  = Band.create({name: 'Foo Fighters'});

    return [ledZeppelin, pearlJam, fooFighters];
  }
});
