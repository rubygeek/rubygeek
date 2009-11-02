require File.expand_path(File.dirname(__FILE__) + '/../spec_helper')

describe User do
  before(:each) do
    @valid_attributes = {
      :user => "value for user",
      :password => "value for password",
      :password_confirmation => "value for password_confirmation",
      :admin => false,
      :email => "value for email"
    }
  end

  it "should create a new instance given valid attributes" do
    user = Factory.create(:user, @valid_attributes)
    user.user.should == @valid_attributes[:user]
    user.password.should == @valid_attributes[:password]
    user.email.should == @valid_attributes[:email]        
  end
end
