class Greeter

  def initialize(name_value = "World")
    @name = name_value
  end

  def say_hi
    puts "Hi #{@name}"
  end

  def say_bye
    puts "Bye #{@name}, come back soon"
  end

end

greet = Greeter.new
greet.say_hi
greet.say_bye

greet2 = Greeter.new("Nola")
greet2.say_hi
greet2.say_bye

# prove these are not the same instances

if greet == greet2
  puts "they are same"
else
  puts "not same"
end

# This is testing the class 

if greet.class == greet2.class
  puts "they are same"
else
  puts "not same"
end