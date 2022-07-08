import { combineReducers, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { countReducer } from "./countReducer";
import { userReducer } from "./userReducer";

const rootReducer = combineReducers({
  countReducer,
  userReducer,
});
export const store = createStore(rootReducer, composeWithDevTools());
