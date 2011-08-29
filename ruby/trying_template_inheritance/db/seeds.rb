# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).

%w(clothes furniture books).each do |cat|
  Category.find_or_create_by_name(cat)
end