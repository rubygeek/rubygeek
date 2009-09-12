require File.expand_path(File.dirname(__FILE__) + '/../../spec_helper')

describe "/users/new.html.erb" do
  include UsersHelper

  before(:each) do
    assigns[:user] = stub_model(User,
      :new_record? => true,
      :user => "value for user",
      :password => "value for password",
      :password_confirmation => "value for password_confirmation",
      :admin => false,
      :email => "value for email"
    )
  end

  it "renders new user form" do
    render

    response.should have_tag("form[action=?][method=post]", users_path) do
      with_tag("input#user_user[name=?]", "user[user]")
      with_tag("input#user_password[name=?]", "user[password]")
      with_tag("input#user_password_confirmation[name=?]", "user[password_confirmation]")
      with_tag("input#user_admin[name=?]", "user[admin]")
      with_tag("input#user_email[name=?]", "user[email]")
    end
  end
end
