import React from "react";
// components
import PlayerInfo from "./components/PlayerInfo";
import Game from "./components/Game";
// styling
import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer className="App">
        <div className="top-row">
          <h2>View Scoreboard</h2>
          <h1>Tic Tac Toe</h1>
        </div>
        <h2>Timer</h2>
        {/* factor out the player information here and then pass them separately in the PlayerInfo components */}
        <GamesPanel className="games-panel">
          <PlayerInfo />
          <Game />
          <PlayerInfo />
        </GamesPanel>
        <div className="restart-btn">
          <h1>Restart Game</h1>
        </div>
        <div className="register-btn">
          <h1>Register New Players</h1>
        </div>
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

const GamesPanel = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export default App;
