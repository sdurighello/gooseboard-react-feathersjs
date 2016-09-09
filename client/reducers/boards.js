import { GET_BOARDS } from '../actions/boards/get-boards'
import { CREATE_BOARD } from '../actions/boards/create-board'
import { UPDATE_BOARD } from '../actions/boards/update-board'

import { JOIN_BOARD } from '../actions/boards/join-board'
import { SELECT_BOARD } from '../actions/boards/select-board'

export default function updateBoard( state = [], { type, payload } ) {
  switch (type) {
    case GET_BOARDS :
      return payload

    case CREATE_BOARD :
      return state.concat([payload])

    case UPDATE_BOARD :
      const { id, data, query } = payload
      const index = state.map(function(x) {return x._id; }).indexOf(id)
      return state.slice(0, index)
        .concat([Object.assign({}, state[index], data )])
        .concat(state.slice(index + 1))

    default :
      return state
  }
}
