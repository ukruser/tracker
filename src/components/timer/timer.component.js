import React from 'react';

class Timer extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			time: '00:00:00'
		}
	}
	
	componentDidMount() {
		this.intervalID = setInterval(() => this.timerRun(this.props.data),1000);
	}
	
	componentWillUnmount() {
		clearInterval(this.intervalID);
	}
	
	formatTime(timeValue) {
		return timeValue < 10 ? `0${timeValue}` : timeValue;
	}
	
	timerRun(item) {
		let hours = '00';
		let minutes = '00';
		let seconds = '00';
		let difference = 0;
		
		if(item.active) {
			difference = (new Date() - new Date(item.playStartTime)) + item.playTime;
		} else {
			difference = item.playTime;
		}
		
		if (difference > 0) {
			hours = this.formatTime(Math.floor(difference / (1000 * 60 * 60)));
			minutes = this.formatTime(Math.floor((difference / 1000 / 60) % 60));
			seconds = this.formatTime(Math.floor((difference / 1000) % 60));
		}
		
		this.setState({
			time: `${hours}:${minutes}:${seconds}`
		});
	};
	
	render() {
		return <span>{this.state.time}</span>;
	}
	
}

export default Timer;