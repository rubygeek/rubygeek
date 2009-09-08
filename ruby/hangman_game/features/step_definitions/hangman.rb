Given /^I am not yet playing$/ do
  true
end

When /^I start a new game$/ do
  @messenger = StringIO.new
  game = Hangman::Game.new(@messenger)
  @message = game.start
end

Then /^the game should say "(.*)"$/ do |message|
  @messenger.string.split("\n").should == include(message)
end