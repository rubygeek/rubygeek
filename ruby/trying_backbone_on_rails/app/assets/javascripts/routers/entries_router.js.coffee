class TryingBackboneOnRails.Routers.Entries extends Backbone.Router
  routes:
    '' : 'index'
    'entries/:id' : 'show'

  index: ->
    view = new TryingBackboneOnRails.Views.EntriesIndex()
    $('#container').html(view.render().el)

  show: (id) ->
    alert "Entry #{id}"


