import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import CircularProgress from '@material-ui/core/CircularProgress';

class LoginModal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: "",
			password: "",
			SHOWTEMP: false
		};
	}

	onChangeUsername = e => {
		this.setState({
			username: e.target.value
		});
	};

	onChangePassword = e => {
		this.setState({
			password: e.target.value
		});
	};

	handleLogin = e => {
		e.preventDefault();
		e.stopPropagation();

		this.props.actions.userLogin(this.state.username, this.state.password);
	};

	handleToggle = e => {
		e.preventDefault();
		e.stopPropagation();
		this.props.actions.clearErrors();
		this.props.actions.toggleLoginModal();
	};

	render() {
		return (
			<Dialog
				open={this.props.showLoginModal}
				onClose={this.handleToggle}
				aria-labelledby="form-dialog-title"
				className="user-login-modal"
			>
				<DialogTitle id="form-dialog-title">Login</DialogTitle>
				<DialogContent>
					<TextField
						autoFocus
						margin="dense"
						id="username"
						label="Username"
						type="username"
						fullWidth
						onChange={this.onChangeUsername}
						error={this.props.loginError ? true : false}
					/>
					<TextField
						autoFocus
						margin="dense"
						id="password"
						label="Password"
						type="password"
						fullWidth
						onChange={this.onChangePassword}
						error={this.props.loginError ? true : false}
					/>
					<div className="login-information-container">
						{this.props.loginError && (
							<p className="login-error">
								<span>{this.props.loginError.message}</span>
							</p>
						)}
						{this.props.loggedInSuccessfully && (
							<div className="login-success animated slideInRight">
								<i className="fas fa-thumbs-up" />
								Logged in successfully!
							</div>
						)}
					</div>
				</DialogContent>
				<DialogActions>
					<Button id="login-cancel" onClick={this.handleToggle} color="primary">
						Cancel
					</Button>
					{!this.props.loggingIn &&
						<Button id="login-button" onClick={this.handleLogin} color="secondary">
							Login
						</Button>
					}
					{this.props.loggingIn &&
						<CircularProgress className="logging-in-indicator" color="secondary" />
					}
				</DialogActions>
			</Dialog>
		);
	}
}

export default LoginModal;
