Feature: Create account

  Scenario: Login with invalid data
    Given I am on the login page
    When I login with username and password
    Then I should see a flash message saying Your username is invalid!
