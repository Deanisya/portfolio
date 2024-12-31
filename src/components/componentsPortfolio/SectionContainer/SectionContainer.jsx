import React from 'react';
import style from './SectionContainer.module.scss';

function SectionContainer(props) {
	return <section className={style.container}>{props.children}</section>;
}

export default SectionContainer;
