import React, { Component } from "react";

const About = () => {
  return (
    <div id="about-container">
      <div id="about-text-container">
        <h2>ABOUT</h2>
        <div id="about-text">
          <p>
            Hi I am a front end developer with focus in modern Javascript,
            React.js, HTML/CSS, Node.js, and UI/UX to create engaging, reliable
            applications. I integrate my background in art and design to build
            polished applications that are both aesthetic and functional with the latest industry technologies.
          </p>
        </div>
      </div>
      <div id="social-links">
        <a target="_blank" href="mailto:stephaniejlouie@gmail.com">
          <i class="fas fa-envelope" />
        </a>
        <a target="_blank" href="https://github.com/stephaniee2">
          <i class="fab fa-github" />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/stephaniejlouie/">
          <i class="fab fa-linkedin-in" />
        </a>
      </div>
    </div>
  );
};

export default About;
