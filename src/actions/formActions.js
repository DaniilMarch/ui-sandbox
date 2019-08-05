import { ADD_ERROR, CLEAR_ERROR } from "./types";
import validator from "validator";

import isEmpty from "../utils/isEmpty";

export const validateInput = (name, value, label, validationParams) => {
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
  if (isEmpty(errors)) {
    return { type: CLEAR_ERROR, payload: name };
  } else {
    errors.name = name;
    return { type: ADD_ERROR, payload: errors };
  }
};

export const clearError = name => {
  return { type: CLEAR_ERROR, payload: name };
};
