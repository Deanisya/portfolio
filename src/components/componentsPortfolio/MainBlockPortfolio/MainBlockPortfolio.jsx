import React from 'react';
import style from './MainBlockPortfolio.module.scss';
import SectionContainer from '../SectionContainer/SectionContainer';
import LinkConnect from '../LinkConnect/LinkConnect';

function MainBlockPortfolio() {
	return (
		<div className={style.sectionMain}>
			<SectionContainer>
				<div className={style.main}>
					<p>Hey, I’m</p>
					<p>Ksenia Vinogradova</p>
					<p>
						I'm a front-end developer from Kazan. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. I have been freelancing for a year
						now while studying at the university and I've manage to gain a decent amount of experience and valuable knowledge from all different kinds of fields throughout my projects/work.
					</p>
					<LinkConnect />
				</div>
			</SectionContainer>
		</div>
	);
}

export default MainBlockPortfolio;
