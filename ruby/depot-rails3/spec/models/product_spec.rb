require 'spec_helper'

describe Product do
  before :each do
    @product = Factory(:product)
  end
 
  it "is valid with valid attributes" do
    @product.should be_valid
  end

  it "is not valid without a title" do
    @product.title = nil
    @product.should_not be_valid
  end

  it "is not valid without a description" do
    @product.description = nil
    @product.should_not be_valid
  end

  it "is not valid with a price of 0.00"  do
    @product.price = 0.00
    @product.should_not be_valid
  end

  it "is not valid with a price of -3.12"  do
    @product.price = -3.12
    @product.should_not be_valid
  end

end
