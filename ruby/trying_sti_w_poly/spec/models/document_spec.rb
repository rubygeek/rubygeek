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
      @document = Document.create!(@valid_attributes)     
    end
    it "should create a new instance given valid attributes" do
      @document.should be_valid
    end
  
    it "should have a type of 'Document'" do
      @document.type.should == "Document"
    end
    
    it "can be attachable to Article" do
      @article = Article.new
      @article.save
      @article.documents << @document
      @document.attachable_type == "Article"
      @document.attachable_id == @article.id
    end
    

    it "can be attachable to Event" do
      @event = Event.new
      @event.save
      @event.documents << @document
      @document.attachable_type == "Event"
      @document.attachable_id == @event.id
    end
  end
end
