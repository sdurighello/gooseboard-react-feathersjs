import React from 'react'
import FlatButton from 'material-ui/FlatButton'

class WhoIsPlaying extends React.Component {

  roll() {
    const {player, playTurn } = this.props
    playTurn(player)
  }

  render() {
    const { player } = this.props
    return (
      <table>
        <tbody>
        <tr>
          <td>{ player.name } </td>
          <td>
          <img style={{height: "20px", width: "auto"}}
            src="http://www.quickanddirtytips.com/sites/default/files/images/4348/dice.jpg"
            onClick={ this.roll.bind(this)}
          />
          </td>
      </tr>
      </tbody>
      </table>
    )
  }
}

export default WhoIsPlaying
