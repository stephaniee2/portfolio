import React, { Component } from "react";
import ProjModal from "./ProjModal";
import ProjectData from "./ProjectData";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";
import MyVerticallyCenteredModal from "./ProjModal";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      projectSelected: null
    };
  }

  render() {
    let modalClose = () => this.setState({ modalShow: false, projectSelected: null });

    return (
      <div id="projects-container">
        {ProjectData.map((proj, i) => {
          return (
            <div>
              {proj.name}
              <ButtonToolbar>
                <Button
                  variant="primary"
                  onClick={() => {
                    this.setState({ modalShow: true });
                    this.setState({ projectSelected: proj });
                  }}
                >
                  open project
                </Button>

                {this.state.projectSelected && (
                  <MyVerticallyCenteredModal
                    show={this.state.modalShow}
                    onHide={modalClose}
                    selectedProj={this.state.projectSelected}
                  />
                )}
              </ButtonToolbar>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Projects;
