Feature: Login Feature
  Verify if user is able to Login in to the site


 Scenario: Login as a authenticated user
    Given user navigate to homepage
    When user enter correct "Admin" and "admin123" and "411234"
    And Click on login button
    Then success login to App
    And user should logout
    Then close browser
    
   Scenario Outline: Login as a authenticated diff users
    Given user navigate to homepage
    When user enter correct "<username>" and "<password>"
    And Click on login button
    Then success login to App
    And user should logout
    Then close browser
    
			Examples:
			| username | password |
			| Admin | admin123 |
            | Admin123 | admin456 |
	
	