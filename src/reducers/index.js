import { combineReducers } from "redux";
import { reducer } from "redux-form";

import errorReducer from "./errorReducer";

export default combineReducers({
  form: reducer,
  test: () => 5,
  error: errorReducer
});
