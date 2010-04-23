require 'spec_helper'

describe Attachment do
  before(:each) do
    @valid_attributes = {
      :type => "value for type",
      :article_id => 1,
      :description => "value for description",
      :filename => "value for filename",
      :filesize => 1
    }
  end

  it "should create a new instance given valid attributes" do
    Attachment.create!(@valid_attributes)
  end
end
