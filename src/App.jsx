import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  // useState内部原理
  // let memoizedState;	
  // function useState (initialState) {	
  //   memoizedState = memoizedState || initialState	
  //   function setState (newState) {	
  //     memoizedState = newState	
  //     render()	
  //   }	
  //   return [memoizedState, setState]	
  // }

  return (
    <div className="App">
      <button onClick={() => {setCount(count + 1)}}></button>
      <p>count: { count }</p>
    </div>
  );
}

export default App;
