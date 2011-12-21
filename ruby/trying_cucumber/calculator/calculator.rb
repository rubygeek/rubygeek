input = File.read(ARGV[0])
numbers_to_add = input.split("+").map { |n| n.to_i }
numbers_to_divide = input.split("/").map { |n| n.to_i }

total = 0
puts "Add #{numbers_to_add.size} Divide #{numbers_to_divide}"
exit
if numbers_to_add.size > 0
	numbers_to_add.each do |number|
	  total += number
	end
elsif numbers_to_divide.size > 0 
  total = numbers_to_divide[0] / numbers_to_divide[1]
end

print(total)

