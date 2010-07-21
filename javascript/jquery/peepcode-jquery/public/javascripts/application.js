var CountdownTimer = {
    endTime: null,
    timerId: null,
    minutes: 0,
    maxWidth: 0,
    maxTime: (25 * 60 * 1000),
    isBreak: false,
    
    normalColors: ["#e47a80", "#eb363b"],
    breakColors: ["#97c751", "#759f58"],
    
    start: function(minutes, isBreak) {
        if (this.maxWidth == 0) {
            this.maxWidth = $("#timer-bar").width()
        }
        if (this.timerId) {
            this.cancel()
        }
        this.minutes = minutes;
        this.isBreak = isBreak;
        
        this.setupTimer();
        this.flashBar();
    },
    
    setupTimer:function() {
        $('#timer-finished').fadeOut();
        var date = new Date();
        this.endTime = date.getTime() + (this.minutes * 60 * 1000);
        this.timerId = setInterval(this.tick, 1000);
        
        this.setBarToTime(this.minutes * 60 * 1000);
        $('title').text("Started " +
          (this.isBreak ? this.minutes + " minutes break." : "pomodoro."));
    },
    
    flashBar:function() {
        var lightColor, darkColor;
        if (this.isBreak) {
            lightColor = this.breakColors[0]
            darkColor = this.breakColors[1]
        } else {
            lightColor = this.normalColors[0]
            darkColor = this.normalColors[1]
        }
        $("#timer-bar").animate({backgroundColor:lightColor})
            .animate({backgroundColor:darkColor})
            .css('background-color', darkColor);
    },
    
    setBarToTime:function(time) {
        $('#timer-bar').animate({width:(time/this.maxTime) * this.maxWidth});
    },
    
    cancel:function() {
        clearInterval(this.timerId);
    },
    
    tick:function() {
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
        $('#timer-log').append('<div class="' + logClass + '"></div');
    },
    
    showCompletedMessage:function() {
        if ($('#timer-finished').length == 0) {
            $('#timer').append('<div id="timer-finished"></div>')
            var message = 'Finished ' + (this.isBreak ? this.minutes + ' minute break' : 'one pomodoro');
            $('title').text(message);
            $('#timer-finished').text(message).fadeIn(1000);
        }
    },
}



// Extending jquery by making this plugin, extending fn will make this a method to be called on jquery objects
jQuery.fn.extend({

    taskStates:['task-empty', 'task-x', 'task-apostrophe', 'task-dash'],

    resetTaskStateClassNames:function() {
        var elements = this;
        jQuery.each(jQuery.fn.taskStates, function() {
          // in context, 'this' refers to each element in the taskStates array
          elements.removeClass(this);           
        })
        return this; // always return this so you can change methods
    },

    resetTaskState:function() { 
      return this.each(function() {
          jQuery(this).data('taskStateIndex', 0).addClass(jQuery.fn.taskStates[0]);
      })
    },

    toggleTaskState:function() {
      // this is the array of jquery page elements passed to it
      this.resetTaskStateClassNames();
      // iterate around the array of elements sent to it, calls func on each element
      return this.each(function() {
        var element = jQuery(this);
        
        // store curent state of task, 0 to 3 .. 0 if no value
        // this is a custom data element
        var taskStateIndex = element.data('taskStateIndex') || 0;
        
        // get next state, mod will cause it to wrap around from 3 to 0
        taskStateIndex = (taskStateIndex + 1) % jQuery.fn.taskStates.length;
        //change to next state
        element.data('taskStateIndex', taskStateIndex)
          .addClass(jQuery.fn.taskStates[taskStateIndex]);
       });
    },
});

jQuery( function () {
    
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
// changed live to delegate here
    $('#tasks ul').delegate('.completion a', 'click', function(e) {
        $(this).toggleTaskState();
        return false;
    });

    // when + is clicked, clone first task and append to list, clear values and set the first task focused
    $('#add').click(function(e) { 
      var taskItem = $('#tasks ul li:first').clone();
      
      taskItem
          .find('.completion a').resetTaskState()
        .end() // rewind the serach, and look for next element
          .find('input[type=text]').val('');
      // above would be like tese two lines, not sure i like the added complexity, but.. OK 
      //taskItem.find('.completion a').resetTaskState()
      //taskItem.find('input[type=text]').val('');

      $('#tasks ul').append(taskItem); 
      taskItem.find('input[type=text]:first').focus();
      return false;
    });

    // add 2 extra tasks at bottom 
    $('#add').click().click();

    // made the ul list sortable, use the .handle class, and disable selection on the ul to prevent oddities
    $('#tasks ul').sortable({handle:'.handle'}).disableSelection();
    
    // make first task focused
    $('input[type=text]:first').focus();
    
});