import ActionTypes from './types';

export const addTracker = item => ({
	type: ActionTypes.ADD_TRACKER,
	payload: item
});

export const removeTracker = id => ({
	type: ActionTypes.REMOVE_TRACKER,
	payload: id
});

export const pauseTracker = id => ({
	type: ActionTypes.PAUSE_TRACKER,
	payload: id
});

export const resumeTracker = id => ({
	type: ActionTypes.RESUME_TRACKER,
	payload: id
});