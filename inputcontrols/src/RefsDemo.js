import React, { Component } from "react";

class RefsDemo extends Component {
	constructor(props) {
		super(props);
		this.inputref = React.createRef();
	}

	componentDidMount() {
		console.log(this.inputref);
		this.inputref.current.focus();
	}

	clickHandler = () => {
		alert(this.inputref.current.value);
	};

	render() {
		return (
			<div>
				<h1>Hello Refs</h1>
				<input type='text' ref={this.inputref} />
				<button onClick={this.clickHandler}>Click</button>
			</div>
		);
	}
}

export default RefsDemo;
