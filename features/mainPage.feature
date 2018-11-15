Feature:  The https://cloud.google.com/blog/ main menu test

    @CucumberScenario
    Scenario: First scenario
        Given I navigate to main page
        And I check i am on main page
        And I check headings on main menu:
        | 1      | Latest Stories | 
        | 2      | Product News   |
        | 3      | Topics         |
        And I click "Topics" heading
        Then I am on Topics page
        Then I check the presence of Research element
        When I click "Product News" heading
        Then I am on Product News page
        Then there is no Research element on this page




