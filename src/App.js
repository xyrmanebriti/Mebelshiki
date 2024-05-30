import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Items from './components/Items'
import Categories from './components/Categories'
import About from './components/About'
import {Routes, Route} from 'react-router-dom';
import ShowFullItem from './components/ShowFullItem'
import Chair from './img/chair.jpg'
import ErgoOffChair from './img/ergonomic_chair.jpg'
import OffChair from './img/office_chair.jpg'
import OffDesk from './img/desk.jpg'
import Table from './img/table.jpg'
import Contacts from "./components/Contacts";
import Account from "./components/Account";

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			orders: [],
			currentItems: [],
			items: [
				{
					id: 1,
					title: 'Chair',
					img: Chair,
					desc: 'A comfortable chair for your home office',
					category: 'chairs',
					price: '990$',
				},
				{
					id: 2,
					title: 'Table',
					img: Table,
					desc: 'A comfortable table for your home office',
					category: 'tables',
					price: '2190$',
				},
				{
					id: 3,
					title: 'Office Chair',
					img: OffChair,
					desc: 'A comfortable office chair for your home office',
					category: 'chairs',
					price: '249$',
				},
				{
					id: 4,
					title: 'Ergonomic Office Chair',
					img: ErgoOffChair,
					desc: 'A comfortable chair for your home',
					category: 'chairs',
					price: '1889$',
				},
				{
					id: 5,
					title: 'Office Desk',
					img: OffDesk,
					desc: 'A comfortable desk for your home office',
					category: 'desks',
					price: '1990$',
				},
			],
		}
		this.state.currentItems = this.state.items
		this.addToOrder = this.addToOrder.bind(this)
		this.deleteOrder = this.deleteOrder.bind(this)
		this.chooseCategory = this.chooseCategory.bind(this)

	}
	render() {
		return (
			<div className='wrapper'>
				<Header orders={this.state.orders} onDelete={this.deleteOrder} />
				<Routes>
					<Route path='/' element={
						<>
							<Categories chooseCategory={this.chooseCategory} />
							<Items
								items={this.state.items}
								onAdd={this.addToOrder}
							/>
						</>
					}>
					</Route>
					<Route path='/category/:category/:id' element={
						<>
							<Categories chooseCategory={this.chooseCategory} />
							<ShowFullItem onAdd={this.addToOrder} items={this.state.items} />
						</>
					} />
					<Route
						path='/category/:category'
						element={
							<>
								<Categories chooseCategory={this.chooseCategory} />
								<Items
									items={this.state.currentItems}
									onAdd={this.addToOrder}
								/>
							</>
						}
					/>
					<Route path='/about' element={<About/>} />
					<Route path='/contacts' element={<Contacts/>} />
					<Route path='/account' element={<Account/>} />
				</Routes>
				<Footer />
			</div>
		)
	}

	chooseCategory(category) {
		if (category === 'all') {
			this.setState({ currentItems: this.state.items })
			return
		}
		this.setState({
			currentItems: this.state.items.filter(el => el.category === category),
		})
	}

	deleteOrder(id) {
		this.setState({ orders: this.state.orders.filter(el => el.id !== id) })
	}

	addToOrder(item) {
		let isInArray = false
		this.state.orders.forEach(el => {
			if (el.id === item.id) {
				isInArray = true
			}
		})
		if (!isInArray) this.setState({ orders: [...this.state.orders, item] })
	}
}

export default App
