import React, { Component } from "react";
import "typeface-roboto";

class Links extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="links-container">
				<p>
                    <i className="fas fa-home" />
                    <a href="/" className="link-title">Home</a>
                </p>
                <p>
                    <i className="fas fa-book" />
                    <a href="/journal" className="link-title">Journal</a>
                </p>
                <p>
                    <i className="fas fa-file-alt" />
                    <a href="/cv" className="link-title">Check my CV</a>
                </p>
                <p>
                    <i className="fas fa-star" />
                    <a href="/articles" className="link-title">Useful articles</a>     
                </p>
                <p>
                    <i className="fas fa-envelope" />
                    <a href="/contact" className="link-title">Contact me</a>
                </p>
			</div>
		);
	}
}

export default Links;
