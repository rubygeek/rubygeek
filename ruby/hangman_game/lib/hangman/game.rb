module Hangman
  class Game
    def initialize(messenger)
      @messenger = messenger
    end
    
    def start
      @messenger.puts "Welcome to Hangman!"
    end
  end
end