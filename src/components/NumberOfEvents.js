import React from "react";

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
  const handleInputChanged = (event) => {
    const value = event.target.value;
    setCurrentNOE(value);

    let errorText;
    if (isNaN(value) || value <= 0) {
      errorText = "You must enter a positive number to continue.";
      setErrorAlert(errorText);
    } else {
      setCurrentNOE(value);
      errorText = "";
    }
    setErrorAlert(errorText);
  };

  return (
    <div id="number-of-events">
      <input
        data-testid="number-of-event-input"
        type="text"
        defaultValue="32"
        onChange={handleInputChanged}
      />
    </div>
  );
};

export default NumberOfEvents;
