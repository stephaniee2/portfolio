import React, { Component } from "react";

const About = () => {
  return (
    <div id="about-container">
      <div id="about-text-container">
        <h1>About</h1>
        <div id="about-text">
          <p>
            I am a front end developer with focus in modern Javascript,
            React.js, HTML/CSS, Node.js, and UI/UX to build engaging, reliable
            applications
          </p>
        </div>
      </div>
      <div id="social-media-links">
        <i class="fas fa-envelope" />
        <i class="fab fa-github" />
      </div>
    </div>
  );
};

export default About;
