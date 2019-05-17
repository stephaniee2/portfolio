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
      show: false
    };
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  onMouseEnter() {
    console.log("true");
    this.setState({ show: true });
  }
  onMouseLeave() {
    console.log("false");
    this.setState({ show: false });
  }

  render() {
    let modalClose = () =>
      this.setState({ modalShow: false, projectSelected: null });

    return (
      <div id="projects-container">
        <h2>PROJECTS</h2>
        <div id="projects-only-container">
          {ProjectData.map((proj, i) => {
            return (
              <div>
                <ButtonToolbar
                  onMouseEnter={this.onMouseEnter}
                  onMouseLeave={this.onMouseLeave}
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

                  {this.state.projectSelected && (
                    <MyVerticallyCenteredModal
                      show={this.state.modalShow}
                      onHide={modalClose}
                      selectedProj={this.state.projectSelected}
                    />
                  )}
                </ButtonToolbar>

                <ReactRevealText
                  show={this.state.show}
                  onMouseEnter={() => {
                    this.setState({ projectSelected: proj });
                  }}
                >
                  {proj.name}
                </ReactRevealText>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Projects;
