import { loadFeature, defineFeature } from "jest-cucumber";
import App from "../App";
import { render, within, waitFor } from "@testing-library/react";
import { getEvents } from "../api";
import userEvent from "@testing-library/user-event";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  test("By default, event's details section should be hidden.", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    given("User open the app.", () => {
      AppComponent = render(<App />);
    });

    when("User can see the list of event.", async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector("#event-list");

      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole("listitem");
        expect(EventListItems.length).toBe(32);
      });
    });

    then("Event element should be collapsed.", () => {
      const EventDOM = AppComponent.container.firstChild;
      const details = EventDOM.querySelector(".details");
      expect(details).not.toBeInTheDocument();
    });
  });

  test("Shows details section when the user clicks on the 'show details' button", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    given(
      "There is an event in which user is interested among the list.",
      async () => {
        AppComponent = render(<App />);
        const AppDOM = AppComponent.container.firstChild;

        await waitFor(() => {
          const eventList = within(AppDOM).queryAllByRole("listitem");
          expect(eventList[0]).toBeTruthy();
        });
      }
    );

    when("User clicks the event element.", async () => {
      const button = AppComponent.queryAllByText("Show Details")[0];
      await userEvent.click(button);
    });

    then(
      "The event element should be expanded and the detail should be displayed.",
      () => {
        const EventDOM = AppComponent.container.firstChild;
        const details = EventDOM.querySelector(".details");
        expect(details).toBeInTheDocument();
      }
    );
  });

  test("hides the details section when the user clicks on the 'hide details' button", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    let button;
    given("User finished to check the detail.", async () => {
      AppComponent = render(<App />);
      const AppDOM = AppComponent.container.firstChild;

      await waitFor(() => {
        const eventList = within(AppDOM).queryAllByRole("listitem");
        expect(eventList[0]).toBeTruthy();
      });

      button = AppComponent.queryAllByText("Show Details")[0];
      await userEvent.click(button);

      const EventDOM = AppComponent.container.firstChild;
      const details = EventDOM.querySelector(".details");
      expect(details).toBeInTheDocument();
    });

    when("User clicks the event element again.", async () => {
      await userEvent.click(button);
    });

    then("The event should be collapsed and detail should be hidden.", () => {
      const EventDOM = AppComponent.container.firstChild;
      const details = EventDOM.querySelector(".details");
      expect(details).not.toBeInTheDocument();
    });
  });
});
