require 'minitest/autorun'
require 'minitest/spec'

class Cart
  attr_accessor :items
  attr_accessor :price

  def initialize
    @items = []
    @price = 0.0
  end

  def add_book(volume)
    @items.push(volume)
    @price = @items.size * 8
  end
end


describe Cart  do

 describe "a new cart" do 

  it "should be empty" do
    @cart = Cart.new
    @cart.items.size.must_equal 0
  end

 end

 describe "one book in cart" do
   it "should have one book" do
     @cart = Cart.new
     @cart.add_book(0)
     @cart.items.size.must_equal 1
     @cart.price.must_equal 8.0
   end
 end
end
