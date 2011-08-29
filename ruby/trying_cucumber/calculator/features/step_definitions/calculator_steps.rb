require 'open3'
require 'test/unit'
include Test::Unit::Assertions

Given /^the input "([^"]*)"$/ do |input|
  File.open('input.txt', 'w') do |file|
    file.puts(input)
  end  
end

When /^the calculator is run$/ do
  command = "ruby calculator.rb input.txt"
  Open3.popen3(command) do |stdin, stdout, stderr|
    error_message = stderr.read
    raise(error_message) unless error_message.empty?
    @output = stdout.read
  end
end

Then /^the output should be "([^"]*)"$/ do |expected_output|
  assert_equal(expected_output, @output)
end
