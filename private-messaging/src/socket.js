import { io } from "socket.io-client";

const URL = "https://private-chat.augy.xyz:3000";
const socket = io(URL, { autoConnect: false });

socket.onAny((event, ...args) => {
  console.log(event, args);
});

export default socket;
