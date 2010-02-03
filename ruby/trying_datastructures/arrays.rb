class NotArray 

  attr_accessor :size, :item1, :item2, :item3

  size = nil

  def initialize(_size) 
    self.size = _size
    1.upto(self.size) do |item_index| 
      instance_eval( "self.#{'item'+item_index.to_s}" )
    end
  end


end

describe NotArray do

  before do
    @not_array = NotArray.new(3)
  end

  it "should have 3 elements" do
    @not_array.size.should == 3 
  end

  it "should be able to read the first element" do
    @not_array.item1 = "first"
    @not_array.item1.should == "first" 
  end

end
