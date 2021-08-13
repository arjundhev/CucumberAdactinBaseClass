$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/adactin.feature");
formatter.feature({
  "name": "validating login function of Adactin website",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Validating login function with valid user name and valid password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on adactin webpage",
  "keyword": "Given "
});
formatter.step({
  "name": "user should enter the \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user should click login button",
  "keyword": "And "
});
formatter.step({
  "name": "user should select hotels by\"\u003cLocation\u003e\",\"\u003cHotels\u003e\",\"\u003cRoomType\u003e\",\"\u003cNoOfRooms\u003e\",\"\u003cCheckinDate\u003e\",\"\u003cCheckOUtDate\u003e\",\"\u003cAdultsPerRoom\u003e\",\"\u003cChildrensPerRoom\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "useer should click search button",
  "keyword": "And "
});
formatter.step({
  "name": "user confirmation for booking details",
  "keyword": "And "
});
formatter.step({
  "name": "user enter the \"\u003cFirstName\u003e\",\"\u003cLastName\u003e\",\"\u003cBillingAddress\u003e\",\"\u003cCreditCardNo\u003e\",\"\u003cCreditCardType\u003e\",\"\u003cExpiryMonth\u003e\",\"\u003cExpiryYear\u003e\",\"\u003cCvvNo\u003e\",",
  "keyword": "And "
});
formatter.step({
  "name": "user click book now button",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "",
        "Location",
        "Hotels",
        "RoomType",
        "NoOfRooms",
        "CheckinDate",
        "CheckOutDate",
        "AdultsPerRoom",
        "ChildrensPerRoom",
        "FirstName",
        "LastName",
        "BillingAddress",
        "CreditCardNo",
        "CreditCardType",
        "ExpiryMonth",
        "ExpiryYear",
        "CvvNo"
      ]
    },
    {
      "cells": [
        "Sathyadhev",
        "sathvika",
        "",
        "Sydney",
        "Hotel Creek",
        "Double",
        "5 - Five",
        "12/08/2021",
        "13/08/2021",
        "1 - One",
        "1 - One",
        "Arjunan",
        "Mahadevan",
        "Kumbakonam",
        "1234567899876543",
        "VISA",
        "May",
        "2022",
        "666"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validating login function with valid user name and valid password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on adactin webpage",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.user_is_on_adactin_webpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter the \"Sathyadhev\" and \"sathvika\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_should_enter_the_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_should_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should select hotels by\"Sydney\",\"Hotel Creek\",\"Double\",\"5 - Five\",\"12/08/2021\",\"\u003cCheckOUtDate\u003e\",\"1 - One\",\"1 - One\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_should_select_hotels_by(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "useer should click search button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.useer_should_click_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user confirmation for booking details",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_confirmation_for_booking_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter the \"Arjunan\",\"Mahadevan\",\"Kumbakonam\",\"1234567899876543\",\"VISA\",\"May\",\"2022\",\"666\",",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_enter_the(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click book now button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_click_book_now_button()"
});
formatter.result({
  "status": "passed"
});
});