import React from "react";
import { Provider } from "react-redux";
import "normalize.css";

import store from "./store";
import MainWrapper from "./components/wrappers/MainWrapper";
import MainForm from "./components/form";

const App = () => {
  return (
    <Provider store={store}>
      <MainWrapper header="First wrapper" desc="Firts description">
        <div>Hello</div>
      </MainWrapper>
      <MainWrapper header="Main form" desc="Form description">
        <MainForm />
      </MainWrapper>
    </Provider>
  );
};

export default App;
