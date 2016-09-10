import model from '../../models/board-model'

export const BOARD_SETUP = 'BOARD_SETUP'

export default function setupBoards() {
  return dispatch => {
    model.dispatch = dispatch
    model.app.authenticate().then((response) => {
      model.find()
      dispatch(boardSetup())
    })
  }
}

export function boardSetup() {
  return {
    type: BOARD_SETUP
  }
}
