import React, { useRef, useEffect } from "react";
// styling
import styled from "styled-components";
// redux
import { useSelector } from "react-redux";

const PlayerInfo = ({ num, userInfo }) => {
  // reference
  let refPlayerContainer = useRef();

  // getting data back from the redux
  let { user, winStatus, restartStatus } = useSelector((state) => state);

  useEffect(() => {
    if (num === "1" && user.isPlayer1) {
      refPlayerContainer.current.classList.add("player-1-borders");
    }
    if (num !== "1" && user.isPlayer1) {
      refPlayerContainer.current.classList.remove("player-2-borders");
      refPlayerContainer.current.classList.add("general-border");
    }
    if (num === "2" && !user.isPlayer1) {
      refPlayerContainer.current.classList.add("player-2-borders");
    }
    if (num !== "2" && !user.isPlayer1) {
      refPlayerContainer.current.classList.remove("player-1-borders");
      refPlayerContainer.current.classList.add("general-border");
    }
    if (winStatus.isWon) {
      if (user.isPlayer1) {
        if (num === "2") {
          refPlayerContainer.current.classList.remove("general-border");
          refPlayerContainer.current.classList.remove("player-1-borders");
          refPlayerContainer.current.classList.add("player-2-borders");
        }
        if (num !== "2") {
          refPlayerContainer.current.classList.add("general-border");
          refPlayerContainer.current.classList.remove("player-2-borders");
          refPlayerContainer.current.classList.remove("player-1-borders");
        }
      } else {
        if (num === "1") {
          refPlayerContainer.current.classList.remove("general-border");
          refPlayerContainer.current.classList.remove("player-2-borders");
          refPlayerContainer.current.classList.add("player-1-borders");
        }
        if (num !== "1") {
          refPlayerContainer.current.classList.add("general-border");
          refPlayerContainer.current.classList.remove("player-2-borders");
          refPlayerContainer.current.classList.remove("player-1-borders");
        }
      }
    }
    if (restartStatus.isRestart) {
      if (num === "1") {
        refPlayerContainer.current.classList.add("player-1-borders");
        refPlayerContainer.current.classList.remove("general-border");
      }
      if (num === "2") {
        refPlayerContainer.current.classList.remove("player-2-borders");
        refPlayerContainer.current.classList.add("general-border");
      }
      // switch (num) {
      //   case "1":
      //     refPlayerContainer.current.classList.remove("general-border");
      //     refPlayerContainer.current.classList.add("player-1-borders");
      //     break;
      //   case "2":
      //     refPlayerContainer.current.classList.add("general-border");
      //     refPlayerContainer.current.classList.remove("player-2-borders");
      //     break;
      //   default:
      //     refPlayerContainer.current.classList.add("general-border");
      // }
    }
  }, [num, user.isPlayer1, winStatus.isWon, restartStatus.isRestart]);

  return (
    <PlayerContainer ref={refPlayerContainer} className="general-border">
      <h4>Player {num}</h4>
      <h1>{userInfo.name}</h1>
      <div className="won-lost">
        <div className="win">
          <h3>Games Won</h3>
          <p>{userInfo.countWin}</p>
        </div>
        <div className="lose">
          <h3>Games Lost</h3>
          <p>{userInfo.countLost}</p>
        </div>
      </div>
    </PlayerContainer>
  );
};

const PlayerContainer = styled.div`
  width: 30vw;
  height: 30vh;
  transition: border 0.5s ease-out;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  h4 {
    opacity: 0.7;
  }
  h1 {
    margin: -2rem 0 0 0;
  }
  .won-lost {
    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 1rem;
      h3 {
        padding: 0 2rem 0rem 0;
      }
    }
  }
`;

export default PlayerInfo;
