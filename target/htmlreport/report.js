$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/FeaturesFile/Search.feature");
formatter.feature({
  "name": "Login Feature",
  "description": "  Verify the first link using search engine",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Google search for \"\u003ctext\u003e\"",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user navigate to google search page",
  "keyword": "Given "
});
formatter.step({
  "name": "user search the \"\u003ctext\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Click on search button",
  "keyword": "And "
});
formatter.step({
  "name": "Verify the \"\u003cexpected\u003e\" result",
  "keyword": "Then "
});
formatter.step({
  "name": "close browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "text",
        "expected"
      ]
    },
    {
      "cells": [
        "Selenium Wikipedia",
        "Selenium"
      ]
    },
    {
      "cells": [
        "freemovie123",
        "123movies - Watch Free Movies \u0026 TV Shows Online"
      ]
    },
    {
      "cells": [
        "@facebook",
        "Facebook - log in or sign up"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Google search for \"Selenium Wikipedia\"",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user navigate to google search page",
  "keyword": "Given "
});
formatter.match({
  "location": "runnerClass.StepDef.user_navigate_to_google_search_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user search the \"Selenium Wikipedia\"",
  "keyword": "When "
});
formatter.match({
  "location": "runnerClass.StepDef.user_search_the(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "runnerClass.StepDef.click_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the \"Selenium\" result",
  "keyword": "Then "
});
formatter.match({
  "location": "runnerClass.StepDef.verify_the_result(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "runnerClass.StepDef.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Google search for \"freemovie123\"",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user navigate to google search page",
  "keyword": "Given "
});
formatter.match({
  "location": "runnerClass.StepDef.user_navigate_to_google_search_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user search the \"freemovie123\"",
  "keyword": "When "
});
formatter.match({
  "location": "runnerClass.StepDef.user_search_the(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "runnerClass.StepDef.click_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the \"123movies - Watch Free Movies \u0026 TV Shows Online\" result",
  "keyword": "Then "
});
formatter.match({
  "location": "runnerClass.StepDef.verify_the_result(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "runnerClass.StepDef.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Google search for \"@facebook\"",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user navigate to google search page",
  "keyword": "Given "
});
formatter.match({
  "location": "runnerClass.StepDef.user_navigate_to_google_search_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user search the \"@facebook\"",
  "keyword": "When "
});
formatter.match({
  "location": "runnerClass.StepDef.user_search_the(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "runnerClass.StepDef.click_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the \"Facebook - log in or sign up\" result",
  "keyword": "Then "
});
formatter.match({
  "location": "runnerClass.StepDef.verify_the_result(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "runnerClass.StepDef.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Yahoo search for \"\u003ctext\u003e\"",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user navigate to yahoo search page",
  "keyword": "Given "
});
formatter.step({
  "name": "user search the \"\u003ctext\u003e\" in yahoo",
  "keyword": "When "
});
formatter.step({
  "name": "Click on yahoo search button",
  "keyword": "And "
});
formatter.step({
  "name": "Verify the \"\u003ctext\u003e\" and \"\u003cexpected\u003e\" result for yahoo",
  "keyword": "Then "
});
formatter.step({
  "name": "close browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "text",
        "expected"
      ]
    },
    {
      "cells": [
        "Selenium (software) - Wikipedia",
        "Selenium (software) - Wikipedia"
      ]
    },
    {
      "cells": [
        "Yahoo 123",
        "Yahoo Mail"
      ]
    },
    {
      "cells": [
        "@facebook",
        "Facebook - log in or sign up"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Yahoo search for \"Selenium (software) - Wikipedia\"",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user navigate to yahoo search page",
  "keyword": "Given "
});
formatter.match({
  "location": "runnerClass.StepDef.user_navigate_to_yahoo_search_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user search the \"Selenium (software) - Wikipedia\" in yahoo",
  "keyword": "When "
});
formatter.match({
  "location": "runnerClass.StepDef.user_search_the_in_yahoo(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on yahoo search button",
  "keyword": "And "
});
formatter.match({
  "location": "runnerClass.StepDef.click_on_yahoo_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the \"Selenium (software) - Wikipedia\" and \"Selenium (software) - Wikipedia\" result for yahoo",
  "keyword": "Then "
});
formatter.match({
  "location": "runnerClass.StepDef.verify_the_result_for_yahoo(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "runnerClass.StepDef.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Yahoo search for \"Yahoo 123\"",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user navigate to yahoo search page",
  "keyword": "Given "
});
formatter.match({
  "location": "runnerClass.StepDef.user_navigate_to_yahoo_search_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user search the \"Yahoo 123\" in yahoo",
  "keyword": "When "
});
formatter.match({
  "location": "runnerClass.StepDef.user_search_the_in_yahoo(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on yahoo search button",
  "keyword": "And "
});
formatter.match({
  "location": "runnerClass.StepDef.click_on_yahoo_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the \"Yahoo 123\" and \"Yahoo Mail\" result for yahoo",
  "keyword": "Then "
});
formatter.match({
  "location": "runnerClass.StepDef.verify_the_result_for_yahoo(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "runnerClass.StepDef.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Yahoo search for \"@facebook\"",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user navigate to yahoo search page",
  "keyword": "Given "
});
formatter.match({
  "location": "runnerClass.StepDef.user_navigate_to_yahoo_search_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user search the \"@facebook\" in yahoo",
  "keyword": "When "
});
formatter.match({
  "location": "runnerClass.StepDef.user_search_the_in_yahoo(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on yahoo search button",
  "keyword": "And "
});
formatter.match({
  "location": "runnerClass.StepDef.click_on_yahoo_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the \"@facebook\" and \"Facebook - log in or sign up\" result for yahoo",
  "keyword": "Then "
});
formatter.match({
  "location": "runnerClass.StepDef.verify_the_result_for_yahoo(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "runnerClass.StepDef.close_browser()"
});
formatter.result({
  "status": "passed"
});
});