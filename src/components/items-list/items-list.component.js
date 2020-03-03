import React from 'react';
import { connect } from 'react-redux';

import TrackerItem from '../item/item.component';

class ItemsList extends React.Component {
	
	render() {
		const { items } = this.props;
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
}

const mapStateToProps = state => ({
	items: state.tracker.items
});

export default connect(mapStateToProps)(ItemsList);