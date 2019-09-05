import React from "react";
import "./App.css";
import Nav from "./Nav";

class App extends React.Component {
	state = {
		activeTab: 0
	};

	handleTabChange = index => {
		this.setState({ activeTab: index });
		//console.log(this.state.activeTab);
	};

	renderComponent() {
		switch (this.state.activeTab) {
			default:
			case 0:
				return <span>Items</span>;
			case 1:
				return <span>Cart</span>;
		}
	}
	render() {
		let { activeTab } = this.setState;
		return (
			<div className='App'>
				<Nav activeTab={activeTab} onTabChange={this.handleTabChange} />
				<main className='App-content'>{this.renderComponent()}</main>
			</div>
		);
	}
}

export default App;
