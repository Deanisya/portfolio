export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export const addItem = (listName, item) => {
	return {
		type: ADD_ITEM,
		payload: { listName, item },
	};
};
export const removeItem = (listName, item) => {
	return {
		type: REMOVE_ITEM,
		payload: { listName, item },
	};
};
