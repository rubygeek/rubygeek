require File.expand_path(File.dirname(__FILE__) + '/../../spec_helper')

describe "/users/show.html.erb" do
  include UsersHelper
  before(:each) do
    assigns[:user] = @user = stub_model(User,
      :user => "value for user",
      :password => "value for password",
      :password_confirmation => "value for password_confirmation",
      :admin => false,
      :email => "value for email"
    )
  end

  it "renders attributes in <p>" do
    render
    response.should have_text(/value\ for\ user/)
    response.should have_text(/value\ for\ password/)
    response.should have_text(/value\ for\ password_confirmation/)
    response.should have_text(/false/)
    response.should have_text(/value\ for\ email/)
  end
end
