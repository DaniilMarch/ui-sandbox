import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { clamp } from "../../utils/clamp";
import ghost from "./ghost.png";
import Background from "./Background";
import Handle from "./Handle";

const setDragImage = event => {
  const img = document.createElement("img");
  img.src = ghost;
  event.dataTransfer.setDragImage(img, 0, 0);
};

const SimpleSlider = ({ className, width, handleSize, height }) => {
  const [sliderRef, setSliderRef] = useState(null);
  const [sliderSize, setSize] = useState(null);
  const [sliderValue, setValue] = useState(0);
  useEffect(() => {
    setSliderRef(React.createRef());
  }, []);
  useEffect(() => {
    if (sliderRef) {
      setSize({
        width: width - handleSize,
        offset: sliderRef.current.offsetLeft
      });
    }
  }, [sliderRef]);
  return (
    <div className={className} ref={sliderRef}>
      <Background
        height={height}
        width={sliderSize ? sliderValue * sliderSize.width + handleSize / 2 : 0}
        color="lightblue"
      />
      <Handle
        draggable
        size={handleSize}
        onDrag={event => {
          setValue(
            clamp(
              (event.clientX - sliderSize.offset - handleSize / 2) /
                sliderSize.width,
              0,
              1
            )
          );
        }}
        onDragStart={event => {
          setDragImage(event);
        }}
        onDragEnd={event => {
          setValue(
            clamp(
              (event.clientX - sliderSize.offset - handleSize / 2) /
                sliderSize.width,
              0,
              1
            )
          );
        }}
        offset={sliderSize ? sliderValue * sliderSize.width : 0}
        sliderHeight={height}
      />
    </div>
  );
};

const StyledSimpleySlide = styled(SimpleSlider)`
  height: ${props => props.height + "px"};
  width: ${props => props.width + "px"};
  border: 1px solid #dddddd;
  border-radius: ${props => props.height / 2 + "px"};
  position: relative;
  box-sizing: border-box;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export default StyledSimpleySlide;
