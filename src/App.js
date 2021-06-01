import React, { useRef } from "react";
// components
import PlayerInfo from "./components/PlayerInfo";
import Game from "./components/Game";
// styling
import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import { StyledBtn } from "./styles/StyledComponents";
// redux
import { useDispatch, useSelector } from "react-redux";
// actions
import { restartAction } from "./actions/restartAction";
import { registerAction } from "./actions/registerAction";
import { userRegister } from "./actions/userAction";
import { winAction } from "./actions/winAction";
import { newGameAction } from "./actions/newGameAction";

function App() {
  // dispatch
  const dispatch = useDispatch();
  const { winStatus, registerStatus, userInfo, newGameStatus } = useSelector(
    (state) => state
  );

  // ref
  const refRegisterContent = useRef();
  const refRegisterContainer = useRef();

  let registerForm,
    userNames = [];

  //// event handlers
  // restart the game
  const restartHandler = (event) => {
    if (!winStatus.isWon) {
      dispatch(restartAction());
    }
  };

  // new game
  const newGameHandler = (event) => {
    dispatch(newGameAction());
    dispatch(winAction());
  };

  // register
  const registerHandler = (event) => {
    // dispatch(registerAction());
    refRegisterContainer.current.classList.remove("hide");
  };

  // regsiter content handler
  const registerContentHandler = (event) => {
    event.stopPropagation();
    // console.log("register box clicked");
  };

  // register confirm - inside the block
  const registerConfirmHandler = (event) => {
    event.stopPropagation();
    registerForm = refRegisterContent.current;

    // fetching the names from forms
    registerForm.childNodes[1].childNodes.forEach((item) => {
      userNames.push(item.childNodes[1].childNodes[0].value);
    });
    // sending the names to redux
    dispatch(userRegister(userNames));
    // cleaning the inputs
    registerForm.childNodes[1].childNodes.forEach((item) => {
      item.childNodes[1].childNodes[0].value = "";
    });
    dispatch(newGameAction());
    // hiding the dialogue box at the end
    refRegisterContainer.current.classList.add("hide");
  };

  // register boundary click
  const registerCancelHandler = (event) => {
    // event.stopPropagation();
    // dispatch(registerAction());
    refRegisterContainer.current.classList.add("hide");
    // console.log("Boundary Clicked or the cancel btn");
  };

  return (
    <>
      <GlobalStyle />
      <AppContainer className="App">
        {/* {registerStatus.isRegister && ( */}
        <StyledRegisterContainer
          onClick={registerCancelHandler}
          ref={refRegisterContainer}
          className="hide"
        >
          <div
            className="register-content"
            ref={refRegisterContent}
            onClick={registerContentHandler}
          >
            <h1>Register New Players</h1>
            <div className="forms">
              <div className="player-info">
                <h2>Player 1</h2>
                <form autoComplete="off">
                  {/* <label htmlFor="name">Name</label> */}
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Player 1 Name"
                  />
                </form>
              </div>
              <div className="player-info">
                <h2>Player 2</h2>
                <form autoComplete="off">
                  {/* <label htmlFor="name">Name</label> */}
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Player 2 Name"
                  />
                </form>
              </div>
            </div>
            <div className="btns">
              <StyledDoneBtn onClick={registerConfirmHandler}>
                <h3>Register</h3>
              </StyledDoneBtn>
              <StyledCancelBtn onClick={registerCancelHandler}>
                <h3>Cancel</h3>
              </StyledCancelBtn>
            </div>
          </div>
        </StyledRegisterContainer>
        {/* )} */}
        <div className="top-row">
          <h2>View Scoreboard</h2>
          <h1>Tic Tac Toe</h1>
        </div>
        <h2>Timer</h2>
        {/* factor out the player information here and then pass them separately in the PlayerInfo components */}
        <GamesPanel className="games-panel">
          <PlayerInfo num={"1"} userInfo={userInfo.userOne} />
          <Game />
          <PlayerInfo num={"2"} userInfo={userInfo.userTwo} />
        </GamesPanel>
        <StyledControls className="controls">
          {!winStatus.isWon && (
            <StyledBtn className="restart-btn" onClick={restartHandler}>
              <h2>Restart Game</h2>
            </StyledBtn>
          )}
          {winStatus.isWon && (
            <StyledBtn className="new-game-btn" onClick={newGameHandler}>
              <h2>Play Again</h2>
            </StyledBtn>
          )}
          <StyledRegisterBtn className="register-btn" onClick={registerHandler}>
            <h3>Register New Players</h3>
          </StyledRegisterBtn>
        </StyledControls>
      </AppContainer>
    </>
  );
}

const AppContainer = styled.div`
  width: 95%;
  margin: 5rem auto;
  text-align: center;
  .top-row {
  }
`;

const StyledRegisterContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(
    116.32deg,
    rgba(186, 173, 173, 0.48) 0%,
    rgba(53, 44, 44, 0.12) 100%
  );
  backdrop-filter: blur(100px);
  z-index: 10;
  color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;

  .register-content {
    height: 50%;
    width: 50%;
    padding: 2rem;
    border-radius: 2rem;
    background: radial-gradient(
      132.5% 472.42% at -15.74% 49.95%,
      #353535 0%,
      #796565 50%,
      #353535 100%
    );

    .forms {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 5rem;
      .player-info {
        form {
          input {
            height: 3rem;
            width: 13rem;
            font-size: 1rem;
            padding: 0 1rem;
            border-radius: 1rem;
            outline: none;
          }
          input:focus {
            border-color: #719ece;
            box-shadow: 0 0 10px #719ece;
          }
        }
      }
    }
    .btns {
      div {
        margin: 0 1rem;
      }
    }
  }
`;

const StyledDoneBtn = styled(StyledBtn)`
  background: #2b68b3;
  padding: 1rem 3rem;
  display: inline-block;
`;
const StyledCancelBtn = styled(StyledBtn)`
  background: #b33f2b;
  padding: 1rem 3rem;
  display: inline-block;
`;

const GamesPanel = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin: 0 0 3rem;
`;

const StyledControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 10vh;
`;

const StyledRegisterBtn = styled(StyledBtn)`
  background: lightgray;
`;

export default App;
