package org.step;

import org.global.LibGlobal;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class StepDef extends LibGlobal {

@Given("user is on adactin webpage")
public void user_is_on_adactin_webpage() {
	WebDriverManager.chromedriver().setup();
	driver=new ChromeDriver();
	launchUrl("https://adactinhotelapp.com/");
   
}

@When("user should enter the {string} and {string}")
public void user_should_enter_the_and(String string, String string2) {
	WebElement userName = findById("id", "username");
	userName.sendKeys(string);
	
	WebElement txtPass = findById("id", "password");
	txtPass.sendKeys(string2);
	
   }

@When("user should click login button")
public void user_should_click_login_button() {
	
	WebElement lognBtn = findById("id", "login");
	lognBtn.click();
	
   
}

@When("user should select hotels by{string},{string},{string},{string},{string},{string},{string},{string}")
public void user_should_select_hotels_by(String string, String string2, String string3, String string4, String string5, String string6, String string7, String string8) {
  
	WebElement location = findById("id", "location");
	location.sendKeys(string);
	
	WebElement hotels = findById("id", "hotels");
	hotels.sendKeys(string2);
	
	WebElement roomType = findById("id", "room_type");
	roomType.sendKeys(string3);
	
	WebElement noOfRooms = findById("id", "room_nos");
	noOfRooms.sendKeys(string4);
	
	WebElement checkInDate = findById("id", "datepick_in");
	checkInDate.sendKeys(string5);
	
	WebElement checkOutDate = findById("id", "datepick_out");
	checkOutDate.sendKeys(string6);
	
	WebElement adultRoom = findById("id", "adult_room");
	adultRoom.sendKeys(string7);
	
	WebElement childRoom = findById("id", "child_room");
	childRoom.sendKeys(string8);
}

@When("useer should click search button")
public void useer_should_click_search_button() {
	WebElement submit = findById("id", "Submit");
	submit.click();
   
	
}

@When("user confirmation for booking details")
public void user_confirmation_for_booking_details() {
	
	WebElement confirm = findById("id","radiobutton_0");
	confirm.click();
	
	WebElement ok = findById("id","continue");
	ok.click();
      
	
	
}

@When("user enter the {string},{string},{string},{string},{string},{string},{string},{string},")
public void user_enter_the(String string, String string2, String string3, String string4, String string5, String string6, String string7, String string8) {
    
	WebElement firstName = findById("id", "first_name");
	firstName.sendKeys(string);
	
	WebElement lastName = findById("id", "last_name");
	lastName.sendKeys(string2);
	
	WebElement billingAdd = findById("id", "address");
	billingAdd.sendKeys(string3);
	
	WebElement cardNo = findById("id", "cc_num");
	cardNo.sendKeys(string4);
	
	WebElement cardType = findById("id", "cc_type");
	cardType.sendKeys(string5);
	
	WebElement expiryMonth = findById("id", "cc_exp_month");
	expiryMonth.sendKeys(string6);
	
	WebElement expiryYear = findById("id", "cc_exp_year");
	expiryYear.sendKeys(string7);
	
	WebElement cvvNo = findById("id", "cc_cvv");
	cvvNo.sendKeys(string8);
	
}

@When("user click book now button")
public void user_click_book_now_button() {
	
	WebElement bookNow = findById("id", "book_now");
	bookNow.click();
	
	
   }


	

}
