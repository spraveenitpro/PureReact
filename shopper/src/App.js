import React from "react";
import Nav from "./Nav";
import "./App.css";

class App extends React.Component {
	renderComponent() {
		return <span>Empty</span>;
	}

	render() {
		return (
			<div className='App'>
				<Nav />
				<main className='App-content'>{this.renderComponent()}</main>
			</div>
		);
	}
}

export default App;
