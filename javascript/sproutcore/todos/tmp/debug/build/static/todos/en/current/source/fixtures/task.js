// ==========================================================================
// Project:   Todos.Task Fixtures
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Todos */

sc_require('models/task');

Todos.Task.FIXTURES = [

  { "guid" : "task-1",
    "description" : "Build my first app",
    "isDone" : false
  },
  
  { "guid" : "task-2",
    "description" : "Build another app",
    "isDone" : false 
  },
  
  { "guid" : "task-3",
    "description" : "Build a third app",
    "isDone" : false
  }

];
; if ((typeof SC !== 'undefined') && SC && SC.scriptDidLoad) SC.scriptDidLoad('todos');