import React from 'react';
import { connect } from 'react-redux';

import { removeTracker, pauseResumeTracker } from '../../redux/actions';

import Timer from '../timer/timer.component';
import { IconPlay, IconPause, IconRemove } from '../../assets/icons';

import './item.styles.scss';

class TrackerItem extends React.Component {
	
	constructor(props) {
		super(props);
		this.handleOnClickRemoveBtn = this.handleOnClickRemoveBtn.bind(this);
		this.handleOnClickPauseResumeBtn = this.handleOnClickPauseResumeBtn.bind(this);
	}
	
	handleOnClickRemoveBtn() {
		const { data, removeTracker } = this.props;
		removeTracker(data.id);
	}
	
	handleResume() {
		const { data, resumeTracker } = this.props;
		
	}
	
	handleOnClickPauseResumeBtn() {
		const { data, pauseResumeTracker } = this.props;
		let item = { ...data };
		if (item.active === true) {
			item.pauseStartTime = new Date().getTime();
			item.playTime = (new Date() - new Date(item.playStartTime)) + item.playTime;
			item.active = false;
		} else {
			item.playStartTime = new Date().getTime();
			item.pauseTime = (new Date() - new Date(item.pauseStartTime)) + item.pauseTime;
			item.active = true;
		}
		pauseResumeTracker(item);
	}
	
	render() {
		const { data } = this.props;
		return(
			<div className={`tracker-item ${data.active ? 'tracker-item--active' : ''}`}>
				<div className='tracker-item__title'>{data.title}</div>
				<div className='tracker-item__timer'>
					<Timer data={data} />
				</div>
				<div className='tracker-item__buttons'>
					<button onClick={this.handleOnClickPauseResumeBtn} className="play-pause-btn play">
						{data.active ? <IconPause /> : <IconPlay />}
					</button>
					<button onClick={this.handleOnClickRemoveBtn} className="remove-btn">
						<IconRemove />
					</button>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	removeTracker: id => dispatch(removeTracker(id)),
	pauseResumeTracker: item => dispatch(pauseResumeTracker(item))
});

export default connect(null, mapDispatchToProps)(TrackerItem);