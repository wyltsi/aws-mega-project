import React, { Component } from "react";
import moment from "moment";
import Link from "@material-ui/core/Link";
import ReactHtmlParser from "react-html-parser";

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

	render() {
		if (!this.props.article) {
			return null;
		}

		return (
			<div className="journal-article" key={this.props.article.articleId}>
				<h3>{this.props.article.title}</h3>
				<div className="article-date">
					{moment(this.props.article.date).format(
						"MMMM Do YYYY, h:mm:ss a"
					)}
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
