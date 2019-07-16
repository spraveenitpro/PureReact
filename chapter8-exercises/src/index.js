import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

var sender = {
	name: "Sender",
	address: "123 Fake st.",
	city: "Boston, MA 02118"
};

var receiver = {
	name: "Receiver",
	address: "123 Fake st",
	city: "San Francisco, CA 94101"
};
function Stamp() {
	return (
		<div className='stamp'>
			<span>STAMP</span>
		</div>
	);
}

function Envelope() {
	return (
		<div className='envelope'>
			<AddressLabel1 details={sender} />
			<Stamp />
			<AddressLabel2 details={receiver} />
		</div>
	);
}

function AddressLabel1({ details }) {
	return (
		<div className='sender'>
			<div className='label'>{details.name}</div>
			<div className='label'>{details.address}</div>
			<div className='label'>{details.city}</div>
		</div>
	);
}

function AddressLabel2({ details }) {
	return (
		<div className='receiver'>
			<div className='label'>{details.name}</div>
			<div className='label'>{details.address}</div>
			<div className='label'>{details.city}</div>
		</div>
	);
}

ReactDOM.render(<Envelope />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
