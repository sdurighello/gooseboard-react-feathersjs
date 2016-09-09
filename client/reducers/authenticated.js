import { USER_AUTHENTICATED } from '../actions/user-authenticated'
import { USER_SIGNED_OUT } from '../actions/user-signed-out'

export default function isAuthenticated(
  state = JSON.parse(localStorage.getItem('memoryAuthenticated')) || false, { type, payload }) {
  switch (type) {
    case USER_AUTHENTICATED :
      localStorage.setItem('memoryAuthenticated', true)
      return true

    case USER_SIGNED_OUT :
      localStorage.setItem('memoryAuthenticated', false)
      return false

    default :
      return state
  }
}
