import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// CHILDREN EXERCISE 1
const ErrorBox = ({ children }) => {
	return (
		<div className='alert-danger' id='warning'>
			<i class='fas fa-exclamation-triangle fa-2x' />
			{children}
		</div>
	);
};

// CHILDREN EXERCISE 2

const FirstChildOnly = ({ children }) => {
	let items = React.Children.toArray(children);
	let firstItem = items.splice(0, 1);
	return <div>{firstItem}</div>;
};

const LastChildOnly = ({ children }) => {
	let items = React.Children.toArray(children);
	let lastItem = items.splice(items.length - 1, 1);
	return <div>{lastItem}</div>;
};

const Head = ({ number, children }) => {
	let items = React.Children.toArray(children);
	let someItems = items.slice(0, number);
	return <div>{someItems}</div>;
};

const Tail = ({ number, children }) => {
	let items = React.Children.toArray(children);
	let someItems = items.splice(items.length - number, items.length);
	return <div>{someItems}</div>;
};

const App = () => {
	return (
		<>
			<ErrorBox>Testing!</ErrorBox>;
			<FirstChildOnly>
				<h1>This is first Child</h1>
				<h2>This is the second Child</h2>
				<h3>This is the 3rd Child</h3>
			</FirstChildOnly>
			<LastChildOnly>
				<h1>This is first Child</h1>
				<h2>This is the second Child</h2>
				<h3>This is the 3rd Child</h3>
			</LastChildOnly>
			<Head number={3}>
				<p>1</p>
				<p>2</p>
				<p>3</p>
				<p>4</p>
				<p>5</p>
				<p>6</p>
				<p>7</p>
				<p>8</p>
				<p>9</p>
			</Head>{" "}
			<Tail number={4}>
				<p>1</p>
				<p>2</p>
				<p>3</p>
				<p>4</p>
				<p>5</p>
				<p>6</p>
				<p>7</p>
				<p>8</p>
				<p>9</p>
			</Tail>
		</>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
