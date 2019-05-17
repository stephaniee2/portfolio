import React, { Component } from "react";
import { hot } from "react-hot-loader/root";
// import AnchorLink from 'react-anchor-link-smooth-scroll';
import Home from "./Home";
import Projects from "./Projects";
import Tech from "./Tech";
import About from "./About";
import Header from "./Header";
import Footer from "./Footer";

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
        <Projects />
        <About />
        <Tech />
        <Footer />
      </div>
    );
  }
}

export default hot(Main);
