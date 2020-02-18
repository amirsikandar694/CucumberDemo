$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/FeaturesFile/Login.feature");
formatter.feature({
  "name": "Login Feature",
  "description": "  Verify if user is able to Login in to the site",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login as a authenticated user",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "runnerClass.StepDef.user_navigate_to_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter correct \"Admin\" and \"admin123\"",
  "keyword": "When "
});
formatter.match({
  "location": "runnerClass.StepDef.user_enter_correct(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "runnerClass.StepDef.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "success login to App",
  "keyword": "Then "
});
formatter.match({
  "location": "runnerClass.StepDef.success_login_to_App()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should logout",
  "keyword": "And "
});
formatter.match({
  "location": "runnerClass.StepDef.user_should_logout()"
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
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Login as a authenticated user",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user navigate to homepage",
  "keyword": "Given "
});
formatter.step({
  "name": "user enter correct \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Click on login button",
  "keyword": "And "
});
formatter.step({
  "name": "success login to App",
  "keyword": "Then "
});
formatter.step({
  "name": "user should logout",
  "keyword": "And "
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
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "Admin",
        "admin123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login as a authenticated user",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "runnerClass.StepDef.user_navigate_to_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter correct \"Admin\" and \"admin123\"",
  "keyword": "When "
});
formatter.match({
  "location": "runnerClass.StepDef.user_enter_correct(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "runnerClass.StepDef.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "success login to App",
  "keyword": "Then "
});
formatter.match({
  "location": "runnerClass.StepDef.success_login_to_App()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should logout",
  "keyword": "And "
});
formatter.match({
  "location": "runnerClass.StepDef.user_should_logout()"
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
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});