import api from '../middleware/api'
import appLoading from './app-loading'
import appDoneLoading from './app-done-loading'
import userSignedOut from './user-signed-out'

export default function signOutUser() {
  return dispatch => {
    // We're loading (communicating with the API asynchronously)
    dispatch(appLoading())

    // Here's the new user data, create a User with it
    api.signOut().then(() => {
      dispatch(userSignedOut())
      dispatch(appDoneLoading())
    }).catch((error) => {
      console.error('Error signing out!', error);
      dispatch(appDoneLoading())
    })
  }
}
