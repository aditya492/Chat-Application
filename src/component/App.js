import React, { Component } from "react";
import Hero from "./Hero";
import Particlesback from "./Particles";
import socketio from "socket.io-client";

const ENDPOINT = "http://localhost:4500/";
const socket = socketio(ENDPOINT, { transports: ["websocket"] });
class App extends Component {
  render() {
    socket.on("connect", () => {});
    return (
      <>
        <Hero />
      </>
    );
  }
}

export default App;
