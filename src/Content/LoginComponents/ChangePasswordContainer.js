import { connect } from 'react-redux'
import { userActions } from "../../Redux/actions/user.actions"
import ChangePassword from './ChangePassword'

const mapStateToProps = (state) => ({
    showChangePasswordModal: state.user.showChangePasswordModal,
    user: state.user.user,
    passwordChangeError: state.user.passwordChangeError,
    passwordSuccessfullyChanged: state.user.passwordSuccessfullyChanged
})

const mapDispatchToProps = (dispatch) => ({
    actions: {
        toggleChangePasswordModal: () => dispatch(userActions.toggleChangePasswordModal()),
        clearErrors: () => dispatch(userActions.clearErrors()),
        changePassword: (user, password, oldPassword) => dispatch(userActions.changePassword(user, password, oldPassword))
    }
})

const ChangePasswordContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangePassword)

export default ChangePasswordContainer