var App = Em.Application.create();

Person = Ember.Object.extend({
    workout: function() {
        alert(this.get('name') + " is working out now!");
    },

});

var person = Person.create({
    name: "Nola Stowe",
    workoutTime: 5
});

/* trying out calling methods on object */

//person.workout();


/* trying out observers  */
person.addObserver('workoutTime', function(){
    alert("your workout time has changed to: " + this.get('workoutTime'));
});

/*  trying out setting the workoutTime */
//person.set('workoutTime', 6);
//person.set('workoutTime', 8);

App.MyView = Ember.View.extend({
    'templateName' : 'workouts',
    'person' : person
});



$(document).ready(function(){
  workoutView = App.MyView.create();
  workoutView.append();
  $('#change_button_up').on('click', function(){
      workoutTime = person.get('workoutTime');
      person.set('workoutTime', workoutTime + 1);
  });
    $('#change_button_down').on('click', function(){
        workoutTime = person.get('workoutTime');
        person.set('workoutTime', workoutTime - 1);
    });
});

