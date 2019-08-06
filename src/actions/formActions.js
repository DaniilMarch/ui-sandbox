import { ADD_ERROR, CLEAR_ERROR, FIELD_MOUNT, FIELD_UNMOUNT } from "./types";
import validator from "validator";

import isEmpty from "../utils/isEmpty";
import validateInput from "../utils/validateInput";

export const validateField = (name, value, label, validationParams) => (
  dispatch,
  getState
) => {
  const errors = validateInput(value, label, validationParams, getState);
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

export const submitForm = formValues => (dispatch, getState) => {
  //initialize errors object
  const errors = {};
  for (let key in getState().form.main.registeredFields) {
    //get additional data from store
    const formData = getState().formData[key];
    //if no additional data, no further steps
    if (isEmpty(formData)) continue;
    const { label, validationParams } = formData;
    //if validation params are present, validate input
    if (validationParams) {
      const error = validateInput(
        formValues[key],
        label,
        validationParams,
        getState
      );
      if (!isEmpty(error)) {
        //if there is an error, dispach new error and add to errors object
        error.name = key;
        errors[key] = error;
        dispatch({ type: ADD_ERROR, payload: error });
      }
    }
  }
  if (isEmpty(errors)) {
    console.log("Successful submit");
  } else {
    console.log("No submit");
  }
};

export const fieldMount = (name, label, validationParams) => {
  return { type: FIELD_MOUNT, payload: { name, label, validationParams } };
};

export const fieldUnmount = name => {
  return { type: FIELD_UNMOUNT, payload: name };
};
