import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import isEmpty from "lodash/isEmpty";

class ChangePasswordModal extends Component {

    constructor(props) {
        super(props);

        this.state = { 
            password: "",
            passwordConfirmation: "",
            oldPassword: "",
            passwordsMatch: true,
        };
    }

    onChangePassword = (e) => {
        this.setState({
            password: e.target.value,
            passwordsMatch: true
        })
    }

    onChangePasswordConfirmation = (e) => {
        this.setState({
            passwordConfirmation: e.target.value,
            passwordsMatch: true
        })
    }

    onChangeOldPassword = (e) => {
        this.setState({
            oldPassword: e.target.value
        })
    }

    handleToggle = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.props.actions.clearErrors();
        this.props.actions.toggleChangePasswordModal();
    }

    handlePasswordChange = (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (this.state.password === this.state.passwordConfirmation) {
            this.props.actions.changePassword(this.props.user, this.state.password, this.state.oldPassword);
        } else {
            this.setState({
                passwordsMatch: false
            })
        }

    }

    isDisabled = () => {
        if (isEmpty(this.state.password) || isEmpty(this.state.passwordConfirmation)) {
            return true;
        } else {
            return false;
        }
    }

	render() {
		return (
            <Dialog open={this.props.showChangePasswordModal} onClose={this.handleToggle} aria-labelledby="form-dialog-title" className="password-change-modal">
                <DialogTitle id="form-dialog-title">Login</DialogTitle>
                <DialogContent>
                {this.props.user && this.props.user.challengeName === "NEW_PASSWORD_REQUIRED" &&
                    <DialogContentText>
                        System is requesting a password update. Please update your old/temporary password with a new one.
                    </DialogContentText>
                }
                <TextField
                    autoFocus
                    margin="dense"
                    id="oldpassword"
                    label="Old password"
                    type="password"
                    fullWidth
                    onChange={this.onChangeOldPassword}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="password"
                    label="Password"
                    type="password"
                    fullWidth
                    onChange={this.onChangePassword}
                    error={!this.state.passwordsMatch}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="confirm-password"
                    label="Confirm password"
                    type="password"
                    fullWidth
                    onChange={this.onChangePasswordConfirmation}
                    error={!this.state.passwordsMatch}
                />
                {   
                    !this.state.passwordsMatch &&
                    <p className="password-change-error">
                        <span>Passwords do not match.</span>
                    </p>
                }
                {   
                    this.props.passwordChangeError &&
                    <p className="password-change-error">
                        <span>Passwords do not match.</span>
                    </p>
                }
                </DialogContent>
                <DialogActions>
                <Button onClick={this.handleToggle} color="primary">
                    Cancel
                </Button>
                <Button onClick={this.handlePasswordChange} color="secondary" disabled={this.isDisabled()}>
                    Submit
                </Button>
                </DialogActions>
            </Dialog>
        )
	}
}

export default ChangePasswordModal;
