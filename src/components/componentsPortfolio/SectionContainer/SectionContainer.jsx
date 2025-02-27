import React from 'react';
import style from './SectionContainer.module.scss';

function SectionContainer(props) {
	return <div className={style.container}>{props.children}</div>;
}

export default SectionContainer;
