import { type } from "@testing-library/user-event/dist/type";
import { useDispatch, useSelector } from "react-redux";
import "./App.scss";

const App = () => {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash);
  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash });
  };
  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash });
  };
  return (
    <div className="App">
      <div>{cash}</div>
      <button onClick={() => addCash(Number(prompt()))}>Add Cash</button>
      <button onClick={() => getCash(Number(prompt()))}>Get Cash</button>
    </div>
  );
};

export default App;
