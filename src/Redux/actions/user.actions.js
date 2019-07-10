export const userActions = {
    toggleLoginModal: () => ({
        type: "TOGGLE_LOGIN_MODAL"
    }),
    toggleChangePasswordModal: () => ({
        type: "TOGGLE_CHANGE_PASSWORD_MODAL"
    }),
    clearErrors: () => ({
        type: "CLEAR_ERRORS"
    }),
    clearSuccess: () => ({
        type: "CLEAR_SUCCESS"
    }),
    userLogin: (username, password) => ({
        type: "USER_LOGIN",
        username,
        password
    }),
    userLoginSuccess: (user) => ({
        type: "USER_LOGIN_SUCCESS",
        user
    }),
    userLoginError: (loginError) => ({
        type: "USER_LOGIN_ERROR",
        loginError
    }),
    changePassword: (user, password, oldPassword) => ({
        type: "CHANGE_PASSWORD",
        user,
        password,
        oldPassword
    }),
    changePasswordSuccess: () => ({
        type: "CHANGE_PASSWORD_SUCCESS"
    }),
    changePasswordError: (changePasswordError) => ({
        type: "CHANGE_PASSWOR_ERROR",
        changePasswordError
    }),
    logout: () => ({
        type: "LOGOUT"
    }),
    logoutSuccess: () => ({
        type: "LOGOUT_SUCCESS"
    }),
    logoutError: (logoutError) => ({
        type: "LOGOUT_ERROR",
        logoutError
    })
}