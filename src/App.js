import React from "react";
import { Provider } from "react-redux";
import "normalize.css";

import store from "./store";
import MainWrapper from "./components/wrappers/MainWrapper";
import MainForm from "./components/form";
import Sliders from "./components/sliders";

const App = () => {
  return (
    <Provider store={store}>
      <MainWrapper header="First wrapper" desc="Firts description">
        <div>Hello</div>
      </MainWrapper>
      <MainWrapper header="Main form" desc="Form description">
        <MainForm />
      </MainWrapper>
      <MainWrapper header="Sliders">
        <Sliders />
      </MainWrapper>
    </Provider>
  );
};

export default App;
