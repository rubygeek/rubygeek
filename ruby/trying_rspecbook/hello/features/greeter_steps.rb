class CucumberGreeter
  def greet
    "Hello Cucumber!"
  end
end

Given /^a greeter$/ do
  @greeter = CucumberGreeter.new
end

When /^I send it the greet message$/ do
  @message = @greeter.greet
end

Then /^it should say "([^\"]*)"$/ do |greeting|
  @message.should == greeting
end






