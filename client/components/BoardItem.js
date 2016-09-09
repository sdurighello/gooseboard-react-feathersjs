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
    const { board, currentUser, joinBoard, selectBoard } = this.props
    const hasJoined = board.players.some(function(p){
      return currentUser._id === p.userId
    })
    const isOpen = !board.winner
    return (
      <li>
        <span>Board created by { board.owner.name } on { board.created_at } </span>
        { isOpen ? <span>OPEN  </span> : <span>CLOSED  </span> }
        <span><FlatButton label='View' onClick={ this.selectBoard.bind(this) } /></span>
        { hasJoined ? <span>JOINED</span> : <span><FlatButton label='Join' onClick={ this.joinBoard.bind(this) } /></span> }
      </li>
    )
  }
}

export default BoardItem
