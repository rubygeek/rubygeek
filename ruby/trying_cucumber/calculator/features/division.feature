Feature: Division

  Scenario: Dividing two numbers
    Given the input "4/2"
    When the calculator is run
    Then the output should be "2"
