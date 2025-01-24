import React, { useState } from 'react';
import styles from './DragDropBlocksOnRedux.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../../state/actions/dragDropAction';

function DragDropBlocksOnRedux() {
	const dispatch = useDispatch();
	const listOne = useSelector(state => state.dragDropRed.listOne);
	console.log(listOne);

	const listTwo = useSelector(state => state.dragDropRed.listTwo);
	const listThree = useSelector(state => state.dragDropRed.listThree);
	const [draggedItem, setDraggedItem] = useState(null);
	const [deskList, setDeskList] = useState(null);

	const handleDragStart = (list, item) => {
		setDraggedItem(item);
		setDeskList(list);
	};

	const handleDrop = currentList => {
		if (deskList && draggedItem && deskList !== currentList) {
			dispatch(addItem(currentList, draggedItem));
			dispatch(removeItem(deskList, draggedItem));
			setDraggedItem(null);
			setDeskList(null);
		}
	};

	const renderList = (list, listName) => {
		return (
			<div className={styles[listName]} onDrop={() => handleDrop(listName)} onDragOver={e => e.preventDefault()}>
				<ul className={styles.list}>
					{list.map((item, index) => (
						<li className={styles.item} key={index} draggable onDragStart={() => handleDragStart(listName, item)}>
							{item}
						</li>
					))}
					{list.length === 0 && <li className={styles.emptyZone}>Перетащите сюда элементы</li>}
				</ul>
			</div>
		);
	};

	return (
		<div className={styles.listsDropContainer}>
			<h2 className={styles.listDropTitle}>Реализация функциональности перетаскивания (drag-and-drop) между 3 колонками, реализовано с помощью Redux.</h2>
			<div className={styles.listsDrop}>
				{renderList(listOne, 'listOne')}
				{renderList(listTwo, 'listTwo')}
				{renderList(listThree, 'listThree')}
			</div>
		</div>
	);
}
export default DragDropBlocksOnRedux;
