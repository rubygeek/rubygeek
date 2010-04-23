require 'spec_helper'

describe "/articles/show.html.erb" do
  include ArticlesHelper
  before(:each) do
    assigns[:articles] = @articles = stub_model(Articles,
      :title => "value for title",
      :body => "value for body"
    )
  end

  it "renders attributes in <p>" do
    render
    response.should have_text(/value\ for\ title/)
    response.should have_text(/value\ for\ body/)
  end
end
