import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider as ReduxProvider} from "react-redux";
import configureStore from "./Redux/store";
import Home from "./Content/Home";
import About from "./Content/About";
import "typeface-roboto";
import Sidebar from "./Sidebar/Sidebar";
import Footer from "./Content/Footer";
import JournalContainer from "./Content/Journal/JournalContainer";
import LoginModalContainer from "./Content/LoginComponents/LoginModalContainer";
import ChangePasswordContainer from "./Content/LoginComponents/ChangePasswordContainer";

export const AppContext = React.createContext();

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

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
            <ReduxProvider store={reduxStore}>
                <Router>
                    <div className="WLTS-Software">
                        <AppContext.Provider value={this.state} >
                            <Sidebar />
                            <LoginModalContainer />
                            <ChangePasswordContainer />
                            <div className="main-content">
                                <div className="route-content">
                                    <Route exact path="/" component={Home} />
                                    <Route exact path="/about" component={About} />
                                    <Route exact path='/journal' component={JournalContainer} />
                                </div>
                            </div>
                        </AppContext.Provider>
                    </div>
                    <Footer />
                </Router>
            </ReduxProvider>
		);
	}
}

export default App;
