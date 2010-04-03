// ==========================================================================
// Project:   Todos.TaskDataSource
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Todos */

/** @class

  (Document Your Data Source Here)

  @extends SC.DataSource
*/

sc_require("models/task");
Todos.TASKS_QUERY = SC.Query.local(Todos.Task, { orderBy: 'isDone,description'});
  
Todos.TaskDataSource = SC.DataSource.extend(
/** @scope Todos.TaskDataSource.prototype */ {

  
  // ..........................................................
  // QUERY SUPPORT
  // 

  fetch: function(store, query) {

    // TODO: Add handlers to fetch data for specific queries.  
    // call store.dataSourceDidFetchQuery(query) when done.
    if (query === Todos.TASKS_QUERY) {
      SC.Request.getUrl('/tasks').json()
        .notify(this, 'didFetchTasks', store, query)
        .send();
      return YES;
    }
    return NO; // return YES if you handled the query
  },

  didFetchTasks: function(response, store, query) {
    if (SC.ok(response)) {
      var storeKeys = store.loadRecords(Todos.Task, response.get('body').content);
      store.loadQueryResults(query, storeKeys);
    } else {
      store.dataSourceDidErrorQuery(query, response);
    }
  },
  
  // ..........................................................
  // RECORD SUPPORT
  // 
  
  retrieveRecord: function(store, storeKey) {
    
    // TODO: Add handlers to retrieve an individual record's contents
    // call store.dataSourceDidComplete(storeKey) when done.
    if (SC.kindOf(store.recordTypeFor(storeKey), Todos.Task)) {
      var url = store.idFor(storeKey);
      SC.Request.getUrl(url).json()
        .notify(this, 'didRetrieveTask', store, storeKey)
        .send();
        return YES;
      } else {
       return NO;
      }
  },
  
  didRetrieveTask: function(response, store, storeKey){
    if (SC.ok(response)) {
      var dataHash = response.get('body').content;
      store.dataSourceDidComplete(storeKey, dataHash);
    } else {
      store.dataSourceDidError(storeKey, response);
    }
  },
  
  createRecord: function(store, storeKey) {
    
    // TODO: Add handlers to submit new records to the data source.
    // call store.dataSourceDidComplete(storeKey) when done.
    if (SC.kindOf(store.recordTypeFor(storeKey), Todos.Task)) {
      SC.Request.postUrl('/tasks').json()
        .notify(this, this.didCreateTask, store, storeKey)
        .send(store.readDataHash(storeKey));
      return YES;
    } else {
      return NO ; // return YES if you handled the storeKey      
    } 

  },
  
  didCreateTask: function(response, store, storeKey) {
    if (SC.ok(response)) {
      // Adapted from parseUri 1.2.2
      // (c) Steven Levithan <stevenlevithan.com>
      // MIT License
      var parser = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
      var url = parser.exec(response.header('Location'))[8];
      store.dataSourceDidComplete(storeKey, null, url); //update url    
     } else {
       store.dataSourceDidError(storeKey, response);
     }
    
  },
  
  updateRecord: function(store, storeKey) {
    
    // TODO: Add handlers to submit modified record to the data source
    // call store.dataSourceDidComplete(storeKey) when done.

    return NO ; // return YES if you handled the storeKey
  },
  
  destroyRecord: function(store, storeKey) {
    
    // TODO: Add handlers to destroy records on the data source.
    // call store.dataSourceDidDestroy(storeKey) when done
    
    return NO ; // return YES if you handled the storeKey
  }
  
}) ;
; if ((typeof SC !== 'undefined') && SC && SC.scriptDidLoad) SC.scriptDidLoad('todos');