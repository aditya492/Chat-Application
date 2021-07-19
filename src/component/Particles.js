import React, { Component } from "react";
import Particles from "react-particles-js";
import Particleconfig from "../config/Particleconfig";
import tsparticles from "tsparticles";

export default class Particlesback extends Component {
  render() {
    return (
      <>
        <Particles params={Particleconfig}></Particles>
      </>
    );
  }
}
