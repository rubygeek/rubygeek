Feature: hangman starts game

  As a gamer
  I want to start a game
  So that I can guess the word
  
  Scenario: start game
    Given I am not yet playing
    When I start a new game
    Then the game should say "Welcome to Hangman!"
    And the game should say "Enter guess"