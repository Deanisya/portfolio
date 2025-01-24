import { ADD_ITEM, REMOVE_ITEM } from '../actions/dragDropAction';

const initialState = {
	listOne: ['item 1', 'item 2', 'item 3', 'item 4'],
	listTwo: ['item One', 'item Two', 'item Three', 'item Four'],
	listThree: ['item A', 'item B'],
};

export const dragDropReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_ITEM:
			if (!Array.isArray(state[action.payload.listName])) {
				console.error(`Expected an array for ${action.payload.listName}`);
				return state; // Возвращаем текущее состояние, если это не массив
			}
			return {
				...state,
				[action.payload.listName]: [...state[action.payload.listName], action.payload.item],
			};
		case REMOVE_ITEM:
			return {
				...state,
				[action.payload.listName]: state[action.payload.listName].filter(i => i !== action.payload.item),
			};

		default:
			return state;
	}
};
