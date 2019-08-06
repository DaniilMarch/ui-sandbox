import React, { useEffect } from "react";
import { Field } from "redux-form";
import styled from "styled-components";
import { connect } from "react-redux";
import cn from "classnames";

import {
  validateField,
  clearError,
  fieldMount,
  fieldUnmount
} from "../../../actions/formActions";

const InputField = ({
  label,
  name,
  type,
  placeholder,
  className,
  validationParams,
  fieldError,
  clearError,
  validateField,
  icon,
  fieldMount,
  fieldUnmount
}) => {
  useEffect(() => {
    fieldMount(name, label, validationParams);
    return () => fieldUnmount(name);
  }, []);
  return (
    <div className={className}>
      <label>{label}</label>
      <div className="input-container">
        <div className={cn("icon-container", { "icon-invalid": fieldError })}>
          {icon}
        </div>
        <Field
          component="input"
          type={type ? type : "text"}
          placeholder={placeholder}
          name={name}
          onBlur={(event, newValue) =>
            validateField(name, newValue, label, validationParams)
          }
          onChange={() => clearError(name)}
          className={cn({ invalid: fieldError })}
        />
      </div>
      <div className="error-display">{fieldError}</div>
    </div>
  );
};

const StyledInputField = styled(InputField)`
  label {
    display: ${props => (props.inline ? "inline-block" : "block")};
    font-size: 1.5rem;
    margin-bottom: 5px;
    margin-top: 10px;
    ${props => (props.inline ? "margin-right: 10px" : "")}
    opacity: 0.6;
  }
  input {
    display: "inline-block";
    border: 1px solid #dddddd;
    border-radius: ${props => (props.icon ? "0px 5px 5px 0px" : "5px")};
    box-sizing: border-box;
    font-size: 1.5rem;
    padding: 5px;
    margin-bottom: 5px;
    height: 2.5rem;
  }
  .input-container {
    display: ${props => (props.inline ? "inline-block" : "block")};
  }
  .icon-container {
    display: ${props => (props.icon ? "inline-flex" : "none")};
    align-items: center;
    justify-content: center;
    border: 1px solid #dddddd;
    box-sizing: border-box;
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 5px 0px 0px 5px;
    background-color: #dddddd;
    color: white;
    &.icon-invalid {
      border-top: 1px solid indianred;
      border-bottom: 1px solid indianred;
      border-left: 1px solid indianred;
    }
  }
  input:focus {
    outline: none;
    border: 1px solid skyblue;
  }
  input::placeholder {
    opacity: 0.2;
  }
  .invalid {
    border: 1px solid indianred;
  }
  .error-display {
    color: indianred;
    margin-bottom: 10px;
    height: 24px;
  }
  @media (max-width: 768px) {
    label {
      margin-left: auto;
      margin-right: auto;
      width: 60%;
      text-align: center;
      display: block;
    }
    input {
      width: 80%;
      margin-left: auto;
      margin-right: auto;
    }
    .error-display {
      width: 80%;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

const mapStateToProps = (state, ownProps) => ({
  fieldError: state.error[ownProps.name]
});

export default connect(
  mapStateToProps,
  { validateField, clearError, fieldMount, fieldUnmount }
)(StyledInputField);
