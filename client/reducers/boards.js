import { GET_BOARDS } from '../actions/boards/get-boards'
import { CREATE_BOARD } from '../actions/boards/create-board'
import { UPDATE_BOARD } from '../actions/boards/update-board'

import { JOIN_BOARD } from '../actions/boards/join-board'
import { SELECT_BOARD } from '../actions/boards/select-board'

// export default function updateBoard( state = [], { type, payload } ) {
//   switch (type) {
//     case GET_BOARDS :
//       return payload
//
//     case CREATE_BOARD :
//       return state.concat([payload])
//
//     case UPDATE_BOARD :
//       const { id, data, query } = payload
//       const index = state.map(function(x) {return x._id; }).indexOf(id)
//       return state.slice(0, index)
//         .concat([Object.assign({}, state[index], data )])
//         .concat(state.slice(index + 1))
//
//     default :
//       return state
//   }
// }


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
