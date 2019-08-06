import React from "react";
import styled from "styled-components";

const MainWrapper = ({ header, desc, children, className }) => {
  return (
    <div className={className}>
      <p className="header">{header}</p>
      <p className="desc">{desc}</p>
      {children}
    </div>
  );
};

const StyledWrapper = styled(MainWrapper)`
  font-family: sans-serif;
  padding: 30px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 20px;
  -webkit-box-shadow: 3px 3px 10px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 3px 3px 10px -3px rgba(0, 0, 0, 0.75);
  box-shadow: 3px 3px 10px -3px rgba(0, 0, 0, 0.75);
  border-radius: 5px;

  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 992px) {
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }

  .header {
    font-size: 2rem;
    margin: 0;
  }
  .desc {
    border-bottom: 1px solid #dddddd;
    padding-bottom: 5px;
    font-style: italic;
  }
`;

export default StyledWrapper;
