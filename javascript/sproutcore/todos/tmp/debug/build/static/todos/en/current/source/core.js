// ==========================================================================
// Project:   Todos
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Todos */

/** @namespace

  My cool new app.  Describe your application.
  
  @extends SC.Object
*/
Todos = SC.Application.create(
  /** @scope Todos.prototype */ {

  NAMESPACE: 'Todos',
  VERSION: '0.1.0',

  store: SC.Store.create({
    commitRecordsAutomatically: YES
  }).from('Todos.TaskDataSource')
  
  // TODO: Add global constants or singleton objects needed by your app here.

}) ;
; if ((typeof SC !== 'undefined') && SC && SC.scriptDidLoad) SC.scriptDidLoad('todos');