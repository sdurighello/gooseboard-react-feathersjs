export const CREATE_BOARD = 'CREATE_BOARD'

export default function createBoard() {
  return {
    type: CREATE_BOARD,
    payload: newBoard,
  }
}
