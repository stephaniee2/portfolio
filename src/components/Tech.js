import React, { Component } from "react";

const Tech = props => {
  const TechData = ["img URL here", "img URL here"];

  return (
    <div>
      <h1>Tech Stack</h1>
      <div>
        {TechData.map(tech => {
          return(<div>{tech}</div>);
        })}
      </div>
    </div>
  );
};

export default Tech;
