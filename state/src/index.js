import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class CountingParent extends React.Component {
	state = {
		actionCount: 0
	};

	handleAction = action => {
		this.setState({
			actionCount: this.state.actionCount + 1
		});
	};

	resetAction = action => {
		this.setState({
			actionCount: 0
		});
	};

	render() {
		return (
			<div>
				<Child onAction={this.handleAction} onReset={this.resetAction} />
				<p>Clicked {this.state.actionCount} Times!</p>
			</div>
		);
	}
}

function Child({ onAction, onReset }) {
	return (
		<div>
			<button onClick={onAction}>Click here!</button>
			<button onClick={onReset}>Reset</button>
		</div>
	);
}

function Page() {
	return (
		<div>
			<CountingParent />
			<CountingParent />
		</div>
	);
}

ReactDOM.render(<Page />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
