import React, { Component } from 'react'
import {NavLink} from "react-router-dom";

export class Item extends Component {
	render() {
		return (
			<div className='item'>
				<NavLink to={`/category/${this.props.item.category}/${this.props.item.id}`} key={this.props.item.id}>
					<img
						src={this.props.item.img}
						alt={this.props.item.title}
					/>
				</NavLink>
				<h2>{this.props.item.title}</h2>
				<p>{this.props.item.desc}</p>
				<b>{this.props.item.price}</b>
				<div
					className='add-to-cart'
					onClick={() => this.props.onAdd(this.props.item)}
				>
					+
				</div>
			</div>
		)
	}
}

export default Item
