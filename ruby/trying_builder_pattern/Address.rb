class Address
  attr_accessor :street, :street2, :city, :state, :zip, :address_type
  
  def initialize(&block)
    
    #set default values
    self.city = "Chicago"
    self.state = "IL"
    
    #set value from block 
    instance_eval &block if block_given?
  
  end
  
end