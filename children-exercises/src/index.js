import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Alert = ({ children, title }) => (
	<div className='alert alert-danger'>
		<i className='fa fa-exclamation-triangle' />
		<h3>{title}</h3>
		{children}
	</div>
);

const App = () => (
	<>
		<Alert title={"Hey Look"}>Big Storm Coming</Alert>
	</>
);

ReactDOM.render(<App />, document.getElementById("root"));
