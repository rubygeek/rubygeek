require 'spec_helper'

describe "/articles/edit.html.erb" do
  include ArticlesHelper

  before(:each) do
    assigns[:articles] = @articles = stub_model(Articles,
      :new_record? => false,
      :title => "value for title",
      :body => "value for body"
    )
  end

  it "renders the edit articles form" do
    render

    response.should have_tag("form[action=#{articles_path(@articles)}][method=post]") do
      with_tag('input#articles_title[name=?]', "articles[title]")
      with_tag('textarea#articles_body[name=?]', "articles[body]")
    end
  end
end
