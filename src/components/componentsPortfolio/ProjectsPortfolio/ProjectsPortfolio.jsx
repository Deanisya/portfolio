import React from 'react';
import style from './ProjectsPortfolio.module.scss';
import { useSelector } from 'react-redux';
// import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function ProjectsPortfolio() {
	const { projects } = useSelector(state => state.portfolioRed);

	// const scrollRef = useRef(null);
	// const imgRef = useRef(null);
	// // const tl = gsap.timeline();

	// useGSAP(() => {
	// 	gsap.to(
	// 		scrollRef.current.children,
	// 		{
	// 			scrollTrigger: {
	// 				trigger: scrollRef.current,
	// 				start: 'top 90%',
	// 				end: 'bottom 20%',
	// 				scrub: true,
	// 			},
	// 		}
	// 		// {
	// 		// 	opacity: 0,
	// 		// 	x: -500,
	// 		// },
	// 		// {
	// 		// 	opacity: 1,
	// 		// 	// x: 0,
	// 		// 	// duration: 3,
	// 		// 	// delay: 0.5,
	// 		// 	stagger: 0.3,
	// 		// 	ease: 'power1.inOut',
	// 		// 	scrollTrigger: {
	// 		// 		trigger: scrollRef.current,
	// 		// 		start: 'top 90%',
	// 		// 		end: 'bottom 20%',
	// 		// 		scrub: true,
	// 		// 	},
	// 		// }
	// 	);
	// });

	// useGSAP(() => {
	// 	gsap.fromTo(
	// 		imgRef.current,
	// 		{
	// 			x: -500,
	// 			opacity: 0,
	// 		},
	// 		{
	// 			x: 0,
	// 			opacity: 1,
	// 			delay: 2,
	// 			duration: 2,
	// 			ease: 'power1.inOut',
	// 			stagger: 0.2,
	// 		}
	// 	);
	// }, scrollRef);

	return (
		<section id='projects' className={style.projectsSection}>
			<h2 className={style.mainTitle}>PROJECTS</h2>
			<div className={style.container}>
				{projects.map(project => {
					return (
						<div key={project.link} className={style.projectBlock}>
							<div className={style.imageBlock} id='left'>
								<video autoPlay muted className={style.image}>
									<source src={project.video} type='video/mp4' />
								</video>
							</div>

							<div className={style.descriptionBlock} id='right'>
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
					);
				})}
			</div>
		</section>
	);
}

export default ProjectsPortfolio;
