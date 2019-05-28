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
                    Home
                </p>
                <p>
                    <i className="fas fa-book" />
                    Journal
                </p>
                <p>
                    <i className="fas fa-file-alt" />
                    Check my CV
                </p>
                <p>
                    <i className="fas fa-star" />
                    Useful articles
                </p>
                <p>
                    <i className="fas fa-envelope" />
                    Contact me
                </p>
			</div>
		);
	}
}

export default Links;
