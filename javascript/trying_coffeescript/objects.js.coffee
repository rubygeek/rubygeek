class Vehicle
  constructor: (@name) ->
  
  move: (miles) ->
    console.log @name + " drove " + miles + " miles."

class VWBug extends Vehicle
  move: ->
    console.log "Crusing..."
    super 100
    
class Truck extends Vehicle
  move: ->
    console.log "Hauling"
    super 50
    
mater = new Truck "Mater"
herbie = new VWBug "Herbie"

mater.move()
herbie.move()