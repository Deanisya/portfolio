import React, { useState } from 'react';
import styles from './DragDropBlocks.module.scss';

function DragDropBlocks() {
	const [listOne, setListOne] = useState(['item 1', 'item 2', 'item 3', 'item 4']);
	const [listTwo, setListTwo] = useState(['item One', 'item Two', 'item Three', 'item Four']);
	const [draggedItem, setDraggedItem] = useState(null);
	const [deskList, setDeskList] = useState(null); // состояние для отслеживания списка из которого тянем элемент

	const handleDragStart = (item, list) => {
		setDraggedItem(item);
		setDeskList(list);
	};

	const handleDrop = list => {
		if (deskList !== list) {
			if (list === 'One') {
				setListOne(prev => [...prev, draggedItem]); // Добавляем элемент в список One
				setListTwo(prev => prev.filter(i => i !== draggedItem)); // Убираем элемент из списка Two
			} else {
				setListTwo(prev => [...prev, draggedItem]); // Добавляем элемент в список Two
				setListOne(prev => prev.filter(i => i !== draggedItem)); // Убираем элемент из списка One
			}
			setDraggedItem(null);
			setDeskList(null);
		}
	};

	return (
		<div className={styles.listsDropContainer}>
			<h2 className={styles.listDropTitle}>Реализация функциональности перетаскивания (drag-and-drop) между 2 колонками.</h2>
			<div className={styles.listsDrop}>
				<div className={styles.left} onDrop={() => handleDrop('One')} onDragOver={e => e.preventDefault()}>
					<ul className={styles.list}>
						{listOne.map((item, index) => (
							<li className={styles.item} key={index} draggable onDragStart={() => handleDragStart(item, 'One')} onDrop={() => handleDrop('One')} onDragOver={e => e.preventDefault()}>
								{item}
							</li>
						))}
						{listOne.length === 0 && <li className={styles.emptyZone}>Перетащите сюда элементы</li>}
					</ul>
				</div>
				<div className={styles.right} onDrop={() => handleDrop('Two')} onDragOver={e => e.preventDefault()}>
					<ul className={styles.list}>
						{listTwo.map((item, index) => (
							<li className={styles.item} key={index} draggable onDragStart={() => handleDragStart(item, 'Two')} onDrop={() => handleDrop('Two')} onDragOver={e => e.preventDefault()}>
								{item}
							</li>
						))}
						{listTwo.length === 0 && <li className={styles.emptyZone}>Перетащите сюда элементы</li>}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default DragDropBlocks;
