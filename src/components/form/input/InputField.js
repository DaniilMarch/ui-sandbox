import React from "react";
import { Field } from "redux-form";
import styled from "styled-components";
import { connect } from "react-redux";
import cn from "classnames";

import { validateInput, clearError } from "../../../actions/formActions";

const InputField = ({
  label,
  name,
  type,
  placeholder,
  className,
  validateInput,
  validationParams,
  fieldError,
  clearError
}) => {
  return (
    <div className={className}>
      <label>{label}</label>
      <Field
        component="input"
        type={type ? type : "text"}
        placeholder={placeholder}
        name={name}
        onBlur={(event, newValue) =>
          validateInput(name, newValue, label, validationParams)
        }
        onChange={() => clearError(name)}
        className={cn({ invalid: fieldError })}
      />
      {fieldError && <div className="error-display">{fieldError}</div>}
    </div>
  );
};

const StyledInputField = styled(InputField)`
  label {
    display: block;
    font-size: 1.5rem;
    margin-bottom: 10px;
    opacity: 0.6;
  }
  input {
    display: block;
    border: 1px solid #dddddd;
    border-radius: 5px;
    box-sizing: border-box;
    font-size: 1.5rem;
    padding: 5px;
    margin-bottom: 5px;
  }
  input:focus {
    outline: none;
  }
  .invalid {
    border: 1px solid indianred;
  }
  .error-display {
    color: indianred;
  }
`;

const mapStateToProps = (state, ownProps) => ({
  fieldError: state.error[ownProps.name]
});

export default connect(
  mapStateToProps,
  { validateInput, clearError }
)(StyledInputField);
