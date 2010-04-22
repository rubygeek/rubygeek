require 'spec_helper'

describe "/articles/new.html.erb" do
  include ArticlesHelper

  before(:each) do
    assigns[:articles] = stub_model(Articles,
      :new_record? => true,
      :title => "value for title",
      :body => "value for body"
    )
  end

  it "renders new articles form" do
    render

    response.should have_tag("form[action=?][method=post]", articles_path) do
      with_tag("input#articles_title[name=?]", "articles[title]")
      with_tag("textarea#articles_body[name=?]", "articles[body]")
    end
  end
end
