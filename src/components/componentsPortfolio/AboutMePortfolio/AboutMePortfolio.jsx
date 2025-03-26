import React from 'react';
import s from './AboutMePortfolio.module.scss';
import photo from '../../../image/photo_2025-03-26_06-16-25.jpg';

export default function AboutMePortfolio() {
	return (
		<div className={s.grid}>
			<div className={s.imgBlock}>
				<img className={s.img} src={photo} alt='my_photo' />
			</div>
			<div className={s.infoAboutMe}>
				<h1 className={s.title}>
					Hi, my name is Ksenia. I am a frontend developer with 2 years of experience. I specialize in React, and I love complex tasks and creating intuitive interfaces. I believe that good code is
					when it works perfectly and reads like a book.
				</h1>
				<p className={s.descr}>Main stack: React, Redux, SCSS. I can work with the REST API, optimize performance, and configure the build (Webpack/Vite).</p>
			</div>
		</div>
	);
}
