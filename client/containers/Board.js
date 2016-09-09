import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
// Material-UI
import RaisedButton from 'material-ui/RaisedButton'
// Components
import Tile from '../components/Tile'
import Player from '../components/Player'
import WhoIsPlaying from '../components/WhoIsPlaying'

class Board extends React.Component {

  startGame(){
  //   const { winner, whoIsPlaying, tiles, players } = this.state
  //   // Put all the players in the first tile and remove players from all other tiles
  //   const newTiles = tiles.map(function(tile){
  //     if(tile.id === 1){
  //       return {
  //         id: tile.id,
  //         name: tile.name,
  //         image: tile.image,
  //         borderwidth: tile.borderwidth,
  //         borderradius: tile.borderradius,
  //         players: tile.players.concat(players)
  //       }
  //     }
  //     return {
  //       id: tile.id,
  //       name: tile.name,
  //       image: tile.image,
  //       borderwidth: tile.borderwidth,
  //       borderradius: tile.borderradius,
  //       players: []
  //     }
  //   })
  //   // Set all players position to 1 and lastRoll to 0
  //   const newPlayers = players.map(function(player){
  //     return {
  //       name: player.name,
  //       position: 1,
  //       lastRoll: 0
  //     }
  //   })
  //   // Set the STATE
  //   this.setState({
  //     winner: null,
  //     whoIsPlaying: newPlayers[0],
  //     tiles: newTiles,
  //     players: newPlayers
  //   })
  }

  playTurn(player){
  //   const {winner, whoIsPlaying, tiles, players} = this.state
  //   const finishPosition = tiles.length
  //   // Check that there is already a winner (game is closed)
  //   if (winner) {return }
  //   // Check that it's your turn
  //   if(player.name !== whoIsPlaying.name){ return }
  //   // Roll the dice
  //   const diceResult = (1 + Math.floor(Math.random() * 6))
  //   // Get new player's position
  //   let newPosition = player.position + diceResult
  //   if (newPosition > finishPosition ){
  //     newPosition = finishPosition
  //   }
  //   // Change STATE
  //     // Set new winner
  //   let newWinner = null
  //   if(newPosition === finishPosition){
  //     newWinner = player
  //   }
  //     // Change player position and lastRoll
  //   let newPlayers = players.map((p) => {
  //     if (p.name === player.name) {
  //       return {
  //         name: p.name,
  //         position: newPosition,
  //         lastRoll: diceResult
  //       }
  //     }
  //     return p
  //   })
  //     // Change tile.players array for target tile
  //   let newTiles = tiles.map(function(tile){
  //       // Remove player from existing tile
  //     if(tile.id === player.position){
  //       return {
  //         id: tile.id,
  //         name: tile.name,
  //         image: tile.image,
  //         borderwidth: tile.borderwidth,
  //         borderradius: tile.borderradius,
  //         players: tile.players.filter(function(p){
  //           return p.name !== player.name
  //         })
  //       }
  //     }
  //       // Add player in target tile
  //     if(tile.id === newPosition){
  //       return {
  //         id: tile.id,
  //         name: tile.name,
  //         borderwidth: tile.borderwidth,
  //         borderradius: tile.borderradius,
  //         players: tile.players.concat([player])
  //       }
  //     }
  //     return tile
  //   })
  //     // Get next player
  //   const nextPlayerIndex = players.indexOf(player) + 1
  //   let nextPlayer = null
  //   if(nextPlayerIndex <= (players.length - 1)){
  //     nextPlayer = players.find(function(p, i){
  //       return i === nextPlayerIndex
  //     })
  //   } else {
  //     nextPlayer = players[0]
  //   }
  //   // Save all above states
  //   this.setState({
  //     winner: newWinner,
  //     whoIsPlaying: nextPlayer,
  //     tiles: newTiles,
  //     players: newPlayers,
  //   })
  }

  renderTile(tile, index) {
    return (
      <Tile key={ index }
        tile = { tile }
        />
    );
  }

  renderPlayer(player, index) {
    return (
      <Player key={ index }
      player={ player} />
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
    const selectedBoard = this.props.selectedBoard
    const { winner, whoIsPlaying, tiles, players } = selectedBoard
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
        <h1>Gooseboard</h1>
        <RaisedButton
        onClick={this.startGame()}
        label="Start Game"
        backgroundColor="#f49905"
        />
        <hr/>
        <table style={{border: '1px solid black'}}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Last roll</th>
            </tr>
          </thead>
          <tbody>
            { players.map(this.renderPlayer.bind(this)) }
          </tbody>
        </table>
        <br/>
        <div>{ whoIsPlaying && !winner ? this.renderWhoIsPlaying(whoIsPlaying) : null}</div>
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
        <h3>
          { winner ? <div>Winner: {winner.name} !!!</div> : null }
        </h3>
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

export default connect(mapStateToProps, { })(Board)
