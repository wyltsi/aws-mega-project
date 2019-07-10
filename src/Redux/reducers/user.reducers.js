export const initialState = () => ({
    showLoginModal: false,
    showChangePasswordModal: false,
    user: null,
    loggingIn: false,
    loginError: null,
    loggedInSuccessfully: false,
    changingPassword: false,
    loggingOut: false
})

const userReducer = (state = initialState(), action) => {
    const { type } = action;
    switch (type) {
        case "TOGGLE_LOGIN_MODAL":
            return {
                ...state,
                showLoginModal: !state.showLoginModal
            };
        case "TOGGLE_CHANGE_PASSWORD_MODAL":
            return {
                ...state,
                showChangePasswordModal: !state.showChangePasswordModal
            };
        case "USER_LOGIN":
            return {
                ...state,
                loggingIn: true
            };
        case "USER_LOGIN_SUCCESS":
            return {
                ...state,
                user: action.user,
                loggedInSuccessfully: true,
                loggingIn: false
            }
        case "USER_LOGIN_ERROR":
            return {
                ...state,
                loginError: action.loginError,
                loggingIn: false
            }
        case "CLEAR_ERRORS":
            return {
                ...state,
                loginError: null
            }
        case "CLEAR_SUCCESS":
            return {
                ...state,
                loggedInSuccessfully: false
            }
        case "CHANGE_PASSWORD":
            return {
                ...state,
                changingPassword: true,
            }
        case "CHANGE_PASSWORD_SUCCESS":
            return {
                ...state,
                changingPassword: false
            }
        case "CHANGE_PASSWORD_ERROR":
            return {
                ...state,
                changingPassword: false,
                changePasswordError: action.changePasswordError
            }
        case "LOGOUT":
            return {
                ...state,
                loggingOut: true
            }
        case "LOGOUT_SUCCESS":
            return {
                ...state,
                loggingOut: false
            }
        case "LOGOUT_ERROR":
            return {
                ...state,
                logoutError: action.logoutError,
                loggingOut: false
            }
        default:
            return state;
    }
}

export default userReducer;