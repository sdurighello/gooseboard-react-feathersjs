import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
// Material-UI
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'

// Components
import Tile from '../components/Tile'
import Player from '../components/Player'
import UserItem from '../components/UserItem'
import BoardItem from '../components/BoardItem'
// Containers
import Board from './Board'
// Actions
import boardModel from '../models/board-model'
import setupBoards from '../actions/boards/setup-boards'
import selectBoard from '../actions/boards/select-board'

class Lobby extends React.Component {

  componentDidMount() {
    this.props.setupBoards()
  }

  joinBoard(board, user){
    // Get props
    const { players } = board
    // Only not started and not completed games can be joined
    if((board.winner && board.winner.userId) || (board.whoIsPlaying && board.whoIsPlaying.userId)){ return }
    // Add user to board's players
    const newPlayers = players.concat(
      [{
        _id: user._id, // TODO !!!
        userId: user._id,
        name: user.name,
        position: 1,
        lastRoll: 0
      }]
    )
    // Set the STATE
    const payload = {
      players: newPlayers
    }
    boardModel.save(board, payload)
  }

  selectBoard(board){
    this.props.selectBoard(board)
  }

  createGame() {
    boardModel.create({})
  }

  // --- Renders ---

  renderBoardItem(board, index) {
    const { currentUser, selectedBoard } = this.props
    return (
      <BoardItem
      key={ index }
      board={ board }
      currentUser={ currentUser }
      selectedBoard={ selectedBoard }
      selectBoard={ this.selectBoard.bind(this) }
      joinBoard={ this.joinBoard.bind(this) } />
    )
  }

  renderUserItem(user, index) {
    const { currentUser } = this.props
    return (
      <UserItem key={ index }
      user={ user } currentUser={ currentUser } />
    )
  }

  render() {
    const { currentUser, users, boards, selectedBoard } = this.props
    const boardstyle = {
      flex: '2',
      backgroundImage: "url('http://www.walldevil.com/wallpapers/a90/summer-butterfly-lake-water-tree-goose-dandelion-rabbit-boat.jpg')",
      backgroundSize: 'cover',
      height: '1000px',
      border: '1px solid black',
      paddingLeft: '100px',
    };
    return (
      <div style={{display: 'flex'}}>
        <Paper style={{flex: '1', border: '1px solid black', paddingLeft: '5px', marginRight: '2px'}}>
        <h1>LOBBY</h1>
          <h3>List of all users with boards won</h3>
          <ul>
            {/* { users.map(this.renderUserItem.bind(this)) } */}
          </ul>
          <br/>
          <h3>List of boards with 'join' and 'view' button</h3>
          <RaisedButton label='New game' onClick={ this.createGame.bind(this) } primary />
          <ul>
            { boards.map(this.renderBoardItem.bind(this)) }
          </ul>
        </Paper>
        <Paper style={boardstyle}>
        <h1>GOOSEBOARD</h1>
          { selectedBoard._id ? <Board /> : 'No board selected' }
        </Paper>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    users: state.formErrors,
    selectedBoard: state.selectedBoard,
    boards: state.boards
  }
}

Lobby.propTypes = {

}

export default connect(mapStateToProps, { setupBoards, selectBoard })(Lobby)
