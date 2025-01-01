import { ADD_TASKS, DELETE_TASKS, EDIT_TASKS, FILTER_TASKS, STATUS_TASKS } from '../actions/toDoListAction';

const initialState = {
	tasks: [],
	filter: 'all', // Добавляем фильтр в состояние
};

export const toDoListReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TASKS:
			const obj = { id: Date.now(), text: action.input, completed: false };
			return {
				...state,
				tasks: [...state.tasks, obj], // Обращаемся к tasks
			};

		case DELETE_TASKS:
			return {
				...state,
				tasks: state.tasks.filter(task => task.id !== action.taskId), // Обращаемся к tasks
			};

		case STATUS_TASKS:
			return {
				...state,
				tasks: state.tasks.map(task => (task.id === action.taskId ? { ...task, completed: !task.completed } : task)), // Обращаемся к tasks
			};

		case FILTER_TASKS:
			return {
				...state,
				filter: action.filter, // Обновляем фильтр
			};

		case EDIT_TASKS:
			return {
				...state,
				tasks: state.tasks.map(task => (task.id === action.editTaskId ? { ...task, text: action.editInput } : task)),
			};

		default:
			return state;
	}
};
