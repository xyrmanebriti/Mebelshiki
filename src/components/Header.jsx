import React, { useState } from 'react'
import { FaBasketShopping } from 'react-icons/fa6'
import Order from './Order'
import {NavLink} from "react-router-dom";

const showOrders = props => {
	let total = 0
	props.orders.forEach(el => {
		total += parseFloat(el.price)
	})

	return (
		<div>
			{props.orders.map(el => (
				<Order onDelete={props.onDelete} key={el.id} item={el} />
			))}

			<p className='total'>Total: {new Intl.NumberFormat().format(total)}$</p>
		</div>
	)
}

const showNothing = () => {
	return (
		<div className='empty'>
			<h2>No products</h2>
		</div>
	)
}

export default function Header(props) {
	let [cartOpen, setCartOpen] = useState(false)

	return (
		<header>
			<div>
				<span className='logo'><NavLink to="/">Immoniti Interiors</NavLink></span>
				<ul className='nav'>
					<li><NavLink to="/about">About Us</NavLink></li>
					<li><NavLink to="/contacts">Contacts</NavLink></li>
					<li><NavLink to="/account">Account</NavLink></li>
				</ul>
				<FaBasketShopping
					onClick={() => setCartOpen((cartOpen = !cartOpen))}
					className={`basket-button ${cartOpen && 'active'}`}
				/>

				{cartOpen && (
					<div className='shop-cart'>
						{props.orders.length > 0 ? showOrders(props) : showNothing()}
					</div>
				)}
			</div>
			<div className='presentation'></div>
		</header>
	)
}
