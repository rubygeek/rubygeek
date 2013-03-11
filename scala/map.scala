class Area {

  /* constructor */
  val directions = List("Up", "Right", "Down", "Left")
  var dir = 0
  println(direction)
  def direction() = directions(dir)

  def report(headDirection: String) {
    println("Turning direction:" + headDirection + " now heading " + direction)
  }

  def turnRight() {
    dir = (dir + 1) % directions.size
    report("right")
  }

  def turnLeft() {
    dir = (dir - 1) % directions.size
    report ("left")
  }
}

val gameMap = new Area

gameMap.turnRight
gameMap.turnRight

gameMap.turnLeft
gameMap.turnLeft


