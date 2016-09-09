import React from 'react'
import FlatButton from 'material-ui/FlatButton'

class BoardItem extends React.Component {

  selectBoard() {
    const { board, selectBoard } = this.props
    selectBoard(board)
  }

  joinBoard() {
    const { board, currentUser, joinBoard } = this.props
    joinBoard(board, currentUser)
  }

  render() {
    const { board, currentUser, joinBoard, selectBoard, selectedBoard } = this.props
    const hasJoined = board.players.some(function(p){
      return currentUser._id === p.userId
    })
    const isOpen = !board.whoIsPlaying
    const isRunning = board.whoIsPlaying && !board.winner
    const isClosed = board.winner
    const canJoin = !hasJoined && isOpen
    const canViewBoard = selectedBoard._id !== board._id
    return (
      <li>
        <span>Board created by { board.owner.name } on { board.created_at } </span>
        { isOpen ? <span>OPEN  </span> : isRunning ? <span>RUNNING  </span> : isClosed ? <span>CLOSED </span> : null }
        { canViewBoard ? <span><FlatButton label='View' onClick={ this.selectBoard.bind(this) } secondary /></span> : <span>SHOWING </span>}
        { canJoin ? <FlatButton label='Join' onClick={ this.joinBoard.bind(this) } secondary /> : hasJoined ? <span>JOINED </span> : null }
      </li>
    )
  }
}

export default BoardItem
