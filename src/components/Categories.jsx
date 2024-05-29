import React, { Component } from 'react'
import { NavLink} from "react-router-dom";

export class Categories extends Component {
	constructor(props) {
		super(props)
		this.state = {
			categories: [
				{
					key: 'all',
					name: 'All',
				},
				{
					key: 'chairs',
					name: 'Chairs',
				},
				{
					key: 'tables',
					name: 'Tables',
				},
				{
					key: 'desks',
					name: 'Desks',
				},
			],
		}
	}
	render() {
		return (
			<div className='categories'>
				{this.state.categories.map(el => (
					<NavLink to={`/category/${el.key}`} key={el.key} onClick={() => this.props.chooseCategory(el.key)}>
						{el.name}
					</NavLink>
				))}
			</div>
		)
	}
}

export default Categories
