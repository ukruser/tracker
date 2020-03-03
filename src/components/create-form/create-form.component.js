import React from 'react';
import { connect } from 'react-redux';

import { addTracker } from '../../redux/actions';

import './create-form.styles.scss';

import { IconStartFilled } from '../../assets/icons';

class CreateForm extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {value: ''};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}
	
	handleSubmit(event) {
		event.preventDefault();
		const startDateTime = new Date();
		const startInMs = startDateTime.getTime();
		const title = this.state.value !== '' ? this.state.value : `untitled ${startDateTime.toLocaleString()}`;
		const item = {
			id: startInMs,
			title,
			active: true,
			pauseTime: 0,
			playTime: 0,
			pauseStartTime: 0,
			playStartTime: startInMs
		}
		this.props.addTracker(item);
		this.setState({value: ''});
	}

	render() {
		let placeholderText = 'Enter tracker name';
		return (
			<div className="create-form">
				<form className="create-form__form" onSubmit={this.handleSubmit}>
					<input 
						className="create-form__input" 
						type="text" 
						value={this.state.value} 
						placeholder={placeholderText}  
						onChange={this.handleChange} 
						onFocus={(e) => e.target.placeholder = ""} 
						onBlur={(e) => e.target.placeholder = placeholderText}
						/>
					<button className="create-form__button">
						<IconStartFilled />
					</button>
				</form>
			</div>
		);
	}	
};

const mapDispatchToProps = dispatch => ({
  addTracker: item => dispatch(addTracker(item))
});

export default connect(null, mapDispatchToProps)(CreateForm);