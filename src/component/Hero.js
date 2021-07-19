import React, { Component } from "react";
import styled from "styled-components";
import { batchLayout, motion, useMotionValue } from "framer-motion";
import planet1 from "../images/planet1.png";
import space from "../images/space.png";
import About from "./About";
import Projects from "./Projects";
import { Link } from "react-router-dom";
import Join from "./join";

const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #131313;
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  heght: 100vh;
  padding: 3rem cals((100vw-1300px)/2);
`;

const Image = styled(motion.img)`
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: 250px;
  max-height: 250px;
  cursor: grabbing;
  margin-top: 111px;
`;
const ColumnLeft = styled.div`
  display: flex;
  color: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 5rem 2rem;
  h1 {
    margin-bottom: 0.5rem;
    font-size: 2rem;
  }
  p {
    margin: 2rem 0;
    font-size: 4rem;
    line-height: 1.1;
  }
`;

const ColumnRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  ${Image}:nth-child(1) {
    top: 10px;
    left: 10px;
  }
  ${Image}:nth-child(2) {
    top: -107px;
    left: 395px;
  }
  ${Image}:nth-child(3) {
    top: 350px;
    left: 50px;
  }
`;

const Button = styled(motion.button)`
  padding: 1rem 3rem;
  font-size: 1rem;
  border: 2px solid #fff;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  background: transparent;
  color: #fff;
`;

class Hero extends Component {
  render() {
    const fadeleft = {
      hidden: { opacity: 0, x: -100 },
      visible: { opacity: 1, x: 0 },
    };

    return (
      <>
        <Section>
          <Container>
            <ColumnLeft>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
              >
                Welcome To The World Of Aditya Barve $$
              </motion.h1>
              <motion.p
                variants={fadeleft}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1 }}
                whileHover={{ scale: 0.9 }}
              >
                Simple Chat App By Adtya Barve
              </motion.p>
              <Join />
              {/* <Link to="/chat">
                <Button
                  onClick={this.movedown}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{
                    scale: 0.9,
                    backgroundColor: "#67f6e7",
                    border: "none",
                  }}
                >
                  Go And Chat
                </Button>
              </Link> */}
            </ColumnLeft>
            <ColumnRight>
              <Image
                src={planet1}
                alt="planet"
                whileHover={{ scale: 0.9 }}
                drag={true}
                dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
              />
              <Image
                src={space}
                alt="planet"
                whileHover={{ scale: 0.9 }}
                drag={true}
                dragConstraints={{ left: 0, right: 180, top: 0, bottom: 50 }}
              />
            </ColumnRight>
          </Container>
        </Section>
        <section style={{ Background: "beige" }}>
          <About />
        </section>
      </>
    );
  }
  movedown = () => {
    console.log("hie");
    window.scrollTo({ top: 850.5, behavior: "smooth" });
  };
}

export default Hero;
