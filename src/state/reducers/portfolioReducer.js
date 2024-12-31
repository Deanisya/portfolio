import imageProjectOne from '../../image/work.png';
export const initialState = {
	links: [
		{ path: '/', text: 'Home' },
		{ path: '/about', text: 'About' },
		{ path: '/project', text: 'Project' },
		{ path: '/contacts', text: 'Contacts' },
	],
	projects: [
		{
			image: imageProjectOne,
			title: 'Promotional landing page for our favorite show',
			descr:
				'Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures',
			projectTitle: 'Project Info',
			yearTime: '2024',
			technologies: 'Frontend',
			link: '#',
		},
	],
};
export const portfolioReducer = (state = initialState, action) => {
	switch (action.type) {
		// case NAV_ITEMS:
		// 	return {

		//     };
		default:
			return state;
	}
};
