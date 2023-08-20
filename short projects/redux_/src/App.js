import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index";
import store from "./store";

function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <>
      <div className="container">
        <h1>Increment/Decrement Counter</h1>
        <h4>Using React and Redux</h4>

        <div className="quantity">
          <a
            className="quantity__minus"
            title="Decrement"
            onClick={() => {
              dispatch(decNumber(5));
            }}
          >
            <span> - </span>
          </a>
          <input
            type="text"
            className="quantity__input"
            name="quantity"
            value={myState}
          />
          <a
            title="Increment"
            className="quantity__plus"
            onClick={() => dispatch(incNumber(5))}
          >
            <span> + </span>
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
