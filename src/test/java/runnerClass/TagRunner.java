package runnerClass;

import io.cucumber.java.en.Given;

public class TagRunner {
	
	@Given("Smoke execution")
	public void smoke_execution() {
	  System.out.println("Smoke execution");
	}
	
	@Given("Regression execution")
	public void regression_execution() {
		System.out.println("Regression execution");
	}

	@Given("Sanity execution")
	public void sanity_execution() {
		System.out.println("Sanity execution");
	 
	}

	@Given("Automation execution")
	public void automation_execution() {
		System.out.println("Automation execution");
	   
	}
	
	@Given("Regression Smoke execution")
	public void regression_Smoke_execution() {
		System.out.println("Regression Smoke execution");
	  
	}

}
