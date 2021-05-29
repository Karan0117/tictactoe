import React from "react";
// styling
import styled from "styled-components";

const PlayerInfo = () => {
  return (
    <PlayerContainer>
      <h4>Player 1</h4>
      <h2>KAGE</h2>
      <div className="won-lost">
        <div className="win">
          <h4>Games Won</h4>
          <p>5</p>
        </div>
        <div className="lose">
          <h4>Games Lost</h4>
          <p>1</p>
        </div>
      </div>
      <h4>
        Streak: <span>5</span>
      </h4>
    </PlayerContainer>
  );
};

const PlayerContainer = styled.div`
  width: 30vw;
  border: 1px solid #eeb13b;
  text-align: center;
  .won-lost {
    div {
      /* border: 2px solid red; */
      display: flex;
      align-items: center;
      justify-content: space-evenly;
    }
  }
`;

export default PlayerInfo;
