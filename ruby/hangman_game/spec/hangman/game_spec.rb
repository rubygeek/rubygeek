require File.join(File.dirname(__FILE__), "/../spec_helper")

module Hangman
  describe Game do
    context "starting up" do
      it "should send a welcome message" do
        messenger = mock("messenger")
        game = Game.new(messenger)
        messenger.should_receive(:puts).with("Welcome to Hangman!")
        game.start
      end
    end
  end
end