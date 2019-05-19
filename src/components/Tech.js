import React, { Component } from "react";
import Fade from "react-reveal/Fade";

const Tech = props => {
  const TechData = [
    "https://s3-us-west-1.amazonaws.com/sjl-portfolio-images/tech-stack-icons/javascript.png",
    "https://s3-us-west-1.amazonaws.com/sjl-portfolio-images/tech-stack-icons/html5.png",
    "https://s3-us-west-1.amazonaws.com/sjl-portfolio-images/tech-stack-icons/css3.png",
    "https://s3-us-west-1.amazonaws.com/sjl-portfolio-images/tech-stack-icons/react.png",
    "https://s3-us-west-1.amazonaws.com/sjl-portfolio-images/tech-stack-icons/bootstrap.png",
    "https://s3-us-west-1.amazonaws.com/sjl-portfolio-images/tech-stack-icons/jquery.png",
    "https://s3-us-west-1.amazonaws.com/sjl-portfolio-images/tech-stack-icons/node.png",
    "https://s3-us-west-1.amazonaws.com/sjl-portfolio-images/tech-stack-icons/express.png",
    "https://s3-us-west-1.amazonaws.com/sjl-portfolio-images/tech-stack-icons/mongo.png",
    "https://s3-us-west-1.amazonaws.com/sjl-portfolio-images/tech-stack-icons/mongoose.png",
    "https://s3-us-west-1.amazonaws.com/sjl-portfolio-images/tech-stack-icons/restful.png",
    "https://s3-us-west-1.amazonaws.com/sjl-portfolio-images/tech-stack-icons/jest.png",
    "https://s3-us-west-1.amazonaws.com/sjl-portfolio-images/tech-stack-icons/enzyme.png",
    "https://s3-us-west-1.amazonaws.com/sjl-portfolio-images/tech-stack-icons/mocha.png",
    "https://s3-us-west-1.amazonaws.com/sjl-portfolio-images/tech-stack-icons/chai.png",
    "https://s3-us-west-1.amazonaws.com/sjl-portfolio-images/tech-stack-icons/git.png",
    "https://s3-us-west-1.amazonaws.com/sjl-portfolio-images/tech-stack-icons/github.png",
    "https://s3-us-west-1.amazonaws.com/sjl-portfolio-images/tech-stack-icons/npm.png",
    "https://s3-us-west-1.amazonaws.com/sjl-portfolio-images/tech-stack-icons/webpack.png",
    "https://s3-us-west-1.amazonaws.com/sjl-portfolio-images/tech-stack-icons/babel.png",
    "https://s3-us-west-1.amazonaws.com/sjl-portfolio-images/tech-stack-icons/mac.png",
    "https://s3-us-west-1.amazonaws.com/sjl-portfolio-images/tech-stack-icons/linux.png",
    "https://s3-us-west-1.amazonaws.com/sjl-portfolio-images/tech-stack-icons/photoshop.jpg",
    "https://s3-us-west-1.amazonaws.com/sjl-portfolio-images/tech-stack-icons/illustrator.jpg"
  ];

  return (
    <div id="tech-container">
      <div id="tech-container-inner">
      <Fade bottom delay={300} duration={3500} bottom={false}>
        <h2>FAMILIAR TECHNOLOGIES</h2>
        <div id="tech-imgs-container">
          {TechData.map(tech => {
            return (
              <div className="tech-icon">
                <a>
                  <img src={tech} />
                </a>
              </div>
            );
          })}
        </div>
        </Fade>
      </div>
    </div>
  );
};

export default Tech;
