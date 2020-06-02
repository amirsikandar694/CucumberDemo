package runnerClass;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
features = "src/test/java/FeaturesFile",
plugin = { "pretty","html:target/htmlreport","json:target/jsonreport/report.json"}, //report format
dryRun=false,			//check all the steps are present or not
strict=false,
monochrome=true			//readable format
//tags= {"@Regression and @Smoke"}
)
public class Runner {

}
