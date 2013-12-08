Feature: Search for Videos on YouTube

  Scenario: Search for Videos of Large Rodent
    Given I am on the YouTube home page
    When I search for "capybara"
    Then videos of large rodents are returned
