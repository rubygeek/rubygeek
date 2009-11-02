require File.expand_path(File.dirname(__FILE__) + '/../../spec_helper')

describe "/users/index.html.erb" do
  include UsersHelper

  before(:each) do
    assigns[:users] = [
      stub_model(User,
        :user => "value for user",
        :password => "value for password",
        :password_confirmation => "value for password_confirmation",
        :admin => false,
        :email => "value for email"
      ),
      stub_model(User,
        :user => "value for user",
        :password => "value for password",
        :password_confirmation => "value for password_confirmation",
        :admin => false,
        :email => "value for email"
      )
    ]
  end

  it "renders a list of users" do
    render
    response.should have_tag("tr>td", "value for user".to_s, 2)
    response.should have_tag("tr>td", "value for password".to_s, 2)
    response.should have_tag("tr>td", "value for password_confirmation".to_s, 2)
    response.should have_tag("tr>td", false.to_s, 2)
    response.should have_tag("tr>td", "value for email".to_s, 2)
  end
end
