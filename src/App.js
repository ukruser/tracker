import React from 'react';

import Header from './components/header/header.component';
import CreateForm from './components/create-form/create-form.component';
import ItemsList from './components/items-list/items-list.component';

import './App.scss';

const App = () => (
	<div className="app-wrapper">
		<Header />
		<CreateForm />
		<ItemsList />
	</div>
);

export default App;