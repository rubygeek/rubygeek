require 'spec_helper'

describe "/articles/index.html.erb" do
  include ArticlesHelper

  before(:each) do
    assigns[:articles] = [
      stub_model(Articles,
        :title => "value for title",
        :body => "value for body"
      ),
      stub_model(Articles,
        :title => "value for title",
        :body => "value for body"
      )
    ]
  end

  it "renders a list of articles" do
    render
    response.should have_tag("tr>td", "value for title".to_s, 2)
    response.should have_tag("tr>td", "value for body".to_s, 2)
  end
end
