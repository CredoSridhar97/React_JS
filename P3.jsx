import React, { useState } from 'react';

function DateTimeDisplay() {
  // Declare a state variable called 'dateTime' with an initial value of an empty string
  const [dateTime, setDateTime] = useState('');

  // Function to handle button click and update the dateTime state
  const handleClick = () => {
    const now = new Date();  
    setDateTime(now);
  };

  return (
    <div>
      <h1>Date and Time Display</h1>
      <button onClick={handleClick}>Show Date and Time</button>
      {dateTime && <p>Current Date and Time: {dateTime}</p>}
    </div>
  );
}

export default DateTimeDisplay;
