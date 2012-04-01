# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :address do
    street1 "123 Street"
    street2 ""
    zipcode_id 1
  end
end
