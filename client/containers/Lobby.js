import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
// Material-UI
import RaisedButton from 'material-ui/RaisedButton'
// Components
import Tile from '../components/Tile'
import Player from '../components/Player'
import WhoIsPlaying from '../components/WhoIsPlaying'
import UserItem from '../components/UserItem'
import BoardItem from '../components/BoardItem'
// Containers
import Board from './Board'
// Actions
import getBoards from '../actions/boards/get-boards'
import createBoard from '../actions/boards/create-board'
import joinBoard from '../actions/boards/join-board'
import selectBoard from '../actions/boards/select-board'


class Lobby extends React.Component {

  componentDidMount() {
    this.props.getBoards()
  }

  joinBoard(board, user){

  }

  selectBoard(board){
    const { selectedBoard } = this.props
    this.props.selectBoard(board)
  }

  createGame() {
    const { currentUser } = this.props
    this.props.createBoard(currentUser)
  }

  // --- Renders ---

  renderBoardItem(board, index) {
    const { currentUser } = this.props
    return (
      <BoardItem key={ index }
      board={ board } currentUser={ currentUser }
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

    return (
      <div>
        <h1>LOBBY</h1>
        <div>
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
        </div>
        <br/>
        <h1>SELECTED BOARD</h1>
        <div>
          { selectedBoard._id ? <Board /> : 'No board selected' }
        </div>
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

export default connect(mapStateToProps, { getBoards, createBoard, selectBoard })(Lobby)
