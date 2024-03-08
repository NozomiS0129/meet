import { loadFeature, defineFeature } from "jest-cucumber";
import App from "../App";
import { render, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  test("32 events are displayed by default.", ({ given, when, then }) => {
    let AppComponemt;
    let eventList;
    given("User hasn’t specified the number of event.", () => {
      AppComponemt = render(<App />);
    });

    when("User sees the list of events.", async () => {
      const AppDOM = AppComponemt.container.firstChild;
      await waitFor(() => {
        eventList = within(AppDOM).queryAllByRole("listitem");
        expect(eventList[0]).toBeTruthy();
      });
    });

    then("32 events are displayed by default.", () => {
      expect(eventList.length).toEqual(32);
    });
  });

  test("Change the number of diaplayed event.", ({ given, when, then }) => {
    let AppComponemt;
    given(
      /^(\d+) event are shown after selecting a suggestion.$/,
      async (arg0) => {
        AppComponemt = render(<App />);
        const AppDOM = AppComponemt.container.firstChild;
        await waitFor(() => {
          const eventList = within(AppDOM).queryAllByRole("listitem");
          expect(eventList[0]).toBeTruthy();
        });
      }
    );

    when("User enters 10 at form.", async () => {
      const input = AppComponemt.queryByTestId("number-of-event-input");
      await userEvent.type(input, "{backspace}{backspace}10");
    });

    then("10 events should be displayed.", async () => {
      const AppDOM = AppComponemt.container.firstChild;
      const eventList = within(AppDOM).queryAllByRole("listitem");
      expect(eventList.length).toEqual(10);
    });
  });
});
