import React, { Component } from "react";
import ProjModal from "./ProjModal";
import ProjectData from "./ProjectData";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  render() {
    return(
    <div>
      {}
      <ProjModal />
    </div>
    )
  }
}

export default Projects;
