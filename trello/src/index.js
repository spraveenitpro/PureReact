import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const list = {
	name: "Phone Features",
	listitems: [
		"Sub WooFooer",
		"Non-porous washable",
		"Wings",
		"Beveled Bezel",
		"Bezeled Bevel",
		"Seedless"
	]
};

function Trello({ list }) {
	return (
		<div>
			<div>
				<h1>{list.name}</h1>
			</div>
			<div>
				<ul>
					{list.listitems.map(item => (
						<li>{item}</li>
					))}
				</ul>
			</div>
		</div>
	);
}

ReactDOM.render(<Trello list={list} />, document.getElementById("root"));
