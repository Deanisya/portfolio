import React from 'react';
import style from './SideBar.module.scss';
import { HashLink as Link } from 'react-router-hash-link';
import { useSelector } from 'react-redux';

function SideBar({ handleClick, active, activeBurger }) {
	const { links } = useSelector(state => state.portfolioRed);
	return (
		<div className={`${style.sidebar} ${activeBurger ? style.open : ''}`}>
			<ul className={style.listMenu}>
				{links.map(link => (
					<li key={link.path}>
						<Link to={link.path} className={`${style.link} ${active === link.path ? style.active : ''}`} onClick={() => handleClick(link.path)}>
							{link.text}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

export default SideBar;
