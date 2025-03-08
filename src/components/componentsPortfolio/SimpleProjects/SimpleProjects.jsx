import React from 'react';
import style from './SimpleProjects.module.scss';
import SelectionPanel from '../SelectionPanel/SelectionPanel';

import { Outlet, useOutlet } from 'react-router';

function SimpleProjects() {
	const outletContent = useOutlet();

	return (
		<div className={style.gridContainer}>
			<div className={style.leftPanel}>
				<SelectionPanel />
			</div>
			<div className={style.rightPanel}>
				<p style={{ display: outletContent ? 'none' : 'block' }}>These small projects are educational, they helped me learn new technologies and master the initial development skills</p>
				<Outlet />
			</div>
		</div>
	);
}

export default SimpleProjects;
