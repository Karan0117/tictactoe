import React from "react";
// styling
import styled from "styled-components";
// components
import GameBlock from "./GameBlock";

const Game = () => {
  return (
    <GameContainer>
      <GameBlock />
      <GameBlock />
      <GameBlock />
      <GameBlock />
      <GameBlock />
      <GameBlock />
      <GameBlock />
      <GameBlock />
      <GameBlock />
    </GameContainer>
  );
};

const GameContainer = styled.div`
  width: 40vw;
  height: 50vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  background: lightpink;
`;

export default Game;
