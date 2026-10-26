import { useState } from 'react';


const App = () => {
  const [counter, setCounter] = useState(0);
  // const [Counter, prevCounter] = useState(0)


  const addValue = () => {
    setCounter(counter + 1);
    console.log("add clicked", Math.random());
  };

  const decValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
      console.log("dec clicked", Math.random());
    }
  };

  // const addValue = () => {
  //   if (counter < 20) {
  //     // Interview Qna:
  //     // setCounter(counter + 1);
  //     // setCounter(counter + 1)
  //     // setCounter(counter + 1)
  //     // setCounter(counter + 1) // returns as first same

  //     // actually function - 
  // setCounter(prevCounter => prevCounter + 1)
  // setCounter(prevCounter => prevCounter + 1)
  // setCounter(prevCounter => prevCounter + 1)
  // setCounter(prevCounter => prevCounter + 1)
  // setCounter(prevCounter => prevCounter + 1) // now it changes
  //   }
  // };


  return (
    <div>
      <h1>Adding and Removing values</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>add</button>
      <button onClick={decValue}>dec</button>
    </div>
  );
};

export default App;