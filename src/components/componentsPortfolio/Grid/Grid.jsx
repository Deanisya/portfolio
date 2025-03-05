import React from 'react';
import style from './Grid.module.scss';
import SelectionPanel from '../SelectionPanel/SelectionPanel';

import { Outlet } from 'react-router';
// import DisplayPanel from '../DisplayPanel/DisplayPanel';

function Grid() {
	return (
		<div className={style.gridContainer}>
			<div className={style.leftPanel}>
				<SelectionPanel />
			</div>
			<div className={style.rightPanel}>
				<p>These small projects are educational, they helped me learn new technologies and master the initial development skills</p>
				<Outlet />
			</div>
		</div>
	);
}

export default Grid;
