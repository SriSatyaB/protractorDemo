@test
Feature: To validate the calculator functionality

@calctest
Scenario: To validate addition on calculator
Given user navigates to the calc site
When  user enters "3" abnd "4"
And user clicks on go button
Then the result should be "8"

@angulartest
Scenario: To validate search functionlaity in angular site
Given user navigates to angular site
When user enters "api" in search field
Then user should be able to see the related results


    