import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function IconButton({ children }) {
	return (
		<div className='iconbutton'>
			<button>
				<i class='fas fa-bullseye' />
				{children}
			</button>
		</div>
	);
}

ReactDOM.render(<IconButton> Do The Thing </IconButton>, document.getElementById("root"));
