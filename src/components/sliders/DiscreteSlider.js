import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Background from "./Background";
import Handle from "./Handle";
import ghost from "./ghost.png";
import { clampToClosestValue } from "../../utils/clamp";

const setDragImage = event => {
  const img = document.createElement("img");
  img.src = ghost;
  event.dataTransfer.setDragImage(img, 0, 0);
};

const DiscreteSlider = ({ values, width, height, handleSize, className }) => {
  const [sliderRef, setSliderRef] = useState(null);
  const [sliderSize, setSize] = useState(null);
  const [sliderValue, setValue] = useState(0);

  const normalizedValues = values.map(
    (value, index) => index / (values.length - 1)
  );
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
    <div className={className}>
      <div className="slider-container" ref={sliderRef}>
        <Background
          height={height}
          width={
            sliderSize ? sliderValue * sliderSize.width + handleSize / 2 : 0
          }
          color="lightblue"
        />
        <Handle
          draggable
          size={handleSize}
          sliderHeight={height}
          offset={sliderSize ? sliderValue * sliderSize.width : 0}
          onDragStart={event => {
            setDragImage(event);
          }}
          onDrag={event => {
            setValue(
              clampToClosestValue(
                (event.clientX - sliderSize.offset - handleSize / 2) /
                  sliderSize.width,
                normalizedValues
              )
            );
          }}
          onDragEnd={event => {
            setValue(
              clampToClosestValue(
                (event.clientX - sliderSize.offset - handleSize / 2) /
                  sliderSize.width,
                normalizedValues
              )
            );
          }}
        />
      </div>
      <div className="ticks-container">
        {values.map((value, index) => (
          <div className="tick-item" key={index} />
        ))}
      </div>
      <div className="values-container">
        {values.map((value, index) => (
          <div className="value-item" key={index}>
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};

const StyledDiscreteSlider = styled(DiscreteSlider)`
  color: grey;
  .slider-container {
    width: ${props => props.width + "px"};
    height: ${props => props.height + "px"};
    border: 1px solid #dddddd;
    border-radius: ${props => props.height / 2 + "px"};
    position: relative;
    box-sizing: border-box;
  }
  .values-container {
    width: ${props => props.width + "px"};
    height: ${props => props.height / 2 + "px"};
    padding-left: ${props => props.handleSize / 2 - 5 + "px"};
    padding-right: ${props => props.handleSize / 2 - 5 + "px"};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    box-sizing: border-box;
  }
  .ticks-container {
    width: ${props => props.width + "px"};
    height: ${props => props.height / 2 + "px"};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    box-sizing: border-box;
    padding-left: ${props => props.handleSize / 2 + "px"};
    padding-right: ${props => props.handleSize / 2 + "px"};
    margin-bottom: 3px;
    .tick-item {
      width: 1px;
      height: 10px;
      background-color: grey;
    }
  }
`;

export default StyledDiscreteSlider;
