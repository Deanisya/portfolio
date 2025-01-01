export const ADD_TASKS = 'ADD_TASKS';
export const DELETE_TASKS = 'DELETE_TASKS';
export const FILTER_TASKS = 'FILTER_TASKS';
export const STATUS_TASKS = 'STATUS_TASKS';
export const EDIT_TASKS = 'EDIT_TASKS';

export const addTaskAC = input => {
	return {
		type: ADD_TASKS,
		input,
	};
};

export const deleteTaskAC = taskId => {
	return {
		type: DELETE_TASKS,
		taskId,
	};
};

export const filterTaskAC = filter => {
	return {
		type: FILTER_TASKS,
		filter,
	};
};

export const statusTaskAC = taskId => {
	return {
		type: STATUS_TASKS,
		taskId,
	};
};

export const editTaskAC = (editTaskId, editInput) => {
	return {
		type: EDIT_TASKS,
		editTaskId,
		editInput,
	};
};
