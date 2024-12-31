import React from 'react';
import MainBlockPortfolio from '../components/componentsPortfolio/MainBlockPortfolio/MainBlockPortfolio';
import ProjectsPortfolio from '../components/componentsPortfolio/ProjectsPortfolio/ProjectsPortfolio';

function Home() {
	return (
		<section>
			<MainBlockPortfolio />
			<ProjectsPortfolio />
		</section>
	);
}

export default Home;
