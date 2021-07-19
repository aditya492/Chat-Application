import React, { useEffect, useState } from "react";
import { user } from "./join";
import { ToastContainer, toast } from "react-toastify";
import socketio from "socket.io-client";
import "./chat.css";
import "./message.css";
import { IoMdSend } from "react-icons/io";
import { RiChat3Fill } from "react-icons/ri";
import { AiOutlineCloseCircle } from "react-icons/ai";

import Message from "./Message";
import ReactScrollToBottom from "react-scroll-to-bottom";
import { Link } from "react-router-dom";

const ENDPOINT = "https://chat-app-by-adityabarve.herokuapp.com/";
let socket;
function Chat() {
  const [id, setid] = useState("");
  const [messages, setMessage] = useState([1, 2, 3, 4]);

  const send = () => {
    const socket = socketio(ENDPOINT, { transports: ["websocket"] });

    const message = document.getElementById("chatInput").value;
    socket.emit("message", { message, id }); //emit means to send data to client
    document.getElementById("chatInput").value = "";
  };

  useEffect(() => {
    const socket = socketio(ENDPOINT, { transports: ["websocket"] });
    socket.on("connect", () => {
      toast.dark("Server Connected!");
      setid(socket.id);
    });

    socket.emit("joined", { user: user });

    socket.on("Welcome", (data) => {
      setMessage([...messages, data]);
      toast.success(`${data.message}`);
    });

    socket.on("userjoined", (data) => {
      setMessage([...messages, data]);
      toast.success(`${data.message}`);
    });

    socket.on("leave", (data) => {
      setMessage([...messages, data]);
    });

    return () => {
      socket.emit("discon");
      socket.off();
    };
  }, []);

  useEffect(() => {
    const socket = socketio(ENDPOINT, { transports: ["websocket"] });

    socket.on("sendMessage", (data) => {
      setMessage([...messages, data]);
    });

    return () => {
      socket.off();
    };
  }, [messages]);

  return (
    <div>
      <div className="chatPage">
        <div className="chatContainer">
          <div className="header">
            <h3 style={{ fontSize: "x-large", fontStyle: "italic" }}>
              App By Aditya Barve
            </h3>
            <RiChat3Fill size={40} />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Link to="/">
              <AiOutlineCloseCircle size={30} />
            </Link>
          </div>
          <ReactScrollToBottom className="chatBox">
            {messages.map((item, i) => {
              return (
                <Message
                  message={item.message}
                  classs={item.id === id ? "right" : "left"}
                  user={item.id === id ? "" : item.user}
                />
              );
            })}
          </ReactScrollToBottom>
          <div className="inputBox">
            <input
              type="text"
              id="chatInput"
              onKeyPress={(e) => e.key === "Enter" && send()}
            />
            <button onClick={send} className="sendBtn">
              <IoMdSend size={40} />
            </button>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}

export default Chat;
