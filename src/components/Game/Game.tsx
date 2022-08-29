import React, { useContext, useEffect } from "react";
import styled from "styled-components"
import gameContext from "../../gameContext";
import gameService from "../../services/gameService";
import socketService from "../../services/socketService";

const ReadyButton = styled.button`
  margin-top: 2em;
  width: 20vw;
  height: 8vh;
`;
const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
`;

export interface IReadyUp {
    state: boolean
}

export default function Game() {
    const { isInRoom, setIsInRoom, gameStarted, setGameStarted, isReady, setIsReady } = useContext(gameContext);
    
    const readyUp = () => {
        if(socketService.socket){
            gameService.onReadyUp(socketService.socket, (val:IReadyUp) => {
                setIsReady(val["state"]);
            });
        }
    }

    useEffect(() => {
        onPlayState(socketService.socket, val);
    }, []);

    return <GameContainer>
        {gameStarted ? <ReadyButton onClick={readyUp}>{isReady ? "Unready" : "Ready"}</ReadyButton> : <div>waiting for second player</div>}
    </GameContainer>
}
