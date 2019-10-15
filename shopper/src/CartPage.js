import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";
import "./CartPage.css";

function CartPage({ items }) {
	return (
		<ul className='CartPage-items'>
			{items.map(item => (
				<Item item={item} />
			))}
		</ul>
	);
}

CartPage.propTypes = {
	items: PropTypes.array.isRequired
};
export default CartPage;
