import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// function handleAction(event) {
// 	console.log("Child did:", event);
// }

// function Parent() {
// 	return <Child onAction={handleAction} />;
// }

class CountingParent extends React.Component {
	state = {
		actionCount: 0
	};

	handleAction = action => {
		console.log("child says: ", action);
		this.setState({
			actionCount: this.state.actionCount + 1
		});
	};

	render() {
		return (
			<div>
				<Child onAction={this.handleAction} />
				<p>Clicked {this.state.actionCount} times</p>
			</div>
		);
	}
}

function Child({ onAction }) {
	return <button onClick={onAction}> Click Me!</button>;
}

const Page = () => (
	<div>
		<CountingParent />
		<CountingParent />
		<CountingParent />
	</div>
);

ReactDOM.render(<Page />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
