import React from "react";
import "./App.css";
import {
  incrementCounter,
  decrementCounter,
  incrementByN,
  decrementByN,
  updateN,
  allowIncrementByN,
} from "./actions";
import { rootReducer } from "./reducers";
import { CreateStore } from "./store";

//

function App() {
  const store = CreateStore(rootReducer);
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <div>{store.getState().incrementers.counter}</div>
          <button onClick={() => store.dispatch(incrementCounter())}>
            (+)
          </button>
          <button onClick={() => store.dispatch(decrementCounter())}>
            (-)
          </button>
        </div>
        <div>
          <div>
            <label># to Increment By:</label>
            <input
              onChange={(event) =>
                store.dispatch(updateN(Number(event.target.value)))
              }
            />
          </div>
          <button
            onClick={() => store.dispatch(incrementByN())}
            disabled={!store.getState().allowers.allowed}
          >
            + N
          </button>
          <button
            onClick={() => store.dispatch(decrementByN())}
            disabled={!store.getState().allowers.allowed}
          >
            - N
          </button>
          <div>
            <button onClick={() => store.dispatch(allowIncrementByN())}>
              {store.getState().allowers.allowed
                ? "Disable N Incrementer"
                : "Enable N Incrementer"}
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
