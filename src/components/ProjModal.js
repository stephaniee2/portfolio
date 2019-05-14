import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ProjectData from "./ProjectData";

class MyVerticallyCenteredModal extends React.Component {
  render() {
    console.log(this.props);
    const { selectedProj } = this.props;
    return (
      <Modal
        {...this.props}
        dialogClassName="modal-90w"
        // size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        // centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h4>{selectedProj.name}</h4>
            {/* Modal heading */}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{selectedProj.description}</p>
          <div className="proj-imgs-container">
            {selectedProj.screenshots.map(img => {
              return <div className="screenshot-container">
                <img className="proj-screenshot" src={img} />
                </div>;
            })}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default MyVerticallyCenteredModal;
