# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :contact do
    first_name "Bob"
    last_name "Smith"


    factory :contact_with_address do
      first_name "Jane"
      last_name "Doe"
       
      after_create do |contact|
        FactoryGirl.create(:address, contact:contact)
      end
    end   
  end
end
