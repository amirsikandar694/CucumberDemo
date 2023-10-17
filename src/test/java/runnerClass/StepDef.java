package runnerClass;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.testng.Assert;

import java.util.List;
import java.util.concurrent.TimeUnit;

public class StepDef {

	public static WebDriver driver;

	@Given("user navigate to homepage")
	public void user_navigate_to_homepage() {
		//String path = System.getProperty("user.dir");
		//System.setProperty("webdriver.chrome.driver", "F:\\SeleniumProject\\CucumberDemo\\resource\\chromedriver\\chromedriver.exe");
		//System.setProperty("webdriver.gecko.driver", "F:\\SeleniumProject\\CucumberDemo\\resource\\gecko\\geckodriver.exe");
		//WebDriverManager.chromedriver().setup();
		driver = new FirefoxDriver();
		driver.get("https://www.way2automation.com/angularjs-protractor/banking/#/manager/addCust");
		driver.manage().window().maximize();

	}

	@When("^user enter correct \"(.*)\" and \"(.*)\" and \"(.*)\"$")
	public void user_enter_correct(String username, String password, String pincode) throws Throwable {
		//driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		Thread.sleep(5000);
//		driver.findElement(By.xpath("//button[@ng-click=\"manager()\"]")).click();
//		driver.findElement(By.xpath("//button[@ng-class=\"btnClass1\"]")).click();
		driver.findElement(By.xpath("//input[@ng-model=\"fName\"]")).sendKeys(username);
		driver.findElement(By.xpath("//input[@ng-model=\"lName\"]")).sendKeys(password);
		driver.findElement(By.xpath("//input[@ng-model=\"postCd\"]")).sendKeys(pincode);
	}

	@When("^Click on login button$")
	public void click_on_login_button() throws Throwable {
		driver.findElement(By.xpath("//button[@type=\"submit\"]")).click();
	}

	@Then("^success login to App$")
	public void success_login_to_App() throws Throwable {
		//boolean result = driver.findElement(By.xpath("//a[@id='welcome']")).isDisplayed();
		//Assert.assertEquals(result, true);

	}

	@Then("^user should logout$")
	public void user_should_logout() throws Throwable {
		Thread.sleep(3000);
		Alert alert = driver.switchTo().alert();
		alert.accept();

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

	@When("user enter correct {string} and {string}")
	public void userEnterCorrectAnd(String username, String password) throws InterruptedException {
		Thread.sleep(5000);
		driver.findElement(By.xpath("//input[@ng-model=\"fName\"]")).sendKeys(username);
		driver.findElement(By.xpath("//input[@ng-model=\"lName\"]")).sendKeys(password);
		driver.findElement(By.xpath("//input[@ng-model=\"postCd\"]")).sendKeys("411012");
	}
}
