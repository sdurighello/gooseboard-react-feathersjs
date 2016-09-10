
export default function updateGames(state = [], { type, payload }) {
  switch (type) {
    case 'BOARDS_FETCHED' :
      return payload

    case 'BOARD_CREATED' :
      return state.filter((b) => (b._id !== payload._id)).concat([payload])

    case 'BOARD_UPDATED' :
      const current = payload
      return state.map((board) => {
        return (board._id === current._id) ? current : board
      })

    case 'BOARD_REMOVED' :
      const removed = payload
      return state.filter((board) => (board._id !== current._id))

    default :
      return state
  }
}
