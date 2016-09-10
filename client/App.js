import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
// Material-UI
import FlatButton from 'material-ui/FlatButton'
// Authorization
import signOut from './actions/sign-out-user'
import SignInOrUp from './containers/SignInOrUp'
// Loaders
import Loader from './components/Loader'
// Containers
import Lobby from './containers/Lobby'

class App extends Component {
  signOut() {
    this.props.signOut()
  }

  render() {
    const { loading, authenticated, currentUser } = this.props
    const style = { fontFamily: 'Prompt' }
    return(
      <div style={style}>
        { loading ? <Loader/> : null }
        { authenticated ?
          (<div>
            <span>Hi, { currentUser.name }!</span>
            <FlatButton
              onClick={ this.signOut.bind(this) }
              label="Sign out"/>
            <Lobby />
          </div>) :
            <SignInOrUp/> }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    authenticated: state.authenticated,
    currentUser: state.currentUser,
  }
}

App.propTypes = {
  loading: PropTypes.bool.isRequired,
  authenticated: PropTypes.bool.isRequired,
}

export default connect(mapStateToProps, { signOut })(App);
