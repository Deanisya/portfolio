import React from 'react';
import { Link } from 'react-router';

function SelectionPanel() {
	return (
		<div>
			<ul>
				<li>
					<Link to='/project/toDoList'>projects 1</Link>
				</li>
				<li>
					<Link to='/project/shop'>projects 2</Link>
				</li>
			</ul>
		</div>
	);
}

export default SelectionPanel;
