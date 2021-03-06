import React from "react";
import Nav from "./Nav";
import "./App.css";
import ItemPage from "./ItemPage";
import CartPage from "./CartPage";
import { items } from "./static.data";

class App extends React.Component {
	state = {
		activeTab: 0,
		cart: []
	};

	handleRemoveOne = item => {
		let index = this.state.cart.indexOf(item.id);
		this.setState({
			cart: [...this.state.cart.slice(0, index), ...this.state.cart.slice(index + 1)]
		});
	};

	handleTabChange = index => {
		this.setState({ activeTab: index });
	};

	handleAddToCart = item => {
		this.setState({ cart: [...this.state.cart, item.id] });
	};

	renderCart() {
		//Count how many of each item is in Cart

		let itemCounts = this.state.cart.reduce((itemCounts, itemId) => {
			itemCounts[itemId] = itemCounts[itemId] || 0;
			itemCounts[itemId]++;
			return itemCounts;
		}, {});

		//Create an Array of items

		let cartItems = Object.keys(itemCounts).map(itemId => {
			//Find the item by its ID
			var item = items.find(item => item.id === parseInt(itemId, 10));

			// Create a new item and add to the count property
			return {
				...item,
				count: itemCounts[itemId]
			};
		});
		return (
			<CartPage
				items={cartItems}
				onAddOne={this.handleTabChange}
				onRemoveOne={this.handleRemoveOne}
			/>
		);
	}

	renderContent() {
		switch (this.state.activeTab) {
			default:
			case 0:
				return <ItemPage items={items} onAddToCart={this.handleAddToCart} />;
			case 1:
				return this.renderCart();
		}
	}
	render() {
		let { activeTab } = this.state;
		return (
			<div className='App'>
				<Nav activeTab={activeTab} onTabChange={this.handleTabChange} />
				<main className='App-content'>{this.renderContent()}</main>
				<div>{this.state.cart.length} items</div>
			</div>
		);
	}
}

export default App;
