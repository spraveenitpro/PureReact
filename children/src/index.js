import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function IconButton({ children }) {
	console.log(typeof children);
	return (
		<div className='iconbutton'>
			<button>
				<i className='fas fa-bullseye' />
				{children}
			</button>
		</div>
	);
}

function Nav({ children }) {
	let items = React.Children.toArray(children);
	for (let i = items.length - 1; i >= 1; i--) {
		items.splice(
			i,
			0,
			<span key={i} className='separator'>
				|
			</span>
		);
	}
}

ReactDOM.render(<IconButton> Do The Thing </IconButton>, document.getElementById("root"));
