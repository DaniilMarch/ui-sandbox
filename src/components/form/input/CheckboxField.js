import React from "react";
import { Field } from "redux-form";
import styled from "styled-components";

const CheckboxField = ({ className, label, options, name }) => {
  return (
    <div className={className}>
      <label className="group-label">{label}</label>
      {options.map(option => (
        <label htmlFor={option.value} className="container">
          {option.label}{" "}
          <Field component="input" type="checkbox" name={option.value} />
          <span className="checkmark" />
        </label>
      ))}
    </div>
  );
};

const StyledCheckboxField = styled(CheckboxField)`
  margin-bottom: 10px;
  margin-top: 10px;

  .group-label {
    display: block;
    font-size: 1.5rem;
    margin-bottom: 5px;
    margin-top: 10px;
    opacity: 0.6;
  }

  .container {
    display: block;
    position: relative;
    cursor: pointer;
    font-size: 1.3rem;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    padding-left: 35px;
    margin-bottom: 10px;
    color: rgba(0, 0, 0, 0.6);

    input {
      z-index: 3px;
      position: absolute;
      left: 0;
      top: 0;
      width: 20px;
      height: 20px;
      opacity: 0;
      cursor: pointer;
    }
    .checkmark {
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: -1;
      width: 20px;
      height: 20px;
      position: absolute;
      top: 0;
      left: 0;
      background-color: #eee;
    }
    .checkmark:after {
      content: "";
      position: absolute;
      display: none;
    }
    input:checked ~ .checkmark:after {
      display: block;
    }
    input:checked ~ .checkmark {
      background-color: #2196f3;
    }
    input:checked:hover ~ .checkmark {
      background-color: #2196f3;
    }
    input:hover ~ .checkmark {
      background-color: #ccc;
    }
    .checkmark:after {
      width: 5px;
      height: 10px;
      border: solid white;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }
`;

export default StyledCheckboxField;
