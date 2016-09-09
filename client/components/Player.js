import React from 'react'
// Material-UI
import RaisedButton from 'material-ui/RaisedButton'

class Player extends React.Component {
  playTurn(){
    const {player, playTurn} = this.props
    playTurn(player)
  }
  render() {
    const {player, canPlay} = this.props
    return (
      <tr>
        <td>{ player.name } </td>
        <td>{ player.lastRoll }</td>
        <td>
          <RaisedButton label='Roll dice' onClick={ this.playTurn.bind(this) } disabled={ !canPlay } secondary />
        </td>
      </tr>
    )
  }
}

export default Player
