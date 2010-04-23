require 'spec_helper'

describe Document do
  before(:each) do
    @valid_attributes = {
      :attachable_id => 1,
      :description => "value for description",
      :filename => "value for filename",
      :filesize => 1
    }
  end

  describe "when created" do
    before do
      @image = Image.create!(@valid_attributes)     
    end
    it "should create a new instance given valid attributes" do
      @image.should be_valid
    end
  
    it "should have a type of 'Image'" do
      @image.type.should == "Image"
    end
    
    it "can be attachable to Article" do
      @article = Article.new
      @article.save
      @article.images << @image
      @image.attachable_type == "Article"
      @image.attachable_id == @article.id
    end
    

    it "can be attachable to Event" do
      @event = Event.new
      @event.save
      @event.images << @image
      @image.attachable_type == "Event"
      @image.attachable_id == @event.id
    end
  end
end
