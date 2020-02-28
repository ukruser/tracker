import React from 'react';
import { connect } from 'react-redux';

import { removeTracker } from '../../redux/actions';

import Timer from '../timer/timer.component';
import { IconPlay, IconPause, IconRemove } from '../../assets/icons';

import './item.styles.scss';

class TrackerItem extends React.Component {
	
	constructor(props) {
		super(props);
		this.handleOnClickRemoveBtn = this.handleOnClickRemoveBtn.bind(this);
	}
	
	handleOnClickRemoveBtn() {
		const { data, removeTracker } = this.props;
		removeTracker(data.id);
	}
	
	handlePause() {
		const pauseStart = new Date();
		const playTime = new Date() - new Date(this.props.data.playTime);
	}
	
	handleResume() {
		
	}
	
	handleOnClickPauseResumeBtn() {
		console.log('pause');
	}
	
	render() {
		const { data } = this.props;
		return(
			<div className={`tracker-item ${data.active ? 'tracker-item--active' : ''}`}>
				<div className='tracker-item__title'>{data.title}</div>
				<div className='tracker-item__timer'>
					<Timer start={data.id} />
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
  removeTracker: id => dispatch(removeTracker(id))
});

export default connect(null, mapDispatchToProps)(TrackerItem);