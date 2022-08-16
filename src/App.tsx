import React, { useEffect, useState } from "react";
import "./App.css";
import styled from "styled-components";
import TitlePage from "./components/TitlePage";
import socketService from "./services/socketService";
import GameContext, { IGameContextProp } from "./gameContext";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
`;

function App() {
  const [isInRoom, setIsInRoom] = useState(false);

  const connectSocket = async () => {
    if (!process.env.REACT_APP_SERVER_URL) {
      console.warn("Could not find server url in config");
      return;
    }
    console.log("attempting connection");
    const socket = await socketService
      .connect(process.env.REACT_APP_SERVER_URL)
      .catch((err) => {
        console.log("Error: ", err);
      });
  };

  useEffect(() => {
    connectSocket();
  }, []);

  const gameContextValue: IGameContextProp = {
    isInRoom,
    setIsInRoom,
  };

  return (
    <GameContext.Provider value={gameContextValue}>
      <AppContainer>
        <TitlePage></TitlePage>
      </AppContainer>
    </GameContext.Provider>
  );
}

export default App;
