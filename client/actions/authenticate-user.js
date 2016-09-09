import Api from '../middleware/api'
import appLoading from './app-loading'
import appDoneLoading from './app-done-loading'
import userAuthenticated from './user-authenticated'
import setFormErrors from './set-form-errors'
import resetFormErrors from './reset-form-errors'

export default function authenticateUser(user) {
  return dispatch => {
    dispatch(resetFormErrors())
    // We're loading (communicating with the API asynchronously)
    dispatch(appLoading())

    // Here's the new user data, create a User with it
    const api = new Api()
    api.authenticate(user).then((response) => {
      // response.data has the currentUser...
      dispatch(userAuthenticated(response.data))
      dispatch(appDoneLoading())
    }).catch((error) => {
      console.error('Error authenticating!', error);
      dispatch(setFormErrors({ email: error.message }))
      dispatch(appDoneLoading())
    })
  }
}
