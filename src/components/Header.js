import React, { Component } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Header = () => {
  return (
    <div id="header">
     <h4><AnchorLink href="#home-banner">home</AnchorLink></h4>
     <h4><AnchorLink href="#projects-container">projects</AnchorLink></h4>
     <h4><AnchorLink href="#about-container">about</AnchorLink></h4>
    </div>
  );
};

export default Header;
