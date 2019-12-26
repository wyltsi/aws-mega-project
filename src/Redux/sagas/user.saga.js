import { userActions } from "../actions/user.actions";
import { put, takeLatest, all, delay } from "redux-saga/effects";
import { Auth } from 'aws-amplify';

export function* userLogin({username, password}) {
    try {

        const user = yield Auth.signIn(username, password); 
        yield put(userActions.userLoginSuccess(user));
        if (user.challengeName === "NEW_PASSWORD_REQUIRED") {
            yield put(userActions.clearSuccess());
            yield put(userActions.toggleChangePasswordModal());
        } else {
            yield delay(2000)
            yield put(userActions.clearSuccess());
            yield put(userActions.toggleLoginModal()); 
        }
        
    } catch (err) {
        if (err.code === 'UserNotConfirmedException') {
            // The error happens if the user didn't finish the confirmation step when signing up
            // In this case you need to resend the code and confirm the user
            // About how to resend the code and confirm the user, please check the signUp part
        } else if (err.code === 'PasswordResetRequiredException') {
            // The error happens when the password is reset in the Cognito console
            // In this case you need to call forgotPassword to reset the password
            // Please check the Forgot Password part.
            console.log("reset password please")
        } else if (err.code === 'NotAuthorizedException') {
            // The error happens when the incorrect password is provided
            console.log("wrong password");
        } else if (err.code === 'UserNotFoundException') {
            // The error happens when the supplied username/email does not exist in the Cognito user pool
            console.log("no user name found");
        } else {
            console.log(err);
        }

        yield put(userActions.userLoginError(err));
    }
}

export function* changePassword({ user, password }) {
    try {
        if (user.challengeName === "NEW_PASSWORD_REQUIRED") {
            const loggedUser = yield Auth.completeNewPassword(
                user,               // the Cognito User Object
                password,       // the new password
                {}
            );
            yield put(userActions.changePasswordSuccess(loggedUser));
            yield delay(3000)
            yield put(userActions.clearSuccess());
            yield put(userActions.toggleChangePasswordModal()); 
            yield put(userActions.toggleLoginModal()); 
        }    
    } catch (err) {
        yield put(userActions.userLoginError(err));
    }
}

export function* logout() {
    try {
        
        yield Auth.signOut(); 
        yield put(userActions.logoutSuccess());

    } catch (err) {
        yield put(userActions.logoutError(err));
    }
}

export function* userSaga() {
    yield all([
        takeLatest("USER_LOGIN", userLogin),
        takeLatest("CHANGE_PASSWORD", changePassword),
        takeLatest("LOGOUT", logout)
        //takeLatest("TOGGLE_LOGIN_MODAL", toggleLoginModal)
    ])
}