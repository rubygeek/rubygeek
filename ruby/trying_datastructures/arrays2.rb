require 'pp'

class NotArray 

  attr_accessor :size, :max_index, :current_index

  def initialize(_size = nil) 
    self.current_index = 0
    self.size = _size  
    self.max_index = self.size -1
    0.upto(self.max_index) do |item_index| 
      name = "item#{item_index.to_s}"
      #make attrs
      instance_eval( "def #{name}=(v)  @#{name} = v; end" )
      instance_eval( "def #{name}() @#{name}; end" )
      #set value as nil
      instance_eval( "self.#{name} = nil" )
    end
  end

  def add(value)
    name = "item#{current_index.to_s}"
    @current_index = current_index.to_i + 1
    instance_eval( "self.#{name} = value" )
  end

  def get(index)
#    return nil if index >= size #TODO: throw exception
    
    name = "item#{index}"
    instance_eval( "self.#{name}" )
  end

end

describe NotArray do

  before do
    @number_of_elements = 5 
    @not_array = NotArray.new(@number_of_elements)
  end

  it "should have #{@number_of_elements} elements" do
    @not_array.size.should == @number_of_elements 
    #pp @not_array
  end

  it "should be able to read the first element" do
    @not_array.item0 = "first"
    @not_array.item0.should == "first" 
  end

  it "should have all values init to nil" do
    0.upto(@not_array.max_index) do |index| 
      @not_array.get(index).should be_nil
    end
  end

  it "should be able to add the first item and retrieve it" do
    element = "this is an item"
    @not_array.add(element)
    @not_array.get(0).should == element 
  end

  it "should be able to add two items and retrieve it" do
    element = "this is item"
    @not_array.add("#{element} 0")
    @not_array.add("#{element} 1")
pp @not_array
    @not_array.get(0).should == "#{element} 0" 
    @not_array.get(1).should == "#{element} 1" 
  end

  it "should be able to add #{@number_of_elements} and retrieve them" do
    0.upto(@not_array.max_index) do |index| 
      @not_array.add("item number #{index}")
    end
    0.upto(@not_array.max_index) do |index| 
      @not_array.get(index).should == "item number #{index}" 
    end
  end

end
