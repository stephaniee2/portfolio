import React, { Component } from "react";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <div id="about-container">
      <div id="about-text-container">
        <Fade bottom delay={200} duration={3500} bottom={false}>
          <h2>ABOUT</h2>
          <div id="about-text">
            <p className="about-me">
              Hi and welcome. I'm a software developer who enjoys creating
              polished applications using the latest and greatest industry
              technologies. A versatile developer with interests in FrontEnd and
              UI design, I am capable of understanding the engineering and design
              aspects when it comes to building apps.
              <br />
              <br />
              I'm always open to sharing new ideas, new resources, and meeting
              fellow developers and creatives, so please feel free to reach out.
            </p>
            {/* <div id="resources">
              <p>
                I am always learning, constantly striving to improve my skills.
                Here are a few resources I like and hope you'll like them too.
              </p>
              <div id="links">
                <div className="link">
                  <a href="https://dev.to/" target="_blank">DEV - an online programming community for sharing and discovering great ideas </a>
                  <a href="https://jstherightway.org/" target="_blank">JS the Right Way - guide intended to introduce new developers to JavaScript and help experienced developers learn more about its best practices </a>
                
                </div>
              </div>
            </div> */}
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
