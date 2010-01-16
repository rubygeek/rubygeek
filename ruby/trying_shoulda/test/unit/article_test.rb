require 'test_helper'

class ArticleTest < Test::Unit::TestCase

  context "An article instance" do
    setup do
      @valid_attributes = {
        :title => "TestTitle",
        :body => "this is the body",
        :posted_on => Date.today
      }
      Article.create(@valid_attributes)
      @article = Article.find(:first)
    end
    
    should "have a title" do
      assert_equal @valid_attributes[:title], @article.title
    end
    
    should "have a body" do
      assert_equal  @valid_attributes[:body], @article.body
    end
  end
end
