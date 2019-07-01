import React, { Component } from "react";
import { hot } from "react-hot-loader/root";
import Home from "./Home";
import Projects from "./Projects";
import Tech from "./Tech";
import About from "./About";
import Header from "./Header";
import Footer from "./Footer";
import MediaQuery from "react-responsive";
import ConfettiGenerator from "confetti-js";

class Main extends Component {

  render() {
    return (
      <div>
        <MediaQuery query="(min-device-width: 1224px)">
          <div>
            <Header />
            <Home />
            <Projects />
            <About />
            <Tech />
            <Footer />
          </div>
        </MediaQuery>
        <MediaQuery query="(max-device-width: 1224px)">
          <div>
            <Home />
            <Projects />
            <About />
            <Tech />
            <Footer />
          </div>
        </MediaQuery>
      </div>
    );
  }
}

export default hot(Main);
