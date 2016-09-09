import Api from '../middleware/api'
import appLoading from './app-loading'
import appDoneLoading from './app-done-loading'
import authenticateUser from './authenticate-user'
import setFormErrors from './set-form-errors'
import resetFormErrors from './reset-form-errors'

export default function registerUser(user) {
  return dispatch => {
    dispatch(resetFormErrors())
    // We're loading (communicating with the API asynchronously)
    dispatch(appLoading())

    // Here's the new user data, create a User with it
    const api = new Api()
    api.service('users').create(user)
      .then((response) => {
        // We're done creating the User, now authenticate
        dispatch(authenticateUser(user))
      }).catch((error) => {
        console.error('Error registering!', error);
        if (error.code === 409) {
          const emailError = {
            email: 'This email address already exists!'
          }
          dispatch(setFormErrors(emailError))
        }
        dispatch(appDoneLoading())
      })
  }
}
