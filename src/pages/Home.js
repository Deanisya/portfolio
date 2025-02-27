import React from 'react';
import MainBlockPortfolio from '../components/componentsPortfolio/MainBlockPortfolio/MainBlockPortfolio';
import ProjectsPortfolio from '../components/componentsPortfolio/ProjectsPortfolio/ProjectsPortfolio';
import SectionContainer from '../components/componentsPortfolio/SectionContainer/SectionContainer';
import Skills from '../components/componentsPortfolio/Skills/Skills';
import FooterPortfolio from '../components/componentsPortfolio/FooterPortfolio/FooterPortfolio';
import BackgroundImg from '../components/componentsPortfolio/BackgroundImg/BackgroundImg';

function Home() {
	return (
		<section>
			<MainBlockPortfolio />
			<BackgroundImg />
			<SectionContainer>
				<ProjectsPortfolio />
				<Skills />
				<FooterPortfolio />
			</SectionContainer>
		</section>
	);
}

export default Home;
