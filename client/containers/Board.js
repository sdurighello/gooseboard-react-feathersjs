import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
// Material-UI
import RaisedButton from 'material-ui/RaisedButton'
// Components
import Tile from '../components/Tile'
import Player from '../components/Player'
import WhoIsPlaying from '../components/WhoIsPlaying'
// Actions
import updateBoard from '../actions/boards/update-board'

class Board extends React.Component {

  startGame(){
    // Get props
    const { selectedBoard, boards } = this.props
    const selectedBoardFromId = boards.find(function(b){
      return selectedBoard._id === b._id
    })
    const { winner, whoIsPlaying, tiles, players } = selectedBoardFromId
    // Put all the players in the first tile and remove players from all other tiles
    const newTiles = tiles.map(function(tile){
      if(tile.cellNumber === 1){
        return {
          _id: tile._id,
          cellNumber: tile.cellNumber,
          image: tile.image,
          borderwidth: tile.borderwidth,
          borderradius: tile.borderradius,
          players: tile.players.concat(players)
        }
      }
      return {
        _id: tile._id,
        cellNumber: tile.cellNumber,
        image: tile.image,
        borderwidth: tile.borderwidth,
        borderradius: tile.borderradius,
        players: []
      }
    })
    // Set all players position to 1 and lastRoll to 0
    const newPlayers = players.map(function(p){
      return {
        _id: p._id,
        userId: p.userId,
        name: p.name,
        position: 1,
        lastRoll: 0
      }
    })
    // Set the STATE
    const payload = {
      id: selectedBoardFromId._id,
      data: {
        winner: null,
        whoIsPlaying: newPlayers[0],
        tiles: newTiles,
        players: newPlayers
      },
      query: {}
    }
    this.props.updateBoard(payload)
  }

  playTurn(player){
    // Get props
    const { selectedBoard, boards } = this.props
    const selectedBoardFromId = boards.find(function(b){
      return selectedBoard._id === b._id
    })
    const { winner, whoIsPlaying, tiles, players } = selectedBoardFromId
    const finishPosition = tiles.length
    // Check that there is already a winner (game is closed)
    if (winner) {return }
    // Check that it's your turn
    if(player._id !== whoIsPlaying._id){ return }
    // Roll the dice
    const diceResult = (1 + Math.floor(Math.random() * 6))
    // Get new player's position
    let newPosition = player.position + diceResult
    if (newPosition > finishPosition ){
      newPosition = finishPosition
    }
    // Change STATE
      // Set new winner
    let newWinner = null
    if(newPosition === finishPosition){
      newWinner = player
    }
      // Change player position and lastRoll
    let newPlayers = players.map((p) => {
      if (p._id === player._id) {
        return {
          _id: p._id,
          userId: p.userId,
          name: p.name,
          position: newPosition,
          lastRoll: diceResult
        }
      }
      return p
    })
      // Change tile.players array
    let newTiles = tiles.map(function(tile){
        // Remove player from existing tile
      if(tile.cellNumber === player.position){
        return {
          _id: tile._id,
          cellNumber: tile.cellNumber,
          image: tile.image,
          borderwidth: tile.borderwidth,
          borderradius: tile.borderradius,
          players: tile.players.filter(function(p){
            return p._id !== player._id
          })
        }
      }
        // Add player in target tile
      if(tile.cellNumber === newPosition){
        return {
          _id: tile._id,
          cellNumber: tile.cellNumber,
          image: tile.image,
          borderwidth: tile.borderwidth,
          borderradius: tile.borderradius,
          players: tile.players.concat([player])
        }
      }
      return tile
    })
      // Get next player
    const nextPlayerIndex = players.indexOf(player) + 1
    let nextPlayer = null
    if(nextPlayerIndex <= (players.length - 1)){
      nextPlayer = players.find(function(p, i){
        return i === nextPlayerIndex
      })
    } else {
      nextPlayer = players[0]
    }
    // Save all above states
    const payload = {
      id: selectedBoardFromId._id,
      data: {
        winner: newWinner,
        whoIsPlaying: nextPlayer,
        tiles: newTiles,
        players: newPlayers,
      },
      query: {}
    }
    this.props.updateBoard(payload)
  }

  renderTile(tile, index) {
    return (
      <Tile key={ index }
        tile = { tile }
        />
    );
  }

  renderPlayer(player, index) {
    const { selectedBoard, boards } = this.props
    const selectedBoardFromId = boards.find(function(b){
      return selectedBoard._id === b._id
    })
    const { winner, whoIsPlaying, tiles, players } = selectedBoardFromId
    const canPlay = (whoIsPlaying && (player._id === whoIsPlaying._id)) && !winner
    return (
      <Player key={ index }
      player={ player}
      canPlay={ canPlay }
      playTurn={ this.playTurn.bind(this) } />
    )
  }

  renderWhoIsPlaying(player) {
    return (
      <WhoIsPlaying
      player={player}
      playTurn={ this.playTurn.bind(this) }/>
    )
  }

  render() {
    // const selectedBoard = this.props.selectedBoard
    // const { winner, whoIsPlaying, tiles, players } = selectedBoard
    const { selectedBoard, boards } = this.props
    const selectedBoardFromId = boards.find(function(b){
      return selectedBoard._id === b._id
    })
    const { winner, whoIsPlaying, tiles, players } = selectedBoardFromId

    // if(selectedBoard){
    //   tiles.sort(function (a, b) {
    //     if (a.position > b.position) {
    //       return 1
    //     }
    //     if (a.position < b.position) {
    //       return -1
    //     }
    //     // a must be equal to b
    //     return 0
    //   })
    // }
    return (
      <div>
        <RaisedButton
        onClick={this.startGame.bind(this)}
        label="Start Game"
        backgroundColor="#f49905"
        />
        <hr/>
        <table style={{border: '1px solid black'}}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Last roll</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            { winner ?
              <tr>
                <td colSpan="2">
                  <h3>
                    Winner: { winner.name } !!!
                  </h3>
                </td>
              </tr> : null }
            { players.map(this.renderPlayer.bind(this)) }
          </tbody>
        </table>
        <br />
        <div>{ whoIsPlaying && !winner ? this.renderWhoIsPlaying(whoIsPlaying) : null}</div>
        <br />
        <div>
          <div style={{minWidth: '2000px'}}>
            { tiles.slice(0,6).map(this.renderTile.bind(this)) }
          </div>
          <div style={{minWidth: '2000px'}}>
            { tiles.slice(6,12).map(this.renderTile.bind(this)) }
          </div>
          <div style={{minWidth: '2000px'}}>
            { tiles.slice(12,18).map(this.renderTile.bind(this)) }
          </div>
          <div style={{minWidth: '2000px'}}>
            { tiles.slice(18,24).map(this.renderTile.bind(this)) }
          </div>
          <div style={{minWidth: '2000px'}}>
            { tiles.slice(24,30).map(this.renderTile.bind(this)) }
          </div>
        </div>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    users: state.formErrors,
    boards: state.boards,
    selectedBoard: state.selectedBoard,
  }
}

Board.propTypes = {

}

export default connect(mapStateToProps, { updateBoard })(Board)
