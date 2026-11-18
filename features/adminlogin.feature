Feature: Admin Login
As an OrangeHRM user,I want to log in with my credentials
So that I can access the application only when the credentials are valid
# ---------- POSITIVE ----------
@positive @smoke
Scenario: Check Admin Login with valid credentials.
Given User Open Browser with URL "http://orangehrm.qedgetech.com"
When User should see login page.
Then User enter valid username as "admin" 
Then User enter valid username password as "Qedge123!@#"
Then User click on login button.
Then User should see home page.
Then User click on logout button.
Then User should see login page.
  # ---------- NEGATIVE ----------
  @negative
  Scenario Outline: Check Admin Login with invalid credentials.
    Given User Open Browser with URL "http://orangehrm.qedgetech.com"
    When User should see login page.
    Then User enter username as "<username>"
    Then User enter password as "<password>"
    Then User click on login button.
    Then User should see error message "<error>"

    Examples:
      | username | password    | error               |
      | admin    | wrongpass   | Invalid credentials |
      | wrong    | Qedge123!@# | Invalid credentials |
      | wrong    | wrongpass   | Invalid credentials |
      

  @negative
  Scenario: Check Admin Login with empty username and valid password.
    Given User Open Browser with URL "http://orangehrm.qedgetech.com"
    When User should see login page.
    Then User enter username as ""
    Then User enter password as "Qedge123!@#"
    Then User click on login button.
    Then User should see error message "Username cannot be empty"

  @negative
  Scenario: Check Admin Login with valid username and empty password.
    Given User Open Browser with URL "http://orangehrm.qedgetech.com"
    When User should see login page.
    Then User enter username as "admin"
    Then User enter password as ""
    Then User click on login button.
    Then User should see error message "Password cannot be empty"

  @negative
  Scenario: Check Admin Login with empty username and empty password.
    Given User Open Browser with URL "http://orangehrm.qedgetech.com"
    When User should see login page.
    Then User enter username as ""
    Then User enter password as ""
    Then User click on login button.
    Then User should see error message "Username cannot be empty"
      

  