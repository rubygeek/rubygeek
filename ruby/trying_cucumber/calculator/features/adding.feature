Feature: Adding

  Scenario: Adding two numbers
    Given the input "2+2"
    When the calculator is run
    Then the output should be "4"

  Scenario: Adding three numbers
    Given the input "2+5+5"
    When the calculator is run
    Then the output should be "12"

  Scenario: Adding four numbers
    Given the input "2+5+5+3"
    When the calculator is run
    Then the output should be "15"
