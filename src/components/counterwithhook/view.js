import React, { useState, useEffect } from 'react';

function CounterHook() {
  // Declare a new variable a set down it as “count”
  const [count, setCount] = useState(0);

  useEffect(() => {
      document.title = 'You have clicked ${count} times'
  })

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default CounterHook