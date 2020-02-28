import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import ActionTypes from './types';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['tracker']
};

const INITIAL_STATE = {
	items: []
};

const trackerReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ActionTypes.ADD_TRACKER:
			return {
				...state,
				items: [...state.items, action.payload]
			}
		case ActionTypes.REMOVE_TRACKER:
			return {
				...state,
				items: state.items.filter(({ id }) => id !== action.payload)
			}
		default:
			return state;
	}
};

const rootReducer = combineReducers({
	tracker: trackerReducer,
});

export default persistReducer(persistConfig, rootReducer);