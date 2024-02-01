package runnerClass;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.testng.Assert;

import java.time.Duration;
import java.util.List;

public class StepDef {

	public static WebDriver driver;

	@Then("^close browser$")
	public void close_browser() throws Throwable {
		driver.close();
	}


	@Given("user navigate to google search page")
	public void user_navigate_to_google_search_page() {
		driver = new FirefoxDriver();
		driver.get("https://www.google.com/");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(5));

	}

	@When("user search the {string}")
	public void user_search_the(String text) throws InterruptedException {
		driver.findElement(By.id("APjFqb")).sendKeys(text);
		Thread.sleep(3000);
	}

	@When("Click on search button")
	public void click_on_search_button() {
		driver.findElement(By.xpath("//div[@class='lJ9FBc']//input[@name='btnK']")).click();
	}

	@Then("Verify the {string} result")
	public void verify_the_result(String expected) {
		String data=driver.findElement(By.xpath("//h3[normalize-space()='"+expected+"']")).getText();
		Assert.assertEquals(expected,data);
	}

//	===================Yahoo========================

	@Given("user navigate to yahoo search page")
	public void user_navigate_to_yahoo_search_page() {
		driver = new FirefoxDriver();
		driver.get("https://in.search.yahoo.com/?fr2=inr");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(5));
	}

	@When("user search the {string} in yahoo")
	public void user_search_the_in_yahoo(String text) {
		driver.findElement(By.xpath("//input[@id='yschsp']")).sendKeys(text);

	}

	@When("Click on yahoo search button")
	public void click_on_yahoo_search_button() throws InterruptedException {
		driver.findElement(By.xpath("//input[@id='yschsp']")).sendKeys(Keys.ENTER);
		Thread.sleep(2000);
	}
	@Then("Verify the {string} and {string} result for yahoo")
	public void verify_the_result_for_yahoo(String text, String expected) {
		String data=driver.findElement(By.xpath("//a[@aria-label='"+expected+"']")).getText();
		Assert.assertTrue(data.contains(expected));
	}


}
