import React, { Component } from 'react'
import { Button, Modal, ProgressBar } from 'react-bootstrap'
import bootstrap from 'bootstrap'

export default class Fight extends Component {
  render() {
    let random = Math.round(Math.random() * (1))
    const { characterOne, characterTwo, openModal, closeModal, modal} = this.props
    let winner = random ? characterOne : characterTwo
    console.log(winner)
      return (
      <div>
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={openModal}>
          Fight!
        </Button>
        <Modal show={modal.modal}
          closeTimeoutMS={150}>
          <Modal.Body>
          <Modal.Title className="winner-header">Winner Winner Chicken Dinner</Modal.Title>
          <div className="row">
            <div className="col-md-6">
              {winner ? <img className="img-responsive" src={winner.image} /> : <div></div>}
            </div>
            <div className="col-md-6">
              {winner ? <div className="winner-name">{winner.name}</div> : <div></div>}
              {winner ? Object.keys(winner.attributes).map((key) =>
                <div>{key}
                  <ProgressBar now={winner.attributes[key]} label={"%(now)s"}/>
                </div>
                ) : <div></div> }
            </div>
          </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={closeModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}