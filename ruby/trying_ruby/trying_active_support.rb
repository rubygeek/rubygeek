require 'rubygems'
require 'minitest/autorun'
require 'active_support/inflector'

require 'ruby-debug'

class CurrentAddress
  attr_accessor :city
  def initialize
    @city = "Austin"
  end
end

describe "Trying Active Support" do

  before do
    @address = CurrentAddress.new
  end

  describe "CurrentAddress class should work properly" do
    it "should have one attribute" do
      @address.city.must_equal "Austin"
    end
  end

  it "should take a string to ruby constant" do
    "CurrentAddress".constantize.must_equal CurrentAddress
  end

  it "should camelize a string" do
    "current_address".camelize.must_equal "CurrentAddress"
  end

  it "should camelize and constantize" do
    "current_address".camelize.constantize.new.must_be_instance_of CurrentAddress
  end
 
  it "should raise error if not valid constant" do
    proc {"blah".constantize}.must_raise(NameError)
    lambda {"blah".constantize}.must_raise(NameError)
    #stabby lambda
    ->{"blah".constantize}.must_raise(NameError)
  end 

  it "should classify a string to a singular class name" do
    "current_addresses".classify.must_equal "CurrentAddress"
  end

  it "doesnt work properly for singlular words ending in s CRAPPY!" do
    #these pass but its crappy
    "bus".classify.must_equal "Bu"
    "business".classify.must_equal "Busines"
    "water".classify.must_equal "Water"
  end
end
