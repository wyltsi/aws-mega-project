import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Content/Home";
import About from "./Content/About";
import "typeface-roboto";
import Sidebar from "./Sidebar/Sidebar";
import Footer from "./Content/Footer";
import Journal from "./Content/Journal/Journal";

export const AppContext = React.createContext();

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
            displaySidebar: false,
            toggleSidebar: this.toggleSidebar
		};
    }
    
    toggleSidebar = () => {
        this.setState({
            displaySidebar: !this.state.displaySidebar
        });
    }

	render() {
		return (
            <Router>
                <div className="WLTS-Software">
                    <AppContext.Provider value={this.state} >
                        <Sidebar />
                        <div className="main-content">
                            <div className="route-content">
                                <Route exact path="/" component={Home} />
                                <Route path="/about" component={About} />
                                <Route path="/journal" component={Journal} />
                            </div>
                        </div>
                    </AppContext.Provider>
                </div>
                <Footer />
            </Router>
		);
	}
}

export default App;
