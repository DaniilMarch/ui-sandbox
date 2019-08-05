import { ADD_ERROR, CLEAR_ERROR } from "../actions/types";

const initialState = {};

const errorReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case ADD_ERROR:
      return { ...state, [action.payload.name]: action.payload.value };
    case CLEAR_ERROR:
      delete newState[action.payload];
      return newState;
    default:
      return state;
  }
};

export default errorReducer;
