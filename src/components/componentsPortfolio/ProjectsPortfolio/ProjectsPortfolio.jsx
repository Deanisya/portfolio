import React, { useEffect, useRef } from 'react';
import style from './ProjectsPortfolio.module.scss';
import { useSelector } from 'react-redux';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function ProjectsPortfolio() {
	const { projects } = useSelector(state => state.portfolioRed);
	const galleryLeftRefs = useRef([]);
	const galleryRightRefs = useRef([]);

	useEffect(() => {
		let myMedia = gsap.matchMedia();

		myMedia.add('(min-width: 1200px)', () => {
			projects.forEach((_, index) => {
				const leftItem = galleryLeftRefs.current[index];
				const rightItem = galleryRightRefs.current[index];

				if (leftItem) {
					gsap.fromTo(
						leftItem,
						{ opacity: 0, x: -150 },
						{
							opacity: 1,
							x: 0,
							ease: 'power2.out',
							scrollTrigger: {
								trigger: leftItem,
								start: 'top 90%',
								end: 'bottom 60%',
								scrub: true,
							},
						}
					);
				}

				if (rightItem) {
					gsap.fromTo(
						rightItem,
						{ opacity: 0, x: 150 },
						{
							opacity: 1,
							x: 0,
							ease: 'power2.out',
							scrollTrigger: {
								trigger: rightItem,
								start: 'top 90%',
								end: 'bottom 60%',
								scrub: true,
							},
						}
					);
				}
			});
		});
	});

	return (
		<section id='projects' className={style.projectsSection}>
			<h2 className={style.mainTitle}>PROJECTS</h2>
			<div className={style.container}>
				{projects.map((project, index) => (
					<div key={project.link} className={style.projectBlock}>
						<div className={style.imageBlock} ref={el => (galleryLeftRefs.current[index] = el)}>
							<video autoPlay muted className={style.image}>
								<source src={project.video} type='video/mp4' />
							</video>
						</div>

						<div className={style.descriptionBlock} ref={el => (galleryRightRefs.current[index] = el)}>
							<h2 className={style.title}>{project.title}</h2>
							<h3 className={style.descr}>{project.descr}</h3>
							<div className={style.projectTitle}>Project Info</div>
							<div className={style.technologies}>
								<p>Year</p>
								<p>{project.yearTime}</p>
							</div>
							<div className={style.technologies}>
								<p>Technologies</p>
								<p>{project.technologies}</p>
							</div>
							<div className={style.linkProject}>
								<a href={project.link} className={style.link}>
									See more
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default ProjectsPortfolio;
