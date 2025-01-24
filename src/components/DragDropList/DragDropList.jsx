import React from 'react';
import styles from './DragDropList.module.scss';
import { useState } from 'react';

function DragDropList() {
	const items = ['item 1', 'item 2', 'item 3', 'item 4', 'item 5'];
	const [list, setList] = useState(items);
	const [draggedIndex, setDraggedIndex] = useState(null); // это будет состояние для отслеживания перетаскиваемого элемента

	const handleDragStart = index => {
		setDraggedIndex(index); // Сохраняем индекс перетаскиваемого элемента
	};

	const handleDrop = index => {
		const newList = [...list];
		const draggedItem = newList.splice(draggedIndex, 1)[0];
		newList.splice(index, 0, draggedItem); // Вставляем элемент на новое место
		setList(newList);
		setDraggedIndex(null);
	};

	return (
		<div className={styles.dragDropList}>
			<h2> Реализация функциональности перетаскивания (drag-and-drop)</h2>
			<ul className={styles.dragList} onDragOver={e => e.preventDefault()}>
				{list.map((item, index) => (
					<li
						key={index}
						draggable
						onDragStart={() => handleDragStart(index)}
						onDrop={() => handleDrop(index)}
						onDragOver={e => e.preventDefault()}
						style={{ backgroundColor: draggedIndex === index ? '#8fbc8f' : '#f0f0f0' }}
					>
						{item}
					</li>
				))}
			</ul>
		</div>
	);
}

export default DragDropList;
