
var CountdownTimer = {
  endTime:null,
  timerId:null,
  minutes:0,
  maxWidth:0,
  maxTime:(25 * 60 * 1000),
  isBreak:false,

  normalColors:["#e47a80", "#eb363b"],
  breakColors: ["#97c751", "#759f58"],

  start: function(minutes, isBreak) {
    if (this.maxWidth == 0)
      this.maxWidth = $('#timer-bar').width();

    if (this.timerId)
      this.cancel();

    this.minutes = minutes;
    this.isBreak = isBreak;

    this.setupTimer();
    this.flashBar();
  },

  setupTimer:function() {
    $('#timer-finished').fadeOut();

    var date     = new Date();
    this.endTime = date.getTime() + (this.minutes * 60 * 1000);
    this.timerId = setInterval(this.tick, 1000);

    this.setBarToTime(this.minutes * 60 * 1000);
    $('title').text("Started " + (this.isBreak ? this.minutes + " minute break." : "pomodoro."));
  },

  flashBar:function() {
    var lightColor, darkColor;
    if (this.isBreak)
    {
      lightColor = this.breakColors[0];
      darkColor  = this.breakColors[1];
    } else {
      lightColor = this.normalColors[0];
      darkColor  = this.normalColors[1];
    }
    $('#timer-bar').animate({backgroundColor:lightColor}).animate({backgroundColor:darkColor});
  },

  setBarToTime:function(time) {
    $('#timer-bar').animate({width:(time/this.maxTime) * this.maxWidth});
  },

  cancel:function() {
    clearInterval(this.timerId);
  },

  tick:function() {
    // NOTE: Called externally, so must use "CountdownTimer" instead of "this".
    CountdownTimer.tock();
  },

  tock:function() {
    var date = new Date();
    var remainingTime = this.endTime - date.getTime();
    if (remainingTime <= 0) {
      this.cancel();
      this.setBarToTime(0);
      this.showCompletedInLog();
      this.showCompletedMessage();
    } else {
      this.setBarToTime(remainingTime);
    }
  },

  showCompletedInLog:function() {
    var logClass = "timer-log-" + this.minutes + (this.isBreak ? "-break" : "");
    $('#timer-log').append('<div class="' + logClass + '"></div>');
  },

  showCompletedMessage:function() {
    if ($('#timer-finished').length == 0)
      $('#timer').append('<div id="timer-finished"></div>');
    var message = "Finished " + (this.isBreak ? this.minutes + " minute break." : "one pomodoro.");
    $('title').text(message);
    $('#timer-finished').text(message).fadeIn(1000);
  },
};

var taskStates = ['task-empty', 'task-x', 'task-apostrophe', 'task-dash'];

jQuery.fn.extend({

  resetTaskState:function() {
    return this.each(function() {
      jQuery(this).data('taskStateIndex', 0).addClass(taskStates[0]);
    });
  },

  toggleTaskState:function() {
    return this.each(function() {
      var element = jQuery(this);
      var taskStateIndex = element.data('taskStateIndex') || 0;
      taskStateIndex = (taskStateIndex + 1) % taskStates.length;

      element.data('taskStateIndex', taskStateIndex).attr('class', taskStates[taskStateIndex]);
    });
  },
});

//   jQuery.extend(jQuery.expr[':'], {
//     task: function(a) {
//       a.type = "li"
//     },
//   });

jQuery(function() {

  // Simple Animation
  //  $('#timer-bar').animate({width:1}, 5000).animate({width:600}, 5000);

  // Modify CSS
  //   $('#timer-log div').css({opacity:0.3});

  $('#button-25').click(function(e) {
    e.preventDefault();
    CountdownTimer.start(25);
  });

  $('#button-5-break').click(function(e) {
    e.preventDefault();
    CountdownTimer.start(5, true);
  });

  $('#button-25-break').click(function(e) {
    e.preventDefault();
    CountdownTimer.start(25, true);
  });

  // Make task list sortable
  $('#tasks ul').sortable({handle:".handle"}).disableSelection();

  // Wire up the add task button
  $('#add').click(function(e) {
    e.preventDefault();
    var taskItem = $('#tasks ul li:first').clone();
    taskItem.find('form')[0].reset();
    taskItem.find('.completion a').resetTaskState();
    $('#tasks ul').append(taskItem);
    taskItem.find("input[type='text']:first").focus();
  });

  $('.completion a').live("click", function(e) {
    e.preventDefault();
    $(this).toggleTaskState();
  });

  // Create two extra task fields
  $('#add').click().click();

  // Aesthetic bottom div under tasks
  $('#task-footer').bg([0,0,10,10]);

  // Focus on the first text field
  $("input[type='text']:first").focus();

});

