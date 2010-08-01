# Read about factories at http://github.com/thoughtbot/factory_girl

Factory.define :product do |f|
  f.title "MyString"
  f.description "MyText"
  f.image_url "MyString"
  f.price "9.99"
end
