import React, { useRef } from "react";
// styling
import styled from "styled-components";
// components
import GameBlock from "./GameBlock";
// redux
import { useSelector, useDispatch } from "react-redux";
// actions
import { blocksAction } from "../actions/blocksAction";

const Game = () => {
  // reference to game container
  const refGameContainer = useRef();
  // getting data from redux
  let isPlayerOne = useSelector((state) => state.user.isPlayer1);
  // dispatch
  const dispatch = useDispatch();

  const num = [];
  for (let i = 1; i < 10; i++) {
    num.push(i);
  }

  let allBlocks,
    occupiedBlocks = [],
    occupiedCircle = [],
    occupiedCross = [],
    activeIDs = [];

  // event handlers
  const logicHandler = (event) => {
    setTimeout(() => {
      // allBlocks = refGameContainer.current.childNodes;
      // allBlocks.forEach((block) =>
      //   console.log(
      //     "block",
      //     block,
      //     block.classList,
      //     block.classList.contains("occupied")
      //   )
      // );

      if (event.target.classList.contains("box")) {
        occupiedBlocks.push(event.target);
        dispatch(blocksAction(event.target));
      }

      occupiedCircle = occupiedBlocks.filter((block) =>
        block.classList.contains("circle")
      );
      occupiedCross = occupiedBlocks.filter((block) =>
        block.classList.contains("cross")
      );

      // console.log("isPlayer1 hahhaha", isPlayerOne);
      console.log("occupiedCircle", occupiedCircle);
      if (isPlayerOne) {
        occupiedCircle.forEach((item) => {
          console.log("item", item);
          activeIDs.push(item.id);
        });
      } else {
        occupiedCross.forEach((item) => {
          console.log("item", item);
          activeIDs.push(item.id);
        });
      }
      console.log("activeIDs", activeIDs);
    }, 1000);
  };

  return (
    <GameContainer ref={refGameContainer} onClick={logicHandler}>
      {num.map((n) => (
        <GameBlock n={n} key={n} />
      ))}
    </GameContainer>
  );
};

const GameContainer = styled.div`
  width: 40vw;
  height: 45vh;
  display: grid;
  margin: 0 5rem;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  background: black;
`;

export default Game;
