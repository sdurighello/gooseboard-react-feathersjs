import { GET_BOARDS } from '../actions/boards/get-boards'
import { CREATE_BOARD } from '../actions/boards/create-board'
import { JOIN_BOARD } from '../actions/boards/join-board'
import { SELECT_BOARD } from '../actions/boards/select-board'

export default function updateBoard( state = [], { type, payload } ) {
  switch (type) {
    case GET_BOARDS :
      return payload
    case CREATE_BOARD :
      return state.concat([payload])
    default :
      return state
  }
}
