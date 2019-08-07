import styled from "styled-components";

const Background = styled.div.attrs(props => ({
  style: { width: props.width + "px" }
}))`
  position: absolute;
  height: ${props => props.height + "px"};
  border-radius: ${props => props.height / 2 + "px"};
  background-color: ${props => props.color};
  left: 0px;
`;

export default Background;
