import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

export default class CharacterList extends Component {
  render(){
    const { characters, handleClick, characterOne, characterTwo } = this.props
    let classes = classNames({
      'character-thumbnail': true, 
      'selected': characterOne.selected || characterTwo.selected ? true : false
    })
    console.log(classes)
    return (
      <ul>
        {characters.map((character, i) => 
          <img className={classes} onClick={e => handleClick(character)} key={i} src={character.image} />
        )}
      </ul>
    )
  }
}

CharacterList.propTypes = {
  characters: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired
}
