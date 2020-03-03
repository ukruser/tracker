import ActionTypes from './types';

export const addTracker = item => ({
	type: ActionTypes.ADD_TRACKER,
	payload: item
});

export const removeTracker = id => ({
	type: ActionTypes.REMOVE_TRACKER,
	payload: id
});

export const pauseResumeTracker = item => ({
	type: ActionTypes.PAUSE_TRACKER,
	payload: item
});