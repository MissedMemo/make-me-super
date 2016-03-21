import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap'
import bootstrap from 'bootstrap'

export default class Upgrade extends Component {
  render() {
    let random = Math.round(Math.random() * (1))
    console.log(random)
    const { characterOne, characterTwo, openModal, closeModal, modal} = this.props
      return (
      <div>
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={openModal}
        >
          Upgrade
        </Button>
        <Modal show={modal.modal}
          closeTimeoutMS={150}>
          <Modal.Header>
            <Modal.Title>Upgrade This Character</Modal.Title>
          </Modal.Header>
          <Modal.Body>{random ? characterOne.name: characterTwo.name}</Modal.Body>
          <Modal.Footer>
            <Button onClick={closeModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

