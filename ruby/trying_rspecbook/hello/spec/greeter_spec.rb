class RSpecGreeter
  def greet
    "Hello RSpec!"
  end
end

# example group
describe "RSpec Greeter" do
  # an example
  it "should say 'Hello RSpec!' when it receives the greet() mesasge" do
    greeter = RSpecGreeter.new  # this is the Given
    greeting = greeter.greet    # this is the When
    greeting.should == "Hello RSpec!"   # this is the Then
  end
end