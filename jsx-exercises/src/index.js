import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./index.css";

var userName = "steve";

function MyThing() {
	return (
		<div className='book'>
			{userName ? "Hello, " + userName : "Not logged in"}
			<Title />
			<Author />
			<Stats />

			<Table />
		</div>
	);
}

function Table() {
	return (
		<table>
			<tr>
				<th>Age</th>
				<th>First Name</th>
				<th>Second Name</th>
			</tr>
			<Data />
			<Data />
			<Data />
		</table>
	);
}

function Data() {
	return (
		<tbody>
			<tr>
				<td>43</td>
				<td>Rovers</td>
				<td>shell</td>
			</tr>
			<tr>
				<td>33</td>
				<td>Carl</td>
				<td>sels</td>
			</tr>
			<tr>
				<td>83</td>
				<td>ben</td>
				<td>can</td>
			</tr>
		</tbody>
	);
}

function Title() {
	return <div className='title'>The Title</div>;
}

function Author() {
	return <div className='author'>The Author</div>;
}

function Stats() {
	return (
		<ul className='stats'>
			<li className='rating'>5 stars</li>
			<li className='isbn'>12-34345-910</li>
		</ul>
	);
}

ReactDOM.render(<MyThing />, document.getElementById("root"));
