import React from "react";
import HTML5Backend from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

import SimpleSlider from "./SimpleSlider";
import DiscreteSlider from "./DiscreteSlider";

const Sliders = () => {
  return (
    <div>
      <h3>Simple slider</h3>
      <SimpleSlider width={300} handleSize={30} height={20} />
      <h3>Discrete slider</h3>
      <DiscreteSlider
        width={600}
        height={20}
        handleSize={30}
        values={[1, 2, 3, 4, 5]}
      />
    </div>
  );
};

export default Sliders;
