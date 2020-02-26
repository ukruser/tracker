import React from 'react';

import TrackerItem from '../item/item.component';

import './items-list.styles.scss';

const ItemsList = ({ items }) => {
	
	return (
		<div className="items-list">
			{
				items.length > 0 ? items.map(item => (
					<TrackerItem key={item.id} data={item} />
				)) : 
					<div className="items-list__msg">no trackers</div>
			}
		</div>
	);
};

export default ItemsList;