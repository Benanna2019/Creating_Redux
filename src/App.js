import React, { useReducer } from "react";
import "./App.css";

//
const INCREMENT_COUNTER = "INCREMENT_COUNTER";
const DECREMENT_COUNTER = "DECREMENT_COUNTER";

//action types
function incrementCounter() {
  return {
    type: INCREMENT_COUNTER,
  };
}

function decrementCounter() {
  return {
    type: DECREMENT_COUNTER,
  };
}

const reducer = (state, action) => {
  // if (action.type == "INCREMENT_COUNTER") {
  //   return { ...state, counter: state.counter + 1 };
  // } else if (action.type == "DECREMENT_COUNTER") {
  //   return { ...state, counter: state.counter - 1 };
  // } else {
  //   return state;
  // }

  switch (action.type) {
    case INCREMENT_COUNTER:
      return { ...state, counter: state.counter + 1 };
    case DECREMENT_COUNTER:
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};

const initialState = {
  counter: 0,
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <header className="App-header">
        {state.counter}
        <button onClick={() => dispatch(incrementCounter())}>(+)</button>
        <button onClick={() => dispatch(decrementCounter())}>(-)</button>
      </header>
    </div>
  );
}

export default App;
