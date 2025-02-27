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
					<p>Frontend developer</p>
					{/* <LinkConnect /> */}
				</div>
			</SectionContainer>
		</div>
	);
}

export default MainBlockPortfolio;
