Feature: DataTable Feature
  Verify if user is able to Login in to the site

@Smoke
 Scenario: Login as a authenticated single user for dataTable
    Given user navigate to homepage
    When user enter correct username and password 
    |Admin|admin123|
    And Click on login button
    Then success login to App
    And user should logout
    Then close browser

@Regression
 Scenario: Login as a authenticated with multiple user for dataTable
    Given user navigate to homepage
    When user enter all the combination of username and password 
    |Admin|admin123|
    |Admin|admin1234|
    And Click on login button
    Then success login to App
    And user should logout
    Then close browser   
	
	