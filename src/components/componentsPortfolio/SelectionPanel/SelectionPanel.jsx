import React from 'react';
import { Link } from 'react-router';
import s from './SelectionPanel.module.scss';

function SelectionPanel() {
	const projectBtn = [
		{
			project: 'toDoList',
			list: 'projects 1',
		},
		{
			project: 'animatedSocialLink',
			list: 'projects 2',
		},
		{
			project: 'slider',
			list: 'projects 3',
		},
		{
			project: 'draggedList',
			list: 'projects 4',
		},
		{
			project: 'draggedListBlocks',
			list: 'projects 5',
		},
		{
			project: 'draggedListThreeBlocks',
			list: 'projects 6',
		},
	];
	return (
		<div>
			<ul className={s.projectsListLinks}>
				{projectBtn.map((item, index) => (
					<li key={index} className={s.link}>
						<Link to={`/project/${item.project}`}>
							<span>{item.list}</span>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

export default SelectionPanel;
