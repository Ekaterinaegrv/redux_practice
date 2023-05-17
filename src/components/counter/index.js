import React, { useState } from 'react';


const Counter = () => {

  const [state, setState] = useState(0)
 

  const increment = () => {
    setState(state+1);

  };
  const decrement = () => {
    setState(state-1);
 
  }
  const reset = () => {
    setState(0);

  }
    return (
      <>
        <div>{state}</div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>reset</button>
      </>
     
    )

}

export default Counter;


