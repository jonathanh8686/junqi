import { Socket } from "socket.io-client";

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

    public async startGame(socket: Socket, listener: (options: IStartGame) => void) {
        socket.on("start_game", listener)
    }
}

export default new GameService();