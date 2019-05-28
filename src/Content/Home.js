import React, { Component } from "react";


const Header = () => {
	return (
		<div className="header-container">
			<span className="header">WLTS</span>
            <span className="header">Software</span>
		</div>
	);
};

const Add = () => {
	return (
		<div className="add-container">
			<span className="paragraph important">Website created by me, for me.</span>
            <span className="paragraph">This site is currently under construction.</span>
            <div className="to-do">
                <span className="header">Planned features</span>
                <span className="list-item">
                    <i className="fas fa-check"></i>
                    Hosted in S3 bucket as static website
                </span>
                <span className="list-item">
                    <i className="fas fa-check"></i>
                    Code pipeline directly to the S3 bucket
                </span>
                <span className="list-item">
                    <i className="fas fa-times"></i>
                    Code journal - What did I do, where did I find the information.
                </span>
                <span className="list-item">
                    <i className="fas fa-times"></i>
                    DynamoDB instance to store code journal texts and links.
                </span>
                <span className="list-item">
                    <i className="fas fa-times"></i>
                    Admin login using Amazon Cognito!
                </span>
                <span className="list-item">
                    <i className="fas fa-times"></i>
                    EC2 service to create feed info to Dynamo DB
                </span>
                <span className="list-item">
                    <i className="fas fa-times"></i>
                    Content management using website and admin login.
                </span>
                <span className="list-item">
                    <i className="fas fa-times"></i>
                    Move my incredible facebook post lottery here.
                </span>
                <span className="list-item">
                    <i className="fas fa-times"></i>
                    Create my own personal CV here.
                </span>
                <span className="list-item">
                    <i className="fas fa-times"></i>
                    Add some sort of contact form.
                </span>
                <span className="list-item">
                    <i className="fas fa-times"></i>
                    Cloudfront and Route53! Make the site public!
                </span>
            </div>
		</div>
	);
};

class Home extends Component {
	render() {
		return (
            <div className="home">
                <Header />
                <Add />
            </div>
        )
	}
}

export default Home;
