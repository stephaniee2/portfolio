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
              Hi I am a software developer who enjoys creating polished yet
              reliable applications using the latest industry technologies. I
              got my start in coding a few years ago when people began asking me
              to design websites for them since I knew how to graphic design on
              computers... Not quite the same thing but I gave it a try anyway,
              beginning with HTML, CSS, and Javascript, and found it
              fascinating. The more I coded the more I liked it,
              and pursued it professionally. That was years ago and I've been on
              the coding train ever since, diving into the world of programming
              and software development, and enjoying the challenges and
              intellectual rewards that come with it.
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
