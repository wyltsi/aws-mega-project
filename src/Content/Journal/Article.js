import React, { Component } from "react";
import moment from "moment";
import Link from "@material-ui/core/Link";
import ReactHtmlParser from "react-html-parser";
import Fab from '@material-ui/core/Fab';

class Article extends Component {
	renderLinks = links => {
		if (links && Array.isArray(links)) {
			return (
				<div className="links">
					<h5>Links related to this entry:</h5>
					{links.map(link => {
						return (
							<div key={link.url}>
								<Link
									href={link.url}
									className="link-url"
									rel="noopener"
									target="_blank"
								>
									{link.name}
								</Link>
								<br />
							</div>
						);
					})}
				</div>
			);
		}
	};

	deleteEntry = (articleId) => {
		this.props.deleteJournalEntry(articleId);
	}

	render() {
		if (!this.props.article) {
			return null;
		}

		return (
			<div className="journal-article" key={this.props.article.articleId}>
				<div className="article-header-row">
					<div>
						<h3>{this.props.article.title}</h3>
						<div className="article-date">
							{moment(this.props.article.date).format(
								"MMMM Do YYYY, h:mm:ss a"
							)}
						</div>
					</div>
					{this.props.authData &&
						<div className="article-actions">
							<Fab color="secondary" onClick={() => this.editEntry(this.props.article.articleId)} aria-label="Delete" className="delete-entry">
								<i className="far fa-edit" />
							</Fab>
							<Fab color="secondary" onClick={() => this.deleteEntry(this.props.article.articleId)} aria-label="Delete" className="delete-entry">
								<i className="fas fa-trash" />
							</Fab>
						</div>
					}
				</div>
				<div className="article-text">
					{ReactHtmlParser(this.props.article.text)}
				</div>
				{this.renderLinks(this.props.article.links)}
				<div className="pictures" />
			</div>
		);
	}
}

export default Article;
