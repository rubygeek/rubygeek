require "set"

class Standing
  attr_accessor :name, :score
  def initialize(name, score)
    @name = name
    @score = score
  end

  def <=> (other)
    self.score <=> other.score
  end
end

teams = []

teams.push(Standing.new("Bears", 48))
teams.push(Standing.new("Packers", 32))
teams.push(Standing.new("Broncos", 33))

sorted = SortedSet.new(teams)

sorted.each do |standing|
  puts "Team: #{standing.name}\t\t Score: #{standing.score}"
end
