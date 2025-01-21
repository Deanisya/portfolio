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
					<Link to='/project/animatedSocialLink'>projects 2</Link>
				</li>
				<li>
					<Link to='/project/slider'>projects 3</Link>
				</li>
			</ul>
		</div>
	);
}

export default SelectionPanel;
