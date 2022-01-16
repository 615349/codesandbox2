import { Action, ActionType, StateType } from "./types";
import { useReducer, MouseEvent } from "react";

const initialState: StateType = {
  count: 0
};

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case Action.increase:
      return {
        ...state,
        count: state.count + action.payload
      };

    case Action.decrease:
      return {
        ...state,
        count: state.count - action.payload
      };

    default:
      return state;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrease = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    dispatch({ type: Action.increase, payload: 5 });
  };

  const handleDecrease = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    dispatch({ type: Action.decrease, payload: 4 });
  };

  return (
    <div className="App">
      <div>count: {state.count}</div>
      <div style={{ marginTop: "8px", marginBottom: "8px" }}>
        <button onClick={handleIncrease}>INC</button>
      </div>
      <div>
        <button onClick={handleDecrease}>DEC</button>
      </div>
    </div>
  );
}

