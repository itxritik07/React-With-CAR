import React from 'react'
import { useState } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1)
    }
  };
  const decValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  };


  return (
    <div>
      <h1>Adding and Removing values</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>add</button>
      <button onClick={decValue}>dec</button>
    </div>
  )
}

export default App

