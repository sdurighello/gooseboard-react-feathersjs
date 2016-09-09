import { APP_LOADING } from '../actions/app-loading'
import { APP_DONE_LOADING } from '../actions/app-done-loading'

export default function loading(state = false, { type, payload }) {
  switch (type) {
    case APP_LOADING :
      return true

    case APP_DONE_LOADING :
      return false

    default :
      return state
  }
}
