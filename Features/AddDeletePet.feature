Feature: Pet Types

@PetTypeValidation
Scenario Outline: Adding new pet in Pet Types page

Given User is on Pet Types page
When Verify page title
And All the buttons in the page are enabled
And Click on add buttons
And Enter the "<Name>" and click on Save button
Then Count the PetTypes and User should see all the PetTypes
And click on first delete button page and show the deleted pet Name

Examples:
        |Name   |
        |Dog    |



