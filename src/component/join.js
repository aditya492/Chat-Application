import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import "../App.css";
import { ToastContainer, toast } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";

const Button1 = styled(motion.button)`
  padding: 1rem 3rem;
  font-size: 1rem;
  border: 2px solid #fff;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  background: transparent;
  color: #fff;
`;
const Button2 = styled(motion.button)`
  padding: 1rem 3rem;
  font-size: 1rem;
  border: 2px solid #fff;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  background: transparent;
  color: #fff;
  margin-left: 27px;
`;

let user;

const sendUser = () => {
  user = document.getElementById("joinInput").value;
  document.getElementById("joinInput").value = "";
};
const move = () => {
  console.log("hie");
  window.scrollTo({ top: 850.5, behavior: "smooth" });
};
if (typeof window !== "undefined") {
  injectStyle();
}

const Join = () => {
  const [name, setName] = useState("");
  const emptyError = (event) => {
    const check = !name ? event.preventDefault() : null;
    toast.error("Please Enter Name");
  };
  return (
    <div>
      <div>
        <input
          onChange={(e) => setName(e.target.value)}
          id="joinInput"
          placeholder="Enter Name Here"
          className="input"
          autoComplete="off"
        />
      </div>

      <div>
        <Link
          to="/chat"
          onClick={(event) => emptyError(event)}
          onKeyPress={(e) => e.key === "Enter" && sendUser()}
        >
          <Button1
            onClick={sendUser}
            whileHover={{ scale: 1.05 }}
            whileTap={{
              scale: 0.9,
              backgroundColor: "#67f6e7",
              border: "none",
            }}
          >
            Go & Chat
          </Button1>
        </Link>
        <Button2
          onClick={move}
          whileHover={{ scale: 1.05 }}
          whileTap={{
            scale: 0.9,
            backgroundColor: "#67f6e7",
            border: "none",
          }}
        >
          About Aditya Barve
        </Button2>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Join;
export { user };
