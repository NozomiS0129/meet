Feature: Specify number of displayed events
  Scenario: 32 events are displayed by default.
    Given User hasn’t specified the number of event.
    When User sees the list of events.
    Then 32 events are displayed by default.

  Scenario: Change the number of diaplayed event.
    Given 32 event are shown after selecting a suggestion.
    When User enters 10 at form.
    Then 10 events should be displayed.
