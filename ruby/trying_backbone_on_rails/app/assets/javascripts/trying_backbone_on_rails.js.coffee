window.TryingBackboneOnRails =
  Models: {}
  Collections: {}
  Views: {}
  Routers: {}
  init: -> 
    new TryingBackboneOnRails.Routers.Entries()
    Backbone.history.start()

$(document).ready ->
  TryingBackboneOnRails.init()
