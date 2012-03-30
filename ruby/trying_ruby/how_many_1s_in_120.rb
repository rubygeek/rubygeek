# One day, a little boy who was very curious about numbers thought to himself, "If were to write out all the numbers from 1 to 120 
# how many times would I write the numeral 1?"

# I talked about this with my coworkers and they came up with these solutions:
# Hal:   str = ""; 1.upto(120) {|i| str << i.to_s }; puts str.split("").count("1")
# Ethan: (1..120).inject(0){|t,i| t+= i.to_s.count("1"); t}

def how_many(max, value = 1)
  total = 0
  (1..max).each do |number|
    total += number.to_s.count(value.to_s)
  end

  total
end

puts "There are #{how_many(120)} 1's in 120"
puts "There are #{how_many(240)} 1's in 240"
puts "There are #{how_many(500, 5)} 5's in 500"
