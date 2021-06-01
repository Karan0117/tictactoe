import React from "react";
// styling
import styled from "styled-components";

const RegisterPlayer = () => {
  return (
    <StyledRegisterContainer>
      <h2>Register yourself</h2>
    </StyledRegisterContainer>
  );
};

const StyledRegisterContainer = styled.div`
  display: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 80%;
  margin: 10rem auto;
  background: black;
  z-index: 10;
`;

export default RegisterPlayer;
