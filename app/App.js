import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { render } from 'react-dom'
import  { fetchCharacters, selectCharacter, selectSecondCharacter, deselectCharacter, deselectSecondCharacter, openModal, closeModal } from './actions'
import CharacterList from './CharacterList'
import CharacterDetails from './CharacterDetails'
import Fight from './Fight'
import Upgrade from './Upgrade'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  componentDidMount() {
    this.props.dispatch(fetchCharacters())
  }

  openModal() {
    this.props.dispatch(openModal())
  }

  closeModal() {
    const { dispatch, characterOne, characterTwo } = this.props
    dispatch(closeModal())
    dispatch(deselectSecondCharacter(characterOne))
    dispatch(deselectCharacter(characterTwo))
  }

  handleClick(character) {
    const { characterOne, characterTwo, dispatch } = this.props
    if (characterOne.name === character.name) {
      dispatch(deselectCharacter(character))
    }
    else if (characterOne.selected) {
      dispatch(selectSecondCharacter(character))
    } else {
      dispatch(selectCharacter(character))
    }
    if (characterTwo.name === character.name) {
      dispatch(deselectSecondCharacter(character))
    } 
  }

  render() {
    const { characters, characterOne, characterTwo, selection, modal } = this.props
    return (

      <div className="character-div">
        <CharacterList characters={characters}
                       handleClick={this.handleClick} />
        <div className="row">
          <div className="col-md-6">
            { characterOne.selected ? <CharacterDetails character={characterOne} /> : <div></div> }
          </div>
          <div className="col-md-6">
            { characterTwo.selected ? <CharacterDetails character={characterTwo} /> : <div></div> }
          </div>
        </div>

        {  (characterOne.selected && !characterTwo.selected )
        || (characterTwo.selected && !characterOne.selected )  ? 
          <Upgrade characterOne={characterOne} characterTwo={characterTwo}
                   openModal={this.openModal} closeModal={this.closeModal} modal={modal} /> : <div></div> }
        { characterOne.selected && characterTwo.selected ? 
          <Fight characterOne={characterOne} characterTwo={characterTwo}
                 openModal={this.openModal} closeModal={this.closeModal} modal={modal} /> : <div></div> }
      </div>
    )
  }
}

App.propTypes = {
  characters: PropTypes.array.isRequired,
  characterOne: PropTypes.object.isRequired,
  characterTwo: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  const characters = state.listCharacters
  const characterOne = state.characterDetails
  const characterTwo = state.characterTwoDetails
  const modal = state.modal
  return {
    characters,
    characterOne,
    characterTwo,
    modal
  }
}

export default connect(mapStateToProps)(App)