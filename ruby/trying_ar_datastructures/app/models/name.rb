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
    parts = fullname.split(' ')
    first = parts.first
    middle = parts.length == 3 ? parts[1] : ""
    last = parts.length == 1 ? "" : parts.last
    return Name.new(first, middle, last)
  end

end