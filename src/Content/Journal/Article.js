import React, { Component } from "react";
import moment from "moment";

class Article extends Component {

    renderLinks = (links) => {
        if (links && Array.isArray(links)) {
            return (
                <div className="links">
                    {links.map(link => {
                        return <div key={link.url}>{link.url}</div>
                    })}
                </div>
            )
        }
    }

	render() {

        if (!this.props.article) {
            return null;
        }

		return (
            <div className="journal-article" key={this.props.article.id}>
			    <h3>{this.props.article.title}</h3>
                <div className="article-date">{moment(this.props.article.date).format('MMMM Do YYYY, h:mm:ss a')}</div>
                <div className="article-text"></div>
                {this.renderLinks(this.props.article.links)}
                <div className="pictures"></div>
            </div>
        )
	}
}

export default Article;
