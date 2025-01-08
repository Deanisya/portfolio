import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import HeaderPortfolio from './components/componentsPortfolio/HeaderPortfolio/HeaderPortfolio';
import ToDoListRedux from './components/ToDoList/ToDoListRedux';
import { Route, Routes } from 'react-router';

function App() {
	return (
		<>
			<HeaderPortfolio />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/project/*' element={<Projects />}>
					<Route path='toDoList' element={<ToDoListRedux title='To Do List' />} />
					<Route path='shop' />
				</Route>
				<Route path='/contacts' element={<Contact />} />
			</Routes>
		</>
	);
}
export default App;
