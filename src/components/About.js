import React, { Component } from "react";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <div id="about-container">
      <div id="about-text-container">
      <Fade bottom delay={200} duration={3500} bottom={false}>

        <h2>ABOUT</h2>
          <div id="about-text">
            <p>
              Hi I am a UI/front end developer focusing on modern Javascript,
              React.js, HTML/CSS, Node.js, and UI/UX to create polished yet
              reliable applications using the latest industry technologies. My
              background in art and design lends itself useful when it comes to
              designing layouts, typography, and colors.
            </p>
          </div>
        </Fade>
      </div>
      <Fade bottom delay={300} duration={3500} bottom={false}>
        <div id="social-links">
          <a target="_blank" href="mailto:stephaniejlouie@gmail.com">
            <i class="fas fa-envelope" />
          </a>
          <a target="_blank" href="https://github.com/stephaniee2">
            <i class="fab fa-github" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/stephaniejlouie/"
          >
            <i class="fab fa-linkedin-in" />
          </a>
        </div>
      </Fade>
    </div>
  );
};

export default About;
