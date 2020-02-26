import React from 'react';

import { IconPlay, IconPause, IconRemove } from '../../assets/icons';

import './item.styles.scss';

const TrackerItem = ({ data }) => {
	return(
		<div className={`tracker-item ${data.active ? 'tracker-item--active' : ''}`}>
			<div className='tracker-item__title'>{data.title}</div>
			<div className='tracker-item__timer'>{data.startTime}</div>
			<div className='tracker-item__buttons'>
				<button className="play-pause-btn play">
					<IconPlay />
				</button>
				<button className="remove-btn">
					<IconRemove />
				</button>
			</div>
		</div>
	);
};

export default TrackerItem;