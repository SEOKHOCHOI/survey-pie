import React from "react";
import styled from "styled-components";

const Title = ({ children }) => {
  return (
    <TitleWrpper>
      <span>Q.</span>
      {children}
    </TitleWrpper>
  );
};

const TitleWrpper = styled.h1`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: #121111;
  margin: 0;

  span {
    margin-right: 12px;
  }
`;

export default Title;
