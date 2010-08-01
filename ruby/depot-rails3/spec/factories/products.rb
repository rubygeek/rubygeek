# Read about factories at http://github.com/thoughtbot/factory_girl

Factory.define :product do |f|
  f.title "Ruby 1.9 Programming"
  f.description "The most awesome language evar!"
  f.image_url "ruby.png"
  f.price "39.95"
end
