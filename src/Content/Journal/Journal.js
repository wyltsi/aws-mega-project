import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import JournalSidebar from "./JournalSidebar";
import Article from "./Article";
import { Hub } from "aws-amplify";
import NewEntryScreen from "./NewEntryScreen";

class Journal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			authState: null,
			authData: null,
			displayNewEntryScreen: false
		};

		Hub.listen("auth", data => {
			switch (data.payload.event) {
				case "signIn":
					this.setState({
						authState: "signedIn",
						authData: data.payload.data
					});
					break;
				case "signIn_failure":
					this.setState({
						authState: "signIn",
						authData: null,
						authError: data.payload.data
					});
					break;
				default:
					break;
			}
		});
	}

	componentDidMount() {
		this.props.actions.getJournalData();
	}

	componentWillReceiveProps() {}

	handleToggle = e => {
		e.preventDefault();
		e.stopPropagation();

		this.props.actions.toggleLoginModal();
	};

	handleLogout = e => {
		e.preventDefault();
		e.stopPropagation();

		this.props.actions.logout();
	};

	toggleNewEntryScreen = () => {
		this.setState({
			displayNewEntryScreen: !this.state.displayNewEntryScreen
		});
	};

	render() {
		return (
			<div className="journal-container">
				<h2 className="journal-header">Site journal</h2>
				<div className="login-container">
					{this.state.authData ? (
						<div className="logout-container">
							{`Logged in as ${this.state.authData.username}`}
							<Button
								variant="contained"
								color="secondary"
								id="logout-for-journal"
								onClick={this.handleLogout}
							>
								Logout
							</Button>
						</div>
					) : (
						<Button
							variant="contained"
							color="secondary"
							id="login-for-journal"
							onClick={this.handleToggle}
						>
							Login
						</Button>
					)}
					{this.state.authData && (
						<div className="add-entry-container">
							<Button
								variant="contained"
								color="secondary"
								id="add-new-entry-button"
								onClick={this.toggleNewEntryScreen}
							>
								Add new entry
							</Button>
						</div>
					)}
				</div>
				<div className="sidebar-and-articles">
					<JournalSidebar />
					<div className="article-container">
						{this.state.displayNewEntryScreen && (
							<NewEntryScreen
								addJournalEntry={this.props.actions.addJournalEntry}
								toggleNewEntryScreen={this.toggleNewEntryScreen}
							/>
						)}
						{this.props.journalData.map(article => {
							return (
								<Article
									article={article}
									key={article.articleId}
								/>
							);
						})}
					</div>
				</div>
			</div>
		);
	}
}

export default Journal;
