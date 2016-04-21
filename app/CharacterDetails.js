import React, { Component } from 'react'
import { Button, ProgressBar } from 'react-bootstrap'

export default class CharacterDetails extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <img className="attributes-pic" src={this.props.character.image}/>
        </div>
        <div className="col-md-8">
          <div className="character-name">
          {this.props.character.name}
          </div>
          {Object.keys(this.props.character.attributes).map((key) => 
            <div className="attribute-font">{key}
              <ProgressBar now={this.props.character.attributes[key]} label={"%(now)s"}/>
            </div>
          )}
        </div>
      </div>
    )
  }
}

