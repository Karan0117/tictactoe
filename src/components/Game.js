import React, { useRef } from "react";
// styling
import styled from "styled-components";
// components
import GameBlock from "./GameBlock";
// redux
import { useSelector, useDispatch } from "react-redux";
// actions
// import { blocksAction } from "../actions/blocksAction";
import { winAction } from "../actions/winAction";
import { restartAction } from "../actions/restartAction";
import { userReset, userUpdate } from "../actions/userAction";

const Game = () => {
  // reference to game container
  const refGameContainer = useRef();
  // getting data from redux
  let reduxState = useSelector((state) => state);

  let { user, solutions, winStatus, restartStatus } = reduxState;
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

  // console.log(refGameContainer.current.childNodes);

  if (restartStatus.isRestart && !winStatus.isWon) {
    // console.log("time to reset");
    // console.log("just trying", refGameContainer.current);
    refGameContainer.current.childNodes.forEach((item) => {
      // console.log(item.classList);
      item.classList.remove("occupied", "circle", "cross", ".win-block");
    });
    dispatch(restartAction());
    dispatch(userReset());
    // dispatch(winAction());
  }

  ////////////////////// storing records when game is won
  // if (winStatus.isWon) {
  //   dispatch(userUpdate(user.isPlayer1));
  // }

  // event handlers
  const logicHandler = (event) => {
    setTimeout(() => {
      // allBlocks.forEach((block) =>
      //   console.log(
      //     "block",
      //     block,
      //     block.classList,
      //     block.classList.contains("occupied")
      //   )
      // );

      ///////////////////// NEW LOGIC v2
      allBlocks = refGameContainer.current.childNodes;

      // console.log(allBlocks);

      occupiedBlocks = Array.prototype.filter.call(allBlocks, (block) =>
        block.classList.contains("occupied")
      );

      // console.log("occupiedBlocks (new) - ", occupiedBlocks);

      occupiedCircle = occupiedBlocks.filter((occBlock) =>
        occBlock.classList.contains("circle")
      );
      occupiedCross = occupiedBlocks.filter((occBlock) =>
        occBlock.classList.contains("cross")
      );

      // console.log("occupiedCircle (new) - ", occupiedCircle);
      // console.log("occupiedCross (new) - ", occupiedCross);

      // console.log("player Status", user);
      // console.log("solutions", solutions);

      if (user.isPlayer1) {
        activeIDs = occupiedCircle.map((block) => block.id);
      } else {
        activeIDs = occupiedCross.map((block) => block.id);
      }

      // console.log(activeIDs);
      allBlocks.forEach((block) => {
        block.classList.remove("win-block");
        refGameContainer.current.classList.remove("disable");
      });
      for (let i = 0; i < 8; i++) {
        // console.log(i, "-", solutions[i]);
        // console.log(solutions[i].every((item) => activeIDs.includes(item)));
        if (solutions[i].every((item) => activeIDs.includes(item))) {
          // console.log("here is the solution", solutions[i]);
          // console.log("player - ", user.isPlayer1);

          dispatch(winAction());
          dispatch(userUpdate(user.isPlayer1));
          solutions[i].forEach((item) => {
            // document.querySelector(`#${item}`).classList.add("win-block");
            allBlocks.forEach((block) => {
              refGameContainer.current.classList.add("disable");
              if (block.id === item) {
                block.classList.add("win-block");
              }
            });
          });
        }
      }

      //////////////////////

      // console.log("after", allBlocks);
      // if (event.target.classList.contains("box")) { //THIS LOGIC IS WRONG. ALL THE BOXES WILL have the class of .box
      //   occupiedBlocks.push(event.target);
      // dispatch(blocksAction(event.target));
      // }

      // occupiedCircle = occupiedBlocks.filter((block) =>
      //   block.classList.contains("circle")
      // );
      // occupiedCross = occupiedBlocks.filter((block) =>
      //   block.classList.contains("cross")
      // );

      // console.log("isPlayer1 hahhaha", isPlayerOne);
      // console.log("occupiedCircle", occupiedCircle);
      // if (isPlayerOne) {
      //   occupiedCircle.forEach((item) => {
      //     console.log("item", item);
      //     activeIDs.push(item.id);
      //   });
      // } else {
      //   occupiedCross.forEach((item) => {
      //     console.log("item", item);
      //     activeIDs.push(item.id);
      //   });
      // }
      // console.log("activeIDs", activeIDs);
    }, 500);
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
