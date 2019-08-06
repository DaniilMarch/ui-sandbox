import React from "react";
import { reduxForm } from "redux-form";

import InputField from "./input/InputField";
import TextAreaField from "./input/TextAreaField";
import RadioField from "./input/RadioField";

const MainForm = ({ handleSubmit }) => {
  return (
    <div>
      <form noValidate onSubmit={handleSubmit(formValues => {})}>
        <InputField
          name="email"
          label="Email"
          validationParams={{ email: true, required: true }}
          placeholder="Your email"
          type="email"
        />
        <InputField
          name="username"
          label="Username"
          validationParams={{ required: true, length: { min: 4, max: 30 } }}
          placeholder="Your username"
        />
        <InputField
          name="password"
          label="Password"
          validationParams={{ required: true, length: { min: 6, max: 30 } }}
          placeholder="Password"
          type="password"
        />
        <InputField
          name="password2"
          label="Confirm password"
          validationParams={{
            match: { valueToMatch: "password", label: "Passwords" }
          }}
          placeholder="Confirm password"
          type="password"
        />
        <TextAreaField
          name="description"
          label="Description"
          placeholder="Tell us about yourself"
        />
        <RadioField
          label="Radio input"
          name="radio"
          options={[
            { value: "one", label: "One" },
            { value: "two", label: "Two" }
          ]}
        />
      </form>
    </div>
  );
};

const formConnected = reduxForm({ form: "main" })(MainForm);

export default formConnected;
