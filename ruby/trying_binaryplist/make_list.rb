require 'rubygems'
require 'binary_plist'

info = {}
info[:one] = 1
info[:name] = 'nola'

puts info.to_plist

File.open("info.plist", "wb") do |f|
  f.write(info.to_plist)
end

