import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NumberOfEvents from "../components/NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsComponent;
  beforeEach(() => {
    NumberOfEventsComponent = render(
      <NumberOfEvents setCurrentNOE={() => {}} setErrorAlert={() => {}} />
    );
  });

  test("contains an element with the role of the textbox", () => {
    const numberTextBox = NumberOfEventsComponent.queryByRole("textbox");
    expect(numberTextBox).toBeInTheDocument();
  });

  test("32 events are rendered as default", () => {
    expect(NumberOfEventsComponent.queryByRole("textbox")).toHaveValue("32");
  });

  test("value of the number of events is changed according to user input", async () => {
    const numberOfEvents = NumberOfEventsComponent.queryByRole("textbox");
    const user = userEvent.setup();
    await user.type(numberOfEvents, "{backspace}{backspace}10");
    expect(numberOfEvents).toHaveValue("10");
  });
});
