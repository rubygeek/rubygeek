puts "--------------------------------------------------------------"
puts "++                Welcome to Vader Trivia                   ++"
puts "--------------------------------------------------------------"

answer = 43 
puts "--------------------------------------------------------------"
puts "                     what is vaders age? "
puts "--------------------------------------------------------------"
while (guess = gets.to_i) != answer
  if guess < answer
    puts "too low"
  else
    puts "too high"
  end
  puts "Try again"
end
puts "You guessed it right!"


answer = "vader" 
puts "--------------------------------------------------------------"
puts "                     who saved vader's apprentice? "
puts "--------------------------------------------------------------"
while (guess = gets.chomp) != answer
  puts "Try again"
end
puts "You guessed it right!"