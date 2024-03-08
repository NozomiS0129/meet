Feature: Show and hide event details
  Scenario: By default, event's details section should be hidden.
    Given User open the app.
    When User can see the list of event.
    Then Event element should be collapsed.

  Scenario: Shows details section when the user clicks on the 'show details' button
    Given There is an event in which user is interested among the list.
    When User clicks the event element.
    Then The event element should be expanded and the detail should be displayed.

  Scenario: hides the details section when the user clicks on the 'hide details' button
    Given User finished to check the detail.
    When User clicks the event element again.
    Then The event should be collapsed and detail should be hidden.
