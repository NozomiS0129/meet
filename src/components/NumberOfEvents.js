import React from "react";

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
  const handleInputChanged = (event) => {
    const value = event.target.value;
    setCurrentNOE(value);

    let errorText;
    if (isNaN(value) || value <= 0) {
      errorText = "Minimun 1 is requred";
      setErrorAlert(errorText);
    } else {
      setCurrentNOE(value);
      errorText = "";
      setErrorAlert(errorText);
    }
  };

  return (
    <div id="number-of-events">
      <input type="text" defaultValue="32" onChange={handleInputChanged} />
    </div>
  );
};

export default NumberOfEvents;
