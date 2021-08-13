Feature: validating login function of Adactin website

Scenario Outline: Validating login function with valid user name and valid password
Given user is on adactin webpage
When user should enter the "<username>" and "<password>"
And user should click login button
And user should select hotels by"<Location>","<Hotels>","<RoomType>","<NoOfRooms>","<CheckinDate>","<CheckOUtDate>","<AdultsPerRoom>","<ChildrensPerRoom>"
And useer should click search button
And user confirmation for booking details
And user enter the "<FirstName>","<LastName>","<BillingAddress>","<CreditCardNo>","<CreditCardType>","<ExpiryMonth>","<ExpiryYear>","<CvvNo>",
And user click book now button

Examples:
|username  |password||Location     |Hotels         |RoomType     |NoOfRooms|CheckinDate|CheckOutDate|AdultsPerRoom|ChildrensPerRoom|FirstName |LastName |BillingAddress |CreditCardNo    |CreditCardType|ExpiryMonth|ExpiryYear|CvvNo|
|Sathyadhev|sathvika||Sydney       |Hotel Creek    |Double       |5 - Five |12/08/2021 |13/08/2021  |1 - One      |1 - One         |Arjunan   |Mahadevan|Kumbakonam     |1234567899876543|VISA          |May        |2022      |666  |