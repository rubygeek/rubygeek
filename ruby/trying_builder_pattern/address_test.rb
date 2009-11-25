require "address"
require "test/unit"

class AddressTest < Test::Unit::TestCase
  
  def testDefaultValues
    myaddress = Address.new
    assert_equal("Chicago", myaddress.city)
    assert_equal("IL", myaddress.state)
  end
  
  def testStreetStateZip 
    myaddress = Address.new do 
      self.street = "this is the street"
      self.zip = "11111"
    end
    assert_equal("Chicago", myaddress.city)
    assert_equal("IL", myaddress.state)
    assert_equal("this is the street", myaddress.street)
    assert_equal("11111", myaddress.zip)
  end

  def testZipStreetState
    myaddress = Address.new do 
      self.zip = "11111"
      self.street = "this is the street"
    end
    assert_equal("this is the street", myaddress.street) 
    assert_equal("11111", myaddress.zip)
  end


end