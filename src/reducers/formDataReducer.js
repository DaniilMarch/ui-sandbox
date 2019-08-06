import { FIELD_MOUNT, FIELD_UNMOUNT } from "../actions/types";

const initialState = {};

const formDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FIELD_MOUNT:
      return {
        ...state,
        [action.payload.name]: {
          label: action.payload.label,
          validationParams: action.payload.validationParams
        }
      };
    case FIELD_UNMOUNT:
      const newState = { ...state };
      delete newState[action.payload];
      return newState;
    default:
      return state;
  }
};

export default formDataReducer;
