require File.join(File.dirname(__FILE__), "spec_helper")

describe "root" do
  include RequestSpecHelper

  it "should get root page" do
    get "/"
    response.should be_ok
  end

end

describe "login" do
  include RequestSpecHelper

  it "logs in successfully" do
    post "/sessions", {:username => "a", :password => "a"}
    response.should be_ok
  end
  
  it "rejects incorrect login" do
    post "/sessions", {:username => "incorrect", :password => "incorrect"}
    response.status.should == 401
  end
  
end

