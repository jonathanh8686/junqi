import React, { useContext, useEffect } from "react";
import gameContext from "../gameContext";
import gameService from "../services/gameService";
import socketService from "../services/socketService";

export interface IStartGame {
    start: boolean;
    startingPlayer: string;
}

export default function Game() {
    const { isInRoom, setIsInRoom, gameStarted, setGameStarted } = useContext(gameContext);
    const handleGameStart = () => {
        if (socketService.socket) {
            gameService.onStartGame(socketService.socket, (options: IStartGame) => {
                setGameStarted(options["start"]);
            });
        }
    };

    useEffect(() => {
        handleGameStart();
    }, []);

    return <div>
        {gameStarted ? "game started" : "waiting for second player"}
    </div>;
}
