import React from 'react';
import style from './Skills.module.scss';
import { useSelector } from 'react-redux';

function Skills() {
	const { skills } = useSelector(state => state.portfolioRed);

	return (
		<div className={style.skillsBlock}>
			<div className={style.skillsTextBlock}>
				<h3 className={style.skillsTitle}>Essential tools i use</h3>
				<p className={style.skillsSubtitle}>Powerful tools and technologies that I use to create websites and applications</p>
			</div>
			<div className={style.skillsContainer}>
				{skills.map((skill, i) => {
					return (
						<div key={i} className={style.skillsCard}>
							<div className={style.skillsIcon}>{skill.svg}</div>
							<p className={style.skillsTitleIcon}>{skill.title}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Skills;
