import styled from "styled-components";

const Handle = styled.div.attrs(props => ({ style: { left: props.offset } }))`
  height: ${props => props.size + "px"};
  width: ${props => props.size + "px"};
  top: ${props => -(props.size - props.sliderHeight) / 2 + "px"};
  position: absolute;
  border-radius: 50%;
  border: 1px solid #dddd;
  background-color: skyblue;
  box-sizing: border-box;
  cursor: pointer;
  &:active {
    cursor: grabbing;
  }
`;

export default Handle;
