import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./App.scss";
import { fetchUsers } from "./asyncActions/customers";
import { decrementAction, incrementAction } from "./store/countReducer";

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.countReducer.count);
  const users = useSelector((state) => state.userReducer.users);
  return (
    <>
      <button
        onClick={() => {
          dispatch(incrementAction());
        }}
      >
        ++
      </button>
      <button
        onClick={() => {
          dispatch(decrementAction());
        }}
      >
        --
      </button>
      <button
        onClick={() => {
          dispatch(fetchUsers());
        }}
      >
        Get users from DB
      </button>
      <div>{count}</div>
      <div>{users}</div>
    </>
  );
};

export default App;
