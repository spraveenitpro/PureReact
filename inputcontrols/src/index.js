import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import RefsDemo from "./RefsDemo";

class Example extends React.Component {
	state = {
		text: ""
	};

	handleChange = event => {
		let text = event.target.value;
		text = text.replace(/[0-9]/g, "");
		this.setState({ text });
	};

	render() {
		const EasyInput = () => <input type='text' />;
		return (
			<div>
				<input type='text' value={this.state.text} onChange={this.handleChange} />
				<h2>{this.state.text}</h2>
				<EasyInput />
				<RefsDemo />
			</div>
		);
	}
}

ReactDOM.render(<Example />, document.getElementById("root"));
