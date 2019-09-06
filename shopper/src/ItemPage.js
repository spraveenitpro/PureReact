import React from "react";
import PropTypes from "prop-types";
import "./ItemPage.css";
import Item from "./Item";

function ItemPage({ items, onAddtoCart }) {
	return (
		<ul className='ItemPage-items'>
			{items.map(item => (
				<li className='ItemPage-item' key={item.id}>
					<Item item={item} onAddtoCart={() => onAddtoCart(item)} />
				</li>
			))}
		</ul>
	);
}

ItemPage.propTypes = {
	items: PropTypes.array.isRequired
};

export default ItemPage;
