import React from 'react';
import style from './MainBlockPortfolio.module.scss';
import SectionContainer from '../SectionContainer/SectionContainer';
import LinkConnect from '../LinkConnect/LinkConnect';
import AnimatedText from '../AnimatedText/AnimatedText';

function MainBlockPortfolio() {
	return (
		<div className={style.sectionMain}>
			<SectionContainer>
				<div className={style.main}>
					<AnimatedText text='Hey, I’m' delay={0} />
					<AnimatedText text='Ksenia' delay={0.3} />
					<AnimatedText text='Vinogradova' delay={0.6} />
					<AnimatedText text='Frontend developer' delay={1} />
				</div>
				<LinkConnect />
			</SectionContainer>
		</div>
	);
}

export default MainBlockPortfolio;
