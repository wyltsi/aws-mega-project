import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import JournalSidebar from "./JournalSidebar";
import Article from "./Article";

const articles = [{
	id: "421-42142-421",
	date: new Date(2019, 6, 23, 15, 0, 0, 0),
	title: "First journal entry",
	text: "",
	links: [
		{
			name: "Aws amplify",
			url: "https://github.com/aws-amplify/amplify-js"
		}
	],
	picture: [
		{
			name: "Sample picture",
			src: "www.source.com/picture.jpeg"
		}
	]
}];

class Journal extends Component {
	render() {
		return (
            <div className="journal-container">
			    <h2>Site journal</h2>
				<div className="login-container">
					<Button variant="outlined" color="secondary" id="login-for-journal">
						Login
					</Button>
				</div>
				<div className="sidebar-and-articles">
					<JournalSidebar />
					<div className="article-container">
						{articles.map(article => {
							return <Article article={article} key={article.id} />
						})}
					</div>
				</div>
            </div>
        )
	}
}

export default Journal;
