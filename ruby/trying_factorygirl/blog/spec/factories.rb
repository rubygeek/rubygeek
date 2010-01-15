Factory.define :user do |f|
  f.sequence(:user) { |n| "foo#{n}" }
  f.password "foobar"
  f.password_confirmation { |u| u.password }
  f.sequence(:email) { |n| "foo#{n}@example.com" }
end

Factory.define :post do |f|
  f.sequence(:id) { |n| n }
  f.sequence(:title) {|n| "title number #{n}"}
  f.text "yada yada yada"
  f.posted_by 1
  f.posted_on Date.today - 4.hours
end