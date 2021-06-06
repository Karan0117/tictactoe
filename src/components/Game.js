import React, { useRef, useEffect } from "react";
// styling
import styled from "styled-components";
// components
import GameBlock from "./GameBlock";
// redux
import { useSelector, useDispatch } from "react-redux";
// actions
import { winAction } from "../actions/winAction";
import { restartAction } from "../actions/restartAction";
import { sideReset, userUpdate } from "../actions/userAction";
import { newGameAction } from "../actions/newGameAction";

const Game = () => {
  // reference to game container
  const refGameContainer = useRef();
  // getting data from redux
  let reduxState = useSelector((state) => state);

  let { user, solutions, winStatus, restartStatus, newGameStatus } = reduxState;
  // dispatch
  const dispatch = useDispatch();

  const num = [];
  for (let i = 1; i < 10; i++) {
    num.push(i);
  }

  let allBlocks,
    allBlocksArr,
    isAllOccupied,
    occupiedBlocks = [],
    occupiedCircle = [],
    occupiedCross = [],
    activeIDs = [];

  // if the player decides to restart without winning the existing game
  if (restartStatus.isRestart && !winStatus.isWon) {
    refGameContainer.current.childNodes.forEach((item) => {
      item.classList.remove(
        "occupied",
        "circle",
        "cross",
        "win-block",
        "draw-block"
      );
    });
    dispatch(restartAction());
    dispatch(sideReset());
  }

  // Playing new Game - Play Again
  useEffect(() => {
    if (newGameStatus.isNewGame) {
      refGameContainer.current.childNodes.forEach((item) => {
        item.classList.remove(
          "occupied",
          "circle",
          "cross",
          "win-block",
          "draw-block"
        );
      });
      refGameContainer.current.classList.remove("disable");
      dispatch(sideReset());
      dispatch(newGameAction());
    }
  }, [newGameStatus.isNewGame, dispatch]);

  // event handlers
  const logicHandler = (event) => {
    setTimeout(() => {
      allBlocks = refGameContainer.current.childNodes;
      allBlocksArr = Array.from(allBlocks);

      occupiedBlocks = Array.prototype.filter.call(allBlocks, (block) =>
        block.classList.contains("occupied")
      );

      occupiedCircle = occupiedBlocks.filter((occBlock) =>
        occBlock.classList.contains("circle")
      );
      occupiedCross = occupiedBlocks.filter((occBlock) =>
        occBlock.classList.contains("cross")
      );

      if (user.isPlayer1) {
        activeIDs = occupiedCircle.map((block) => block.id);
      } else {
        activeIDs = occupiedCross.map((block) => block.id);
      }

      allBlocks.forEach((block) => {
        block.classList.remove("win-block");
        block.classList.remove("draw-block");
        refGameContainer.current.classList.remove("disable");
      });
      for (let i = 0; i < 8; i++) {
        if (solutions[i].every((item) => activeIDs.includes(item))) {
          dispatch(winAction());
          dispatch(userUpdate(user.isPlayer1));
          refGameContainer.current.classList.add("disable"); // disabling the grid so no further changes can be made
          // finding out the result blocks and changing their background color to green to identify
          solutions[i].forEach((item) => {
            allBlocks.forEach((block) => {
              if (block.id === item) {
                block.classList.add("win-block");
              }
            });
          });
        }
      }

      // adding a class to all the blocks when there is a draw
      isAllOccupied = allBlocksArr.every((block) =>
        block.classList.contains("occupied")
      );
      if (isAllOccupied) {
        allBlocks.forEach((block) => {
          block.classList.add("draw-block");
        });
      }
    }, 300);
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
