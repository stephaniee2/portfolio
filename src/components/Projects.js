import React, { Component } from "react";
import ProjModal from "./ProjModal";
import ProjectData from "./ProjectData";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";
import MyVerticallyCenteredModal from "./ProjModal";
import ReactRevealText from "react-reveal-text/lib/ReactRevealText";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      projectSelected: null,
      show0: false,
      show1: false,
      show2: false,
      show3: false,
      show4: false
    };
  }

  onMouseEnter = proj => {
    this.setState({ [proj]: true });
  };
  onMouseLeave = proj => {
    this.setState({ [proj]: false });
  };

  render = () => {
    let modalClose = () =>
      this.setState({ modalShow: false, projectSelected: null });

    return (
      <div id="projects-container">
        <h2>PROJECTS</h2>
        <div id="projects-only-container">
          {ProjectData.map((proj, i) => {
            let key = "show" + i;
            // console.log(key)
            return (
              <div className="individual-proj">
                {/* {this.state} */}
                <ButtonToolbar
                  onMouseEnter={() => {
                    this.onMouseEnter(key);
                  }}
                  onMouseLeave={() => {
                    this.onMouseLeave(key);
                  }}
                >
                  <Button
                    variant="primary"
                    onClick={() => {
                      this.setState({ modalShow: true });
                      this.setState({ projectSelected: proj });
                    }}
                  >
                    <div className="preview-img-container">
                      <img
                        className="preview-img"
                        src={proj.previewImg}
                        alt="Project preview"
                      />
                    </div>
                  </Button>
                  {/* {console.log(this.state.projectSelected)} */}
                  {this.state.projectSelected && (
                    <MyVerticallyCenteredModal
                      show={this.state.modalShow}
                      onHide={modalClose}
                      selectedProj={this.state.projectSelected}
                    />
                  )}
                </ButtonToolbar>

                <p className="proj-name">
                  <ReactRevealText show={this.state[key]}>
                    {proj.name}
                  </ReactRevealText>
                </p>
                <p className="proj-type">
                  <ReactRevealText show={this.state[key]}>
                    {proj.type}
                  </ReactRevealText>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
}

export default Projects;
