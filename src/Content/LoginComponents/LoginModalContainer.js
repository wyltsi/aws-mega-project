import { connect } from 'react-redux'
import { userActions } from "../../Redux/actions/user.actions"
import LoginModal from './LoginModal'

const mapStateToProps = (state) => ({
    showLoginModal: state.user.showLoginModal,
    loggingIn: state.user.loggingIn,
    user: state.user.user,
    loginError: state.user.loginError,
    loggedInSuccessfully: state.user.loggedInSuccessfully
})

const mapDispatchToProps = (dispatch) => ({
    actions: {
        userLogin: (username, password) => dispatch(userActions.userLogin(username, password)),
        toggleLoginModal: () => dispatch(userActions.toggleLoginModal()),
        clearErrors: () => dispatch(userActions.clearErrors())
    }
})

const LoginModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginModal)

export default LoginModalContainer