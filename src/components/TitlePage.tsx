import React, { useState, useEffect, useContext } from "react";
import socketService from "../services/socketService";
import styled from "styled-components";
import gameService from "../services/gameService";
import gameContext from "../gameContext";

const TitleScreenContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2em;
`;

const Title = styled.div`
  font-size: 3em;
  text-align: center;
`;

const PlayButton = styled.button`
  margin-top: 2em;
  width: 20vw;
  height: 8vh;
`;

const RoomIDInput = styled.input`
  margin-top: 5em;
  width: 20vw;
  height: 8vh;
`;

interface ITitleProps {}

export default function TitlePage(props: ITitleProps) {
  const [isJoining, setIsJoining] = useState(false);
  const [roomID, setRoomID] = useState("");
  const { isInRoom, setIsInRoom } = useContext(gameContext);

  const joinRoom = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsJoining(true);
    const socket = socketService.socket;
    if (!roomID || roomID.trim() === "") {
      console.warn("Failed to join room: Invalid room ID");
      setIsJoining(false);
      return;
    }

    if (!socket) {
      console.log("Failed to join room: Socket does not exist");
      setIsJoining(false);
      return;
    }

    const joined = await gameService
      .joinGameRoom(socket, roomID)
      .catch((err) => {
        console.warn("Failed to join room: ", err);
      });

    if (joined) {
      setIsInRoom(true);
    }
    setIsJoining(false);
  };

  const handleRoomIDChange = (e: React.ChangeEvent<any>) => {
    setRoomID(e.target.value);
  };

  return (
    <form onSubmit={joinRoom}>
      <TitleScreenContainer>
        <Title>Junqi</Title>
        <RoomIDInput
        placeholder="Room ID"
        value={roomID}
        onChange={handleRoomIDChange}
        ></RoomIDInput>
        <PlayButton>{isJoining ? "Joining..." : "Play"}</PlayButton>
      </TitleScreenContainer>
    </form>
  );
}
