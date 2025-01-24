import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

import HeaderPortfolio from './components/componentsPortfolio/HeaderPortfolio/HeaderPortfolio';
import ToDoListRedux from './components/ToDoList/ToDoListRedux';
import { Route, Routes } from 'react-router';
import FooterPortfolio from './components/componentsPortfolio/FooterPortfolio/FooterPortfolio';
import AnimatedSocialLink from './components/AnimatedSocialLink/AnimatedSocialLink';
import Slider from './components/Slider/Slider';
import DragDropList from './components/DragDropList/DragDropList';
import DragDropBlocks from './components/DragDropBlocks/DragDropBlocks';
import DragDropBlocksOnRedux from './components/DragDropBlocksOnRedux/DragDropBlocksOnRedux';

function App() {
	return (
		<>
			<HeaderPortfolio />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/project/*' element={<Projects />}>
					<Route path='toDoList' element={<ToDoListRedux title='To Do List' />} />
					<Route path='animatedSocialLink' element={<AnimatedSocialLink />} />
					<Route path='slider' element={<Slider />} />
					<Route path='draggedList' element={<DragDropList />} />
					<Route path='draggedListBlocks' element={<DragDropBlocks />} />
					<Route path='draggedListThreeBlocks' element={<DragDropBlocksOnRedux />} />
				</Route>
				<Route path='/' element={<FooterPortfolio />} />
			</Routes>
		</>
	);
}
export default App;
