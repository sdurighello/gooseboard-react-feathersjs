import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import headerStyle from '../styles/headers'
import registerUser from '../actions/register-user'
import authenticateUser from '../actions/authenticate-user'
import setFormErrors from '../actions/set-form-errors'
import resetFormErrors from '../actions/reset-form-errors'

const errorMargin = {
  marginTop: '2rem'
}

const dialogStyle = {
  width: '400px',
  margin: '50px auto',
  padding: '2rem',
}

const buttonStyle = {
  float: 'right',
  marginLeft: '2rem',
}

class SignInOrUp extends Component {
  constructor() {
    super()

    this.state = {
      signUp: false
    }
  }

  submitForm() {
    if (this.state.signUp) { return this.registerUser() }
    return this.signInUser()
  }

  registerUser() {
    this.props.resetFormErrors()

    const { name, email, password, passwordConfirmation } = this.formValues()

    if (password === passwordConfirmation) {
      return this.props.registerUser({ name, email, password })
    }

    this.props.setFormErrors({
      passwordConfirmation: 'The passwords do not match!',
    })
  }

  signInUser() {
    this.props.resetFormErrors()
    const { email, password } = this.formValues()
    this.props.authenticateUser({ email, password })
  }

  formValues() {
    const { name, email, password, passwordConfirmation } = this.refs
    return {
      name: name && name.getValue(),
      email: email.getValue(),
      password: password.getValue(),
      passwordConfirmation: passwordConfirmation && passwordConfirmation.getValue(),
    }
  }

  toggleSignUp() {
    this.setState({
      signUp: !this.state.signUp
    })
  }

  render() {
    const { formErrors } = this.props
    const { signUp } = this.state

    return(
      <Paper style={ dialogStyle }>
        <h2 style={headerStyle}>{ signUp ? 'Sign Up' : 'Sign In' }</h2>
        <div>
          { signUp ? <TextField ref="name" hintText="Your name"/> : null }
        </div>
        <div>
          <TextField
            type="email"
            ref="email"
            hintText="Your email"
            errorText={ formErrors.email }/>
        </div>
        <div>
          <TextField type="password" ref="password" hintText="Your password"/>
        </div>
        <div>
          { signUp ?
            <TextField
              type="password"
              ref="passwordConfirmation"
              hintText="Repeat your password"
              errorText={ formErrors.passwordConfirmation }/>
          : null }
        </div>
        <div style={ errorMargin }>
          <FlatButton
            onClick={ this.toggleSignUp.bind(this) }
            label={ signUp ? 'Sign in' : 'Sign up' } />

          <RaisedButton
            style={ buttonStyle }
            onClick={ this.submitForm.bind(this) }
            label={ signUp ? 'Sign up' : 'Sign in' }
            primary={true} />
        </div>
      </Paper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    formErrors: state.formErrors,
  }
}

SignInOrUp.propTypes = {
  registerUser: PropTypes.func.isRequired,
  setFormErrors: PropTypes.func.isRequired,
  resetFormErrors: PropTypes.func.isRequired,
  currentUser: PropTypes.object.isRequired,
  formErrors: PropTypes.object.isRequired,
}

export default connect(mapStateToProps, { registerUser, authenticateUser, setFormErrors, resetFormErrors })(SignInOrUp)
