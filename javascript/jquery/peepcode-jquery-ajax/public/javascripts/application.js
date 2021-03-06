
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
    this.isBreak = isBreak;

    this.setupTimer();
    this.flashBar();
    this.notifyServer();
  },
  
  notifyServer: function(){
    $.ajax({
      type: "POST",                         // could also be GET
      url: "timers.json",                   // url to post to
      data: JSON.stringify(CountdownTimer),  // serialize data, we could choose a few of the values but the object is not that big, so no big deal
      contentType: "application/json",      // type we are sending
      dataType: "json",                      // type of data we want back
      success: function(data, textStatus, xhr) {
        console.log("Timer request result: " + textStatus)
      },
    })
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

var app = {
    setupTimerButtons:function() {
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
    },
    setupTaskForms:function() {
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
    },
    loadReport: function() {
        $("#report").load("/report.html");
    },
    setupAjaxCallbacks: function(){
        $('body').ajaxStart(function() {
            $('#ajax-status').show().text("Loading...");
        });
        $('body').ajaxStop(function() {
            $('#ajax-status').fadeOut();
        });
        $('body').ajaxError(function(event, xhr, ajaxOptions, thrownError) {
            if (xhr.status === 401) {
                //TODO: idea, shake the login form instead!
                if ($('#login').is(":hidden")) {
                    app.showLoginForm();
                }
                alert("Sorry, " + xhr.responseText.toLowerCase());
                // important to do this AFTER the alert, because alert will take the focus
                $("#login input[type='text']:first").focus();
            }
            console.log("XHR Response: " + JSON.stringify(xhr));
        });
    },
    showLoginForm: function(){
        $(window).resize(app.centerLoginForm)
        app.centerLoginForm();
        var $form = $("form#login");
        $form.show("slide", {direction:"up"});
        $form.submit(function(e) {
            e.preventDefault();
            $.post($form.attr('action'), $form.serialize(), function() {
                $form.hide("slide", {direction:"up"});
            })
        })
    },
    centerLoginForm: function(){
        $("#login").css({
            left: $(window).width()/2 - $("#login").width()/2
        })
    },
    getTweets: function(){
      $.get("http://search.twitter.com/search.json?q=pomodoro",
            app.showTweets,  //success callback function
            'jsonp');
      
    },
    showTweets: function(data, textStatus, xhr){
      // Create a div for the tweets if its not there
      if($("body").is(":not(:has(#tweets))")) {
        $("<div/>", { id: "tweets"}).appendTo("body");
      }
      // for each tweet, build a div with the info
      $(data.results).each(function() {
        $("<div/>", {"class" : "tweet"}).append($('<img/>', {
            'src' : this.profile_image_url
          })).append($('<div/>', { 
            'class' : 'from_user',
            'text' : this.from_user
          })).append($('<div/>', {
            'class' : 'text',
            'html' : this.text
          })).appendTo("#tweets");
      });
    },
}

jQuery(function() {
  app.setupAjaxCallbacks();
  app.setupTimerButtons();
  app.setupTaskForms();

  // Aesthetic bottom div under tasks
  $('#task-footer').bg([0,0,10,10]);

  // Focus on the first text field
  $("input[type='text']:first").focus();

  app.loadReport();
  app.showLoginForm();
  app.getTweets();    
});

