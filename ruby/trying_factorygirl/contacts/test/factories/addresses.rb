# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :address do
    street1 "123 Street"
    street2 ""
    zipcode_id 1

    factory :address_with_contact do
      association :contact, factory: :contact
      association :state, factory: :state
    end
  end
end
