package runnerClass;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class HookRunner {
	
	//global hooks
	@Before	
	public void browser()
	{
		System.out.println("Launch browser");
		
	}
	
	@After
	public void closeBrowser() {
		System.out.println("Browser is close");
	}
	//------------------------------------------------
	
	@Before("@E2E")	
	public void browserStart()
	{
		System.out.println("E2E Launch browser");
		
	}
	
	@After("@E2E")	
	public void browserClose()
	{
		System.out.println("E2E Close browser");
		
	}
	//==========================================
	@Before(order=1)	
	public void browserStart1()
	{
		System.out.println("E2E Launch browser1");
		
	}
	
	@After(order=2)	
	public void browserClose1()
	{
		System.out.println("E2E Close browser1");
		
	}	
	
	@Given("user navigate to the page")
	public void user_navigate_to_the_page() {
		System.out.println("user navigate to the page");
	   
	}

	@When("user fill the form")
	public void user_fill_the_form() {
		System.out.println("user fill the form");
	 
	}

	@Then("account is created")
	public void account_is_created() {
		System.out.println("account is created");
	 
	}

}
