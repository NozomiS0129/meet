# MEET app

## Description

Users can use this application to view upcoming events for a specific city. Users can filter events by city and check the detail by clicking it. This application can be used when there's no internet connection.

## Technology

This is a serverless, progressive web application with REACT using test-driven development technique.

## Dependency

the Google Calendar API

## Features

### Feature1: Filter Events By City

As a user, I should be able to filter events by city so that I can see a list of events taking place in that city.

#### Scenario1

Given: User hasn’t searched for any city.
When: The user opens the app.
Then: The user should see a list of upcoming events.

#### Scenario2

Given: The main page is open.
When: User starts typing in the city textbox.
Then: The user should receive a list of cities (suggestions) that match what they’ve typed.

#### Scenario3

Given: User was typing “Berlin” in the city textbox AND the list of suggested cities is showing.
When: The user selects a city (e.g., “Berlin, Germany”) from the list.
Then: Their city should be changed to that city (i.e., “Berlin, Germany”) AND the user should receive a list of upcoming events in that city.

### Feature2: Show/Hide Event Details

As a user, I should be able to make events collapsed by default, so that I can expand to see details.

#### Scenario1

Given: Some events are shown but user can not see the details since the event element is collapsed.
When: User can see the list of event.
Then: The upcoming events are shown.

#### Scenario2

Given: There is an event in which user is interested among the list.
When: User clicks the event element.
Then: The event element should be expanded and the detail should be displayed.

#### Scenario3

Given: User finished to check the detail.
When: User clicks the event element again.
Then: The event should be collapsed and detail should be hidden.

### Feature3: Specify Number of Events

As a user, I should be able to show 32 events by default so that I can specify the number of events display.

#### Scenario1

Given: User selects a suggestion of city name.
When: User hasn’t specified the number of event.
Then: 32 events are displayed by default.

#### Scenario2

Given: 32 event are shown after selecting a suggestion.
When: User enters 10 at form.
Then: 10 events should be displayed.

### Feature4: Use the App When Offline

As a user, I should be able to show cached data and error message when there’s no internet connection so that I can use the app when offline.

#### Scenario1

Given: There’s no internet connection.
When: User opens the app.
Then: Cached data should be shown.

#### Scenario2

Given: User enters different city name when offline.
When: Search setting has been changed by user input.
Then: An error message should be shown.

### Feature5: Add an App Shortcut to the Home Screen

As a user, I should be able to make an App shortcut so that I can install the app on their device home screen.

#### Scenario1

Given: User haves to search the app.
When: User installs the app as a shortcut on their device home screen.
Then: User can access the app quickly.

### Feature6: Display Charts Visualizing Event Details

As a user, I should be able to show a chart with the number of upcoming events in each city so that I can check visualized event details.

#### Scenario1

Given: User have to search events by typing city names one by one.
When: Charts are edited if there are any upcoming events.
Then: User can check visualized event details.

### Serverless functions

In the MEET app, serverless functions play a crucial role, particularly in handling authorization processes. Accessing the Google Calendar API, a protected public API, necessitates a valid access token. AWS Lambda is utilized to facilitate the provision of this access token, ensuring secure access between users and the API. This approach offers several advantages, including reduced costs and scalability.
