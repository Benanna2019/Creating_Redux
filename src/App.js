import React, { useReducer } from "react";
import "./App.css";

//
const INCREMENT_COUNTER = "INCREMENT_COUNTER";
const DECREMENT_COUNTER = "DECREMENT_COUNTER";

const INCREMENT_BY_N = "INCREMENT_BY_N";
const DECREMENT_BY_N = "DECREMENT_BY_N";

const UPDATE_N = "UPDATE_N";

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

function incrementByN() {
  return {
    type: INCREMENT_BY_N,
  };
}

function decrementByN() {
  return {
    type: DECREMENT_BY_N,
  };
}

function updateN(n) {
  return {
    type: UPDATE_N,
    n: n,
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
    case UPDATE_N:
      return { ...state, n: action.n };
    case INCREMENT_BY_N:
      return { ...state, counter: state.counter + state.n };
    case DECREMENT_BY_N:
      return { ...state, counter: state.counter - state.n };
    default:
      return state;
  }
};

const initialState = {
  counter: 0,
  n: 0,
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <div>{state.counter}</div>
          <button onClick={() => dispatch(incrementCounter())}>(+)</button>
          <button onClick={() => dispatch(decrementCounter())}>(-)</button>
        </div>
        <div>
          <div>
            <label># to Increment By:</label>
            <input
              onChange={(event) =>
                dispatch(updateN(Number(event.target.value)))
              }
            />
          </div>
          <button onClick={() => dispatch(incrementByN())}>+ N</button>
          <button onClick={() => dispatch(decrementByN())}>- N</button>
        </div>
      </header>
    </div>
  );
}

export default App;
