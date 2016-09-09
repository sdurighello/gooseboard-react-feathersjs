export const SELECT_BOARD = 'SELECT_BOARD'

export default function selectBoard(board) {
  return {
    type: SELECT_BOARD,
    payload: board,
  }
}
