// import React, { useEffect, useState } from 'react';
import style from './ToDoList.module.scss';
import circleIcon from '../../image/icons/icons8-circle-50.png';
import checkedIcon from '../../image/icons/icons8-checked-50.png';

import { useDispatch, useSelector } from 'react-redux';
import { addTaskAC, deleteTaskAC, editTaskAC, filterTaskAC, statusTaskAC } from '../../state/actions/toDoListAction';
import { useState } from 'react';

import { filterTasksSelector } from '../../state/selectors/toDoListSelectors';

function ToDoListRedux({ title }) {
	const dispatch = useDispatch();
	const tasks = useSelector(filterTasksSelector);
	const filter = useSelector(state => state.toDoListRed.filter);
	console.log(tasks);

	const [input, setInput] = useState('');
	const [error, setError] = useState(null);
	const [editTaskId, setEditTaskId] = useState(null);
	const [editInput, setEditInput] = useState('');

	const addTask = () => {
		if (input.trim() !== '') {
			dispatch(addTaskAC(input));
			setInput('');
		} else {
			setError('Error: Task cannot be empty');
		}
	};

	const deleteTask = taskId => {
		dispatch(deleteTaskAC(taskId));
	};

	const filterTask = filter => {
		dispatch(filterTaskAC(filter));
	};
	const completedTask = taskId => {
		dispatch(statusTaskAC(taskId));
	};

	const startEditTask = task => {
		setEditTaskId(task.id);

		setEditInput(task.text.trim());
		console.log(editInput);
	};

	const saveEditTask = () => {
		if (editInput.trim() !== '') {
			dispatch(editTaskAC(editTaskId, editInput));
			setEditTaskId(null);
		} else {
			setError('Error: Task cannot be empty');
		}
	};

	const handleInputChange = e => {
		setInput(e.target.value);
		if (error) {
			setError(null);
		}
	};
	const handleEditInputChange = e => {
		setEditInput(e.target.value);
		if (error) {
			setError(null);
		}
	};

	return (
		<section className={style.container}>
			<div
				className={style.toDoApp}
				style={{
					'--circle-icon': `url(${circleIcon})`,
					'--checked-icon': `url(${checkedIcon})`,
				}}
			>
				<h2>{title}</h2>
				<div className={style.toDoInput}>
					<input type='text' value={input} onChange={handleInputChange} />
					<button onClick={addTask}>Add task</button>
				</div>
				{error && <div className={style.error}>{error}</div>}
				<button className={filter === 'all' ? style.filterBtnActive : style.filterBtn} onClick={() => filterTask('all')}>
					All
				</button>
				<button className={filter === 'ready' ? style.filterBtnActive : style.filterBtn} onClick={() => filterTask('ready')}>
					Ready
				</button>
				<button className={filter === 'unready' ? style.filterBtnActive : style.filterBtn} onClick={() => filterTask('unready')}>
					Unready
				</button>

				<ul>
					{tasks.map(task => {
						const isEditing = editTaskId === task.id;
						return (
							<li
								onClick={() => {
									if (editTaskId !== task.id) {
										completedTask(task.id);
									}
								}}
								className={task.completed && !isEditing ? style.checked : ''}
								key={task.id}
							>
								{isEditing ? (
									<>
										<input className={style.inputElem} type='text' value={editInput} onChange={handleEditInputChange}></input>
										<button className={style.saveBtn} onClick={saveEditTask}>
											Save
										</button>
									</>
								) : (
									<>
										{task.text}
										<div className={style.btnActions}>
											<button
												onClick={e => {
													e.stopPropagation();
													startEditTask(task);
												}}
												className={style.editBtn}
											>
												Edit
											</button>
											<button
												className={style.deleteBtn}
												onClick={e => {
													e.stopPropagation();
													deleteTask(task.id);
												}}
											>
												x
											</button>
										</div>
									</>
								)}
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
}

export default ToDoListRedux;
