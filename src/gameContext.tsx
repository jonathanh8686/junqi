import React from "react";
import { Socket } from "socket.io-client";

export interface IGameContextProp {
    isInRoom: boolean;
    setIsInRoom: (inRoom: boolean) => void;
    gameStarted: boolean;
    setGameStarted: (started: boolean) => void;
};

const defaultState: IGameContextProp = {
    isInRoom: false,
    setIsInRoom: () => {console.log("Default isInRoom setting called")},
    gameStarted: false,
    setGameStarted: () => {console.log("Default gameStarted setting called")},
};

export default React.createContext(defaultState);