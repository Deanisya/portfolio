export const filterTasksSelector = state => {
	const { tasks, filter } = state.toDoListRed; // Измените на ваше имя редюсера

	switch (filter) {
		case 'all':
			return tasks;
		case 'ready':
			return tasks.filter(task => task.completed);
		case 'unready':
			return tasks.filter(task => !task.completed);
		default:
			return tasks;
	}
};
