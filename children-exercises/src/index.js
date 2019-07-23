import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Dialog({ children }) {
	let title, body, footer;

	React.Children.forEach(children, child => {
		switch (child.type) {
			case Title:
				title = child;
				break;
			case Body:
				body = child;
				break;
			case Footer:
				footer = child;
				break;
			default:
				throw new Error("Dialog can only contain Title, Body and Footer!!");
		}
	});

	return (
		<div className='modal show'>
			<div className='modal-dialog'>
				<div className='modal-content'>
					<div className='modal-header'>{title}</div>
					<div className='modal-body'>{body}</div>
					<div className='modal-footer'>{footer}</div>
				</div>
			</div>
		</div>
	);
}

function Title({ children }) {
	return <h4>{children}</h4>;
}

function Body({ children }) {
	return <h4>{children}</h4>;
}

function Footer({ children }) {
	return <h4>{children}</h4>;
}

function Test() {
	return (
		<Dialog>
			<Title>This is da Title, Biatches..</Title>
			<Body>This is the body, if you like it...</Body>
			<Footer>
				<button className='btn btn-default'>
					<em>Close!!!</em>
				</button>
			</Footer>
		</Dialog>
	);
}
ReactDOM.render(<Test />, document.querySelector("#root"));
