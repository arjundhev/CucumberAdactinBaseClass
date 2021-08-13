package org.test;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = {"src//test//resources//adactin.feature"},glue = {"org.step"},monochrome=true,snippets=SnippetType.CAMELCASE,
plugin= {"pretty","html:C:\\Users\\ELCOT\\eclipse-workspace\\Arjunan\\CucumberAdactinBaseLogin\\target",
		"json:C:\\Users\\ELCOT\\eclipse-workspace\\Arjunan\\CucumberAdactinBaseLogin\\target\\adactin.json",
		"junit:C:\\Users\\ELCOT\\eclipse-workspace\\Arjunan\\CucumberAdactinBaseLogin\\target\\adactin.xml"})
public class TestRunner {

}

