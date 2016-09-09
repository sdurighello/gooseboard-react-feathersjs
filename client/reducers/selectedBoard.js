import { SELECT_BOARD } from '../actions/boards/select-board'

export default function selectBoard( state = [], { type, payload } ) {
  switch (type) {
    case SELECT_BOARD :
      return payload
    default :
      return state
  }
}
