import React from 'react';

import Header from './components/header/header.component';
import CreateForm from './components/create-form/create-form.component';
import ItemsList from './components/items-list/items-list.component';

import './App.scss';

class App extends React.Component {
	
	render() {
		
		let items = [
					{
						id: 1,
						title: 'No name tracker #1',
						startTime: '00:00:12',
						active: true
					},
					{
						id: 2,
						title: 'No name tracker #2',
						startTime: '11:23:09',
						active: false
					},
					{
						id: 3,
						title: 'No name tracker #3',
						startTime: '15:41:37',
						active: false
					}
				];
		
		return(
			<div className="app-wrapper">
				<Header />
				<CreateForm />
				<ItemsList items={items} />
			</div>
		);
	}
}

export default App;