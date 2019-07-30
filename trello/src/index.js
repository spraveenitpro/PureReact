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
		<div className='card'>
			<h3>{list.name}</h3>
			<div className='list'>
				<ul>
					{list.listitems.map(item => (
						<li>{item}</li>
					))}
				</ul>
				Add a card...
			</div>
		</div>
	);
}

ReactDOM.render(<Trello list={list} />, document.getElementById("root"));
