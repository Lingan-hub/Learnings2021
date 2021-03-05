Feature: Validtating Petclinic Functionality

@Ownervalidation
Scenario Outline: Add New Owner functionality testing

Given user Navigate to Petclinic Home page and Verify HomePage Title
When user Clicks on OWNERS dropdown select Add New option from owners dropdown
And verify Title  
And provide vaild owner details as "<First_Name>" "<Last_Name>" "<Address>" "<City>" "<Telephone>"
Then click on Add Owner
And verify whether user is successfull added new owner or not

Examples:
    | First_Name   | Last_Name | Address | City    | Telephone |
    | Protractor   |  Test     | United  | Kingdom | 977546546 |

@Ownervalidation
Scenario: Validate Back button in New Owner Page

Given User is on Home page
When user Clicks on OWNERS dropdown select Add New option from owners dropdown
Then click on Back button










