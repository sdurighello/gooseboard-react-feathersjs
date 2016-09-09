export const SET_FORM_ERRORS = 'SET_FORM_ERRORS'

export default function setFormErrors(errors) {
  return {
    type: SET_FORM_ERRORS,
    payload: errors
  }
}
