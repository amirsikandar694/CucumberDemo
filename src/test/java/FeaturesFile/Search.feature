Feature: Login Feature
  Verify the first link using search engine
    
   Scenario Outline: Google search for "<text>"
    Given user navigate to google search page
     When user search the "<text>"
    And Click on search button
     Then Verify the "<expected>" result
    Then close browser
    
			Examples:
			| text | expected |
			| Selenium Wikipedia | Selenium |
            | freemovie123 | 123movies - Watch Free Movies & TV Shows Online |
            |@facebook     | Facebook - log in or sign up                    |
	
	