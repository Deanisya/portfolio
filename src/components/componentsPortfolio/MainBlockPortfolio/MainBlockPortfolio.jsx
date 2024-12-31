import React from 'react';
import style from './MainBlockPortfolio.module.scss';
import img from '../../../image/main-photo.jpg';

function MainBlockPortfolio() {
	return (
		<section className={style.sectionMain}>
			<div className={style.mainLeft}>
				<div className={style.mainTitle}>
					<p>Hi, I am Ksenia</p>
					<p>Frontend</p>
					<p>Developer</p>
				</div>
			</div>
			<div className={style.mainRight}></div>
			<div className={style.mainImage}>
				<img className={style.image} src={img} alt='Main-Photo' />
			</div>
		</section>
	);
}

export default MainBlockPortfolio;
