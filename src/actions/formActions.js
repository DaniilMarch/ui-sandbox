import { ADD_ERROR, CLEAR_ERROR } from "./types";
import validator from "validator";

import isEmpty from "../utils/isEmpty";

export const validateInput = (name, value, label, validationParams) => (
  dispatch,
  getState
) => {
  const errors = {};
  value = isEmpty(value) ? "" : value;
  if (validationParams.email) {
    if (!validator.isEmail(value)) {
      errors.value = "Email incorrect";
    }
  }
  if (validationParams.required) {
    if (validator.isEmpty(value)) {
      errors.value = `${label} is required`;
    }
  }
  if (validationParams.url) {
    if (!validator.isURL(value)) {
      errors.value = "URL incorrect";
    }
  }

  if (validationParams.length) {
    if (!validator.isLength(value, validationParams.length)) {
      errors.value = `${label} must be between ${
        validationParams.length.min
      } and ${validationParams.length.max} symbols`;
    }
  }

  if (validationParams.match) {
    const valueToMatch = getState().form.main.values[
      validationParams.match.valueToMatch
    ];
    if (!validator.equals(value, valueToMatch) && valueToMatch) {
      errors.value = `${validationParams.match.label} must match`;
    }
  }

  if (isEmpty(errors)) {
    dispatch({ type: CLEAR_ERROR, payload: name });
  } else {
    errors.name = name;
    dispatch({ type: ADD_ERROR, payload: errors });
  }
};

export const clearError = name => {
  return { type: CLEAR_ERROR, payload: name };
};
