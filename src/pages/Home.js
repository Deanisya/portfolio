import React from 'react';
import MainBlockPortfolio from '../components/componentsPortfolio/MainBlockPortfolio/MainBlockPortfolio';
import ProjectsPortfolio from '../components/componentsPortfolio/ProjectsPortfolio/ProjectsPortfolio';
import SectionContainer from '../components/componentsPortfolio/SectionContainer/SectionContainer';
import Skills from '../components/componentsPortfolio/Skills/Skills';
import FooterPortfolio from '../components/componentsPortfolio/FooterPortfolio/FooterPortfolio';

function Home() {
	return (
		<section>
			<MainBlockPortfolio />
			<SectionContainer>
				<ProjectsPortfolio />
				<Skills />
				<FooterPortfolio />
			</SectionContainer>
		</section>
	);
}

export default Home;
