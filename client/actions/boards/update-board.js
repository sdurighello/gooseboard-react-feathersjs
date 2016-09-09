export const UPDATE_BOARD = 'UPDATE_BOARD'

export default function updateBoard(payload) { // {id:_id, data:{prop: newValue}, query:{}}
  return {
    type: UPDATE_BOARD,
    payload: payload,
  }
}
