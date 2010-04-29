require 'spec_helper'

describe Customer do
  before(:each) do
    @valid_attributes = {
      :first_name => "value for first_name",
      :middle_name => "value for middle_name",
      :last_name => "value for last_name",
      :birthday => Date.today,
      :favorite_color => "value for favorite_color"
    }
  end

  it "should create a new instance given valid attributes" do
    Customer.create!(@valid_attributes)
  end
end
