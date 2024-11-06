import React, { useState } from 'react';

function ExampleComponent() {
  // Declare a state variable called 'count' with an initial value of 0
  const [count, setCount] = useState(0);

  // Function to handle incrementing the count
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  // Function to handle decrementing the count
  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  // Conditional rendering based on the value of 'count'
  let message;
  if (count > 0) {
    message = <p>The count is positive.</p>;
  } else if (count < 0) {
    message = <p>The count is negative.</p>;
  } else {
    message = <p>The count is zero.</p>;
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      {message}
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default ExampleComponent;
