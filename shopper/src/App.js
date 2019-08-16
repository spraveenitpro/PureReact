// Import Component prerequisites

import React from "react";
import Nav from "./Nav.js";
import "./App.css";
import ItemPage from "./ItemPage";
import { items } from "./static-data";

// Begin App Component

class App extends React.Component {
	// set state activeTab to zero

	state = {
		activeTab: 0
	};
	// Create function handleTabChange that receives index

	handleTabChange = index => {
		// Set the value of index to state aciveTab
		this.setState({
			activeTab: index
		});
	};
	// Create function renderContent

	renderContent() {
		// Perform a switch of value of activeTab
		switch (this.state.activeTab) {
			// if 0 then return Items and if 1 then return Cart
			default:
			case 0:
				return <ItemPage items={items} />;
			case 1:
				return <span>Cart</span>;
		}
	}
	// Start function render
	render() {
		// Assign activeTab to variable
		let { activeTab } = this.state;
		// Return a div with class name App
		return (
			// Call Nav component and pass the activeTab value and a call back function to handleTabChange
			<div className='App'>
				<Nav activeTab={activeTab} onTabChange={this.handleTabChange} />

				<main className='App-content'>{this.renderContent()}</main>
			</div>
		);
	}
}

//Export the App
export default App;
