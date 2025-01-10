import React from 'react';
import style from './ProjectsPortfolio.module.scss';

import { useSelector } from 'react-redux';

function ProjectsPortfolio() {
	const { projects } = useSelector(state => state.portfolioRed);

	return (
		<section id='projects' className={style.projectsSection}>
			<h2 className={style.mainTitle}>PROJECTS</h2>
			<div className={style.container}>
				{projects.map(project => {
					return (
						<div key={project.link} className={style.projectBlock}>
							<div className={style.imageBlock}>
								<img src={project.image} alt='Project' className={style.image} />
							</div>
							<div className={style.descriptionBlock}>
								<h2 className={style.title}>{project.title}</h2>
								<h3 className={style.descr}>{project.descr}</h3>
								<div className={style.projectTitle}>{project.projectTitle}</div>
								<div className={style.technologies}>
									<p>Year</p>
									<p>{project.yearTime}</p>
								</div>
								<div className={style.technologies}>
									<p>Role</p>
									<p>{project.technologies}</p>
								</div>
								<div className={style.linkProject}>
									<a href={project.link} className={style.link}>
										See more
									</a>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}

export default ProjectsPortfolio;
