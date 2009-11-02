Factory.define :user do |f|
  f.sequence(:user) { |n| "foo#{n}" }
  f.password "foobar"
  f.password_confirmation { |u| u.password }
  f.sequence(:email) { |n| "foo#{n}@example.com" }
end