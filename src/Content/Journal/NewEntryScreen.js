import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import isEmpty from "lodash/isEmpty";
import uuidv1 from "uuid/v1";

class NewEntryScreen extends Component {

    constructor(props) {
		super(props);
        this.state = {
            title: "",
            text: "",
            links: [],

        };
    }

    submit = () => {
        if (isEmpty(this.state.title) || isEmpty(this.state.text)) {
            console.log("Would be good to add some content...");
        } else {
            console.log("Submitting the state:", {...this.state, date: new Date(), articleId: uuidv1()});
            this.props.addJournalEntry({...this.state, date: new Date(), articleId: uuidv1()});
        }
        
    }

    AddNewLink = () => {
        this.setState(state => {
            const links = [...state.links, {
                name: "",
                url: ""
            }];
      
            return {
                links
            };
        });
    }

    removeLink = (index) => {
        const links = [...this.state.links];
        links.splice(index, 1);
        this.setState({
            links
        })
    }

    titleChange = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    textChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    urlChange = (e, index) => {
        const links = this.state.links;
        links[index].url = e.target.value;
        this.setState({
            links
        })
    }

    nameChange = (e, index) => {
        const links = this.state.links;
        links[index].name = e.target.value;
        this.setState({
            links
        })
    }

	render() {
		return (
            <div className="new-entry-container">
                <TextField
                    id="entri-title"
                    label="Title"
                    placeholder="Title"
                    className="single-line-input"
                    margin="normal"
                    variant="filled"
                    value={this.state.title}
                    onChange={(e) => this.titleChange(e)}
                />
			   <TextField
                    id="filled-multiline-static"
                    label="Text"
                    multiline
                    rows="5"
                    placeholder="Add entry here"
                    className="multi-line-input"
                    margin="normal"
                    variant="filled"
                    value={this.state.text}
                    onChange={(e) => this.textChange(e)}
                />
                <div className="entry-links">
                    {this.state.links.length > 0  &&
                        <h5>Links</h5>
                    }
                    {this.state.links.map((link, index) => {
                        return (
                            <div className="entry-link-container" key={`link_${index}`}>
                                <TextField
                                    label="Name"
                                    placeholder="Name"
                                    className="single-line-input name"
                                    margin="normal"
                                    variant="filled"
                                    value={this.state.links[index].name}
                                    onChange={(e) => this.nameChange(e, index)}
                                />
                                <TextField
                                    label="URL"
                                    placeholder="URL"
                                    className="single-line-input url"
                                    margin="normal"
                                    variant="filled"
                                    value={this.state.links[index].url}
                                    onChange={(e) => this.urlChange(e, index)}
                                />
                                <Button variant="contained" color="secondary" id="remove-link" onClick={() => this.removeLink(index)}>
                                    <i className="fas fa-trash" />
                                </Button>
                            </div>
                        )
                    })}
                    <Button variant="contained" color="secondary" id="add-entry-link" onClick={this.AddNewLink}>
                        Add link
                    </Button>
                </div>
                <div className="text-editor-actions">
                    <Button variant="contained" color="secondary" id="cancel-entry" onClick={this.props.toggleNewEntryScreen}>
                        Cancel
                    </Button>
                    <Button variant="contained" color="primary" id="submit-entry" onClick={this.submit}>
                        Submit
                    </Button>
                </div>
            </div>
        )
	}
}

export default NewEntryScreen;
