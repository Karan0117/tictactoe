import React, { useRef } from "react";
// react-redux
import { useSelector, useDispatch } from "react-redux";
// styling
import styled from "styled-components";
// actions
import { userSwitcher } from "../actions/userAction";

const GameBlock = ({ n }) => {
  // reference for the block
  const refGameBlock = useRef();
  // getting data from REDUX
  const userData = useSelector((state) => state.user);
  const isWon = useSelector((state) => state.winStatus.isWon);
  // switching the user on click
  const dispatch = useDispatch();

  // event handlers
  const clickHandler = (event) => {
    if (!isWon) {
      if (!refGameBlock.current.classList.contains("occupied")) {
        refGameBlock.current.classList.add("occupied");
        if (userData.isPlayer1) {
          refGameBlock.current.classList.add("circle");
        } else {
          refGameBlock.current.classList.add("cross");
        }
      }

      dispatch(userSwitcher());
    }
  };

  return (
    <StyledGameBlock
      ref={refGameBlock}
      id={`${n}`}
      className={`box`}
      onClick={clickHandler}
    ></StyledGameBlock>
  );
};

const StyledGameBlock = styled.div`
  background-color: #494747;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.5s ease-out;
  :hover {
    background-color: #7e7b7b;
  }
`;

export default GameBlock;
