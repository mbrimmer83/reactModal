import React from "react";

import {Button} from "react-bootstrap";
import {Modal,ModalHeader, ModalTitle, ModalClose, ModalBody, ModalFooter} from "react-modal-bootstrap";

export default class PlannerModal extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    }
  }

  render() {
    return (
      <div>
      <Modal show={this.state.ShowModal} onHide={this.props.closeModal}>
        <ModalHeader>
        <ModalTitle>My Modal</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <h1>Modal Body</h1>
        </ModalBody>
        <ModalFooter>
          <Button></Button>
        </ModalFooter>
      </Modal>
      </div>
    );
  }
};
