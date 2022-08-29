import { Socket } from "socket.io-client";
import { IReadyUp } from "../../components/Game/Game";
import { IStartGame } from "../../components/LobbyPage";

class GameService {
    public async joinGameRoom(socket: Socket, roomID: string): Promise<boolean> {
        return new Promise((rs, rj) => {
            socket.emit("join_room", {
                "roomId": roomID
            });

            socket.on("join_room_response", (res) => {
                // server will send a response object after joining room
                if(!("result" in res)) rj("Invalid response object! Requires result field");
                if(res["result"] === "success") {
                    console.log("Successfully joined room: ", roomID)
                    rs(true);
                } else if(res["result"] === "failure") {
                    if(!("reason" in res)) {
                        rj("Invalid response object! Requires reason field");
                    } else {
                        rj("Error joining room: " + res["reason"]);
                    }
                }
            });
        });
    }

    public async onStartGame(socket: Socket, listener: (options: IStartGame) => void) {
        socket.on("start_game", listener);
    }

    public async onReadyUp(socket: Socket, setter : (val: IReadyUp) => void): Promise<boolean> {
        return new Promise((rs, rj) => {
            socket.emit("ready_up");
            socket.on("ready_up_response", setter);
        })
    }

    public async onPlayState(socket: Socket, listener: (val: any) => void): {

    }
}

export default new GameService();