import React from "react";
import HTML5Backend from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

import SimpleSlider from "./SimpleSlider";

const Sliders = () => {
  return (
    <div>
      <SimpleSlider width={300} handleSize={30} height={20} />
    </div>
  );
};

export default Sliders;
