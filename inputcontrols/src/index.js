import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Example extends React.Component {
	state = {
		text: ""
	};

	handleChange = event => {
		this.setState({
			text: event.target.value
		});
	};

	render() {
		return (
			<div>
				<textarea value={this.state.text} onChange={this.handleChange} />
				<h2>You have typed:</h2>
				<p>{this.state.text}</p>
			</div>
		);
	}
}

ReactDOM.render(<Example />, document.getElementById("root"));
