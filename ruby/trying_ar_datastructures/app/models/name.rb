class Name
  attr_reader :first, :last, :middle
  
  def initialize(first, middle, last)
    @first = first
    @middle = middle
    @last = last
  end
  
  def to_s
    [@first, @middle, @last] * " "
  end
  
  def self.parse(fullname)
    raise ArgumentError, "Name cannot be empty" if fullname.nil?
    components = fullname.split(' ')
    first = components.first
    middle = components.length == 3 ? components[1] : ""
    last = components.length == 1 ? "" : components.last
    return Name.new(first, middle, last)
  end

end