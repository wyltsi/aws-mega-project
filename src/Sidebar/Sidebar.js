import React, { Component } from "react";
import "typeface-roboto";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import { AppContext } from "../App";
import Links from "./Links";

class Sidebar extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<AppContext.Consumer>
					{context => (
						<div>
							<div className="toggle-sidemenu">
								<IconButton onClick={context.toggleSidebar}>
									<i className="fas fa-bars" />
								</IconButton>
							</div>
							<Drawer open={context.displaySidebar}>
								<div className="sidebar-container">
                                    <div className="buttons">
                                    <IconButton onClick={context.toggleSidebar}>
                                        <i className="fas fa-arrow-left" />
                                    </IconButton>
                                    </div>
									<Links />
								</div>
							</Drawer>
						</div>
					)}
				</AppContext.Consumer>
			</div>
		);
	}
}

export default Sidebar;
