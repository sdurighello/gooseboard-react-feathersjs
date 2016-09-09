import React from 'react'

class Player extends React.Component {
  render() {
    const {player} = this.props
    return (
      <tr>
        <td>{ player.name } </td>
        <td>{ player.lastRoll }</td>
      </tr>
    )
  }
}

export default Player
