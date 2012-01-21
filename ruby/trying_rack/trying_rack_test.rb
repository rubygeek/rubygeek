require "rubygems"
require "rack"
require "minitest/autorun"
require File.expand_path("../lib/trying_rack", __FILE__)

describe TryingRack do
  before do 
    @request = Rack::MockRequest.new(TryingRack)
  end

  it "returns 404 response for unknown request" do
    @request.get("/unknown").status.must_equal 404
  end

  it "/ displays Hello World by default" do
    @request.get("/").body.must_include "Hello World"
  end

  it "/ displays the name passed into the cookie" do
    @request.get("/", "HTTP_COOKIE" => "name=Nola").body.must_include "Hello Nola" 
  end

  it "/change sets the cookie and redirects to root" do
    response = @request.post("/change", :params => {"name" => "Nola"})
    response.status.must_equal 302
    response["Location"].must_equal "/"
    response["Set-Cookie"].must_include "name=Nola"
  end

end
