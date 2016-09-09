import { SET_FORM_ERRORS } from '../actions/set-form-errors'
import { RESET_FORM_ERRORS } from '../actions/reset-form-errors'

export default function updateFormErrors(state = {}, { type, payload }) {
  switch (type) {
    case SET_FORM_ERRORS :
      return payload

    case RESET_FORM_ERRORS :
      return {}

    default :
      return state
  }
}
