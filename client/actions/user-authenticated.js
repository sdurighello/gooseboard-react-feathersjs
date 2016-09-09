export const USER_AUTHENTICATED = 'USER_AUTHENTICATED'

export default function authenticateUser(user) {
  return {
    type: USER_AUTHENTICATED,
    payload: user,
  }
}
