import React, { Component } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Header = () => {
  return (
    <div id="header">
      <AnchorLink href="#projects-container">Projects</AnchorLink>
      <AnchorLink href="#tech">Tech</AnchorLink>
      <AnchorLink href="#contact">Contact</AnchorLink>
{/* 
      <h4>Projects</h4>
      <h4>Tech</h4>
      <h4>About/Contact</h4> */}
    </div>
  );
};

export default Header;
