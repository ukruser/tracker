import React from 'react';

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
		console.log(this.state.value);
		event.preventDefault();
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

export default CreateForm;