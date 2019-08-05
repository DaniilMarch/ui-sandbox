import React from "react";
import { reduxForm } from "redux-form";

import InputField from "./input/InputField";

const MainForm = () => {
  return (
    <div>
      <form>
        <InputField
          name="email"
          label="Email"
          validationParams={{ email: true, required: true }}
        />
      </form>
    </div>
  );
};

const formConnected = reduxForm({ form: "main" })(MainForm);

export default formConnected;
