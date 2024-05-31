import React, { Component } from 'react'
import { FaTrash } from 'react-icons/fa'
import {Bounce, toast} from "react-toastify";

export class Order extends Component {
	render() {
		return (
			<div className='item'>
				<img src={this.props.item.img} alt={this.props.item.title}/>
				<h2>{this.props.item.title}</h2>
				<b>{this.props.item.price}</b>
				<p>Количество: {this.props.item.quantity}</p>
				<FaTrash
					className='delete-icon'
					onClick={() => {
						this.props.onDelete(this.props.item.id);
						toast.error(this.props.item.title + ' deleted from cart', {
								position: "top-right",
								autoClose: 5000,
								hideProgressBar: false,
								closeOnClick: true,
								pauseOnHover: false,
								draggable: true,
								theme: "dark",
								transition: Bounce,
							}
						);
					}
					}
				/>
			</div>
		)
	}
}

export default Order
