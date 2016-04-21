import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap'
import bootstrap from 'bootstrap'
import CharacterDetails from './CharacterDetails'
import Activity from './Activity'


export default class Upgrade extends Component {
  render() {
    const { character, openModal, closeModal, modal} = this.props
    const activities=[
      {title: "hang-gliding"},
      {title: "underwater boxing"},
      {title: "jazz dance class"},
      {title: "petting zoo"},
      {title: "quilting"}
    ];
      return (
      <div className="upgrade">
        <Button bsStyle="primary" bsSize="large" onClick={openModal}>
          Upgrade
        </Button>
        <Modal show={modal.modal} closeTimeoutMS={150}>
          <Modal.Header className="attributes">
            <Modal.Title>{ character.name } Needs an Upgrade...</Modal.Title>
            <div className="row">
              <div className="col-sm-6">
                <CharacterDetails character={character} />
              </div>
              <div className="col-sm-6">
                <p>{character.name} has some serious flaws. Take a moment to select some activities to improve this characters chances in this competition.</p>
              </div>
            </div>
          </Modal.Header>
          <Modal.Body>
            <div>
              <ul className="unstyled-list activity-list">{
                activities.map( function( activity, i ) {
                  return ( <li><Activity activity={ activity } /></li> )
                }, this )
              }</ul>
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

