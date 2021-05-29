import React from "react";
// styling
import styled from "styled-components";

const GameBlock = () => {
  return (
    <StyledGameBlock>
      <p>GameBlock</p>
    </StyledGameBlock>
  );
};

const StyledGameBlock = styled.div`
  /* width: 100%;
  height: 100%; */
  background: lightblue;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default GameBlock;
