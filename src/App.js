import React, { useReducer } from "react";
import "./App.css";

const reducer = (state, action) => {
  if (action.type == "INCREMENT_COUNTER") {
    return { ...state, counter: state.counter + 1 };
  } else if (action.type == "DECREMENT_COUNTER") {
    return { ...state, counter: state.counter - 1 };
  } else {
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
        <button onClick={() => dispatch({ type: "INCREMENT_COUNTER" })}>
          (+)
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT_COUNTER" })}>
          (-)
        </button>
      </header>
    </div>
  );
}

export default App;
