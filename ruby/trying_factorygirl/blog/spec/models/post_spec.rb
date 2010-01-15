require File.expand_path(File.dirname(__FILE__) + '/../spec_helper')
require "pp"

describe Post do
  before(:each) do
    @valid_attributes = {
      :id => 1,
      :title => "this is title",
      :text => "this is text",
      :posted_by => 1,
      :posted_on => Date.today
    }
  end

  it "should create a new instance given valid attributes" do
    post = Factory.create(:post, @valid_attributes)
    post.title.should == @valid_attributes[:title]
    post.text.should == @valid_attributes[:text]
    post.posted_by.should == @valid_attributes[:posted_by]
    post.posted_on.should == @valid_attributes[:posted_on]
  end
  
  it "should create posts in sequences from factorygirl" do
    post1 = Factory.create(:post)
    post1.id.should == 1
    post2 = Factory.create(:post)
    post2.id.should == 2
    post3 = Factory.create(:post)
    post3.id.should == 3
  end
end
