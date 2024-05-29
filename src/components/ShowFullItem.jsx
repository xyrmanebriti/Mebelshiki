import React from 'react'
import {useParams} from "react-router-dom";

function ShowFullItem({ items, onAdd }) {
	const { id } = useParams();
	const item = items.find(item => item.id === parseInt(id));

	if (!item) {
		return <div>Товар не найден</div>;
	}

	return (
		<div className='full-item'>
			<div>
				<img src={item.img} alt={item.title} />
				<h2>{item.title}</h2>
				<p>{item.desc}</p>
				<b>{item.price}</b>
				<div className='add-to-cart' onClick={() => onAdd(item)}>
					+
				</div>
			</div>
		</div>
	);
}

export default ShowFullItem;
