package runnerClass;

import java.util.List;
import java.util.Map;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class StepDef {

	public static WebDriver driver;

	@Given("^user navigate to homepage$")
	public void user_navigate_to_homepage() throws Throwable {
		String path = System.getProperty("user.dir");
		System.setProperty("webdriver.chrome.driver", path + "\\resource\\chromedriver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://opensource-demo.orangehrmlive.com/index.php/auth/login");
		driver.manage().window().maximize();

	}

	@When("^user enter correct \"(.*)\" and \"(.*)\"$")
	public void user_enter_correct(String username, String password) throws Throwable {
		driver.findElement(By.xpath("//input[@id='txtUsername']")).sendKeys(username);
		driver.findElement(By.xpath("//input[@id='txtPassword']")).sendKeys(password);
	}

	@When("^Click on login button$")
	public void click_on_login_button() throws Throwable {
		driver.findElement(By.xpath("//input[@id='btnLogin']")).click();
	}

	@Then("^success login to App$")
	public void success_login_to_App() throws Throwable {
		boolean result = driver.findElement(By.xpath("//a[@id='welcome']")).isDisplayed();
		Assert.assertEquals(result, true);

	}

	@Then("^user should logout$")
	public void user_should_logout() throws Throwable {
		Thread.sleep(3000);
		driver.findElement(By.xpath("//a[@id='welcome']")).click();
		Thread.sleep(3000);
		driver.findElement(By.xpath("//a[contains(text(),'Logout')]")).click();

	}

	@Then("^close browser$")
	public void close_browser() throws Throwable {
		driver.close();
	}

	@When("user enter correct username and password")
	public void user_enter_correct_username_and_password(DataTable dataTable) {
		List<String> data = dataTable.asList();
		driver.findElement(By.xpath("//input[@id='txtUsername']")).sendKeys(data.get(0));
		driver.findElement(By.xpath("//input[@id='txtPassword']")).sendKeys(data.get(1));

	}

	@When("user enter all the combination of username and password")
	public void user_enter_all_the_combination_of_username_and_password(DataTable dataTable) {
		List<List<String>> data = dataTable.asLists();

		driver.findElement(By.xpath("//input[@id='txtUsername']")).sendKeys(data.get(0).get(0));
		driver.findElement(By.xpath("//input[@id='txtPassword']")).sendKeys(data.get(0).get(1));

	}

}
