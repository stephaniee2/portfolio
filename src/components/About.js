import React, { Component } from "react";

const About = () => {
  return (
    <div>
      <div id="my-photo">IMAGE HERE</div>
      <div id="about-text-container">
        <h1>About</h1>
        <p>this is a paragraph about myself</p>
        <br />
        <p>contact me at HERE</p>
      </div>
      <div id="social-media-links">
        {/* <img href=""><img src=""></img></img> */}
        <i class="fab fa-github"></i>
      </div>
    </div>
  );
};

export default About;
