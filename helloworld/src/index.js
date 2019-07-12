import React from "react";
import ReactDOM from "react-dom";

function HelloWorld() {
	return (
		<div>
			<Hello />
			<World />
		</div>
	);

	//return React.createElement("div", {}, "hello world");
}

function Hello() {
	return <span>Hello</span>;
}

function World() {
	return <span>World</span>;
}

ReactDOM.render(<HelloWorld />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
