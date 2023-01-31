Feature: Create account

  Scenario: Login with invalid data
    Given I am on the login page
    When I login with username and password
    Then I should see a flash message saying Your username is invalid!

  Scenario: Login with valid data
    Given I am on the login page
    When I login with admin and password123
    Then I should see a flash message saying You logged into a secure area!
