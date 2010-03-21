// ==========================================================================
// Project:   Todos.tasksController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Todos */

/** @class

  (Document Your Controller Here)

  @extends SC.ArrayController
*/
Todos.tasksController = SC.ArrayController.create(
  SC.CollectionViewDelegate, // this is called a mixin so we can delete records
/** @scope Todos.tasksController.prototype */ {

  contentBinding: 'Todos.taskController.arrangeObjects',
  selectionBinding: 'Todos.taskController.selection',
  
  summary: function() {
    var len = this.get('length'),ret;
    if (len && len > 0) {
      ret = (len === 1 ) ? "1 task" : "%@ tasks".fmt(len);
    } else {
      ret = "No Tasks";
    }
    return ret;
  }.property('length').cacheable(),
  
  collectionViewDeleteContent: function(view, content, indexes) {
    // destroy the records
    var records = indexes.map(function(idx) {
      return this.objectAt(idx);
    }, this);
    records.invoke('destroy');
    
    var selIndex = indexes.get('min') - 1;
    if (selIndex < 0)  selIndex = 0;
    this.selectObject(thisobjectAt(selIndex));
  }

}) ;
