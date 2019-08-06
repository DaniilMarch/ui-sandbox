import React from "react";
import { Field } from "redux-form";
import styled from "styled-components";
import { connect } from "react-redux";
import cn from "classnames";

import { validateInput, clearError } from "../../../actions/formActions";

const TextAreaField = ({
  label,
  name,
  type,
  placeholder,
  className,
  validationParams,
  fieldError,
  clearError,
  validateInput
}) => {
  return (
    <div>
      <div className={className}>
        <label>{label}</label>
        <Field
          component="textarea"
          type={type ? type : "text"}
          placeholder={placeholder}
          name={name}
          onBlur={(event, newValue) => {
            if (validationParams) {
              validateInput(name, newValue, label, validationParams);
            }
          }}
          onChange={() => clearError(name)}
          className={cn({ invalid: fieldError })}
        />
        <div className="error-display">{fieldError}</div>
      </div>
    </div>
  );
};

const StyledTextAreaField = styled(TextAreaField)`
  label {
    display: block;
    font-size: 1.5rem;
    margin-bottom: 5px;
    margin-top: 10px;
    opacity: 0.6;
  }
  textarea {
    display: block;
    padding: 5px;
    resize: none;
    border-radius: 5px;
    width: 60%;
    height: 100px;
  }

  textarea:focus {
    outline: none;
    border: 1px solid skyblue;
  }
  .error-display {
    color: indianred;
    margin-bottom: 10px;
    height: 16px;
  }
  @media (max-width: 768px) {
    label {
      margin-left: auto;
      margin-right: auto;
      width: 60%;
      text-align: center;
    }
    textarea {
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

const mapStateToProps = (state, ownProps) => {
  return { fieldError: state.error[ownProps.name] };
};

export default connect(
  mapStateToProps,
  { validateInput, clearError }
)(StyledTextAreaField);
