import React, {useState} from 'react';

// imports useState for React hooks, ONLY works inside of a function component

// useState hooks MUST run in the same order, and can NOT be nested or used conditionally

function App() {

 const [ state, setState ] = useState({ count: 4, theme: 'blue'});
 const count = state.count;
 const theme = state.theme;

  function decrementCount() {
    
      setState(prevState => {
        return { ...prevState, count: prevState.count - 1 };
    })
    
}

function incrementCount() {
  setState(prevState => {
    return { ...prevState, count: prevState.count + 1 };
})
}

   return (
    <>
      <button onClick={decrementCount}> - </button>
        <span>{count} {theme}</span>
      <button onClick={incrementCount}> + </button><br />
    
    </>
  );
}

export default App;
