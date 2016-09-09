import React from 'react'

class UserItem extends React.Component {
  render() {
    const { user, currentUser } = this.props
    return (
      <li>
        <span>
          _id: { user._id}, name: {user.name}
          {user._id === currentUser._id ? ' -> Current user' : null}
        </span>
      </li>
    )
  }
}

export default UserItem
