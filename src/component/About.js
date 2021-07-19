import React, { Component } from "react";
import adi from "../images/adi.jpg";
import Tilt from "react-tilt";
import styled from "styled-components";
import { batchLayout, motion, useMotionValue } from "framer-motion";
import { Link } from "react-router-dom";

const Button = styled(motion.button)`
  padding: 1rem 3rem;
  font-size: 1rem;
  border: 2px solid black;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  background: transparent;
  color: black;
`;
class About extends Component {
  render() {
    return (
      <>
        <div style={{ marginTop: -21, background: "aliceblue" }}>
          <h2 style={{ display: "flex", justifyContent: "center" }}>About</h2>
          <Tilt options={{ max: 30 }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img src={adi} height={330} marginLeft={405} />
            </div>
          </Tilt>
        </div>

        <div
          style={{
            marginTop: 26,
            marginLeft: 162,
            marginRight: 119,
            fontSize: 24,
            fontWeight: 300,
          }}
        >
          Hie i'm Aditya Barve ,Persuing B.tech from Medicaps University a
          FrontEnd/Reactjs Developer with Passion in Web Developement and
          Designing,Currently studying Information Technology at Medicaps
          University.
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 60 }}
        >
          <a href="https://upbeat-knuth-d6d382.netlify.app/">
            <Button
              whileHover={{ scale: 1.05 }}
              whileTap={{
                scale: 0.9,
                backgroundColor: "#67f6e7",
                border: "none",
              }}
            >
              Go To Potfolio!
            </Button>
          </a>
        </div>
      </>
    );
  }
}

export default About;
