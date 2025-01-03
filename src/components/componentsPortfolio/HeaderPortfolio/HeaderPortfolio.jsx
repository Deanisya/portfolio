import React, { useState } from 'react';
import style from './HeaderPortfolio.module.scss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router';

function HeaderPortfolio() {
	const { links } = useSelector(state => state.portfolioRed); // название state редьюсера
	const [active, setActive] = useState('/');

	const handleClick = linkPath => {
		setActive(linkPath);
	};

	return (
		<header>
			<nav className={style.nav}>
				<p>KV</p>
				<ul className={style.listMenu}>
					{links.map(link => {
						return (
							<li key={link.path}>
								<Link to={link.path} className={`${style.link} ${active === link.path ? style.active : ''}`} onClick={() => handleClick(link.path)}>
									{link.text}
								</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</header>
	);
}

export default HeaderPortfolio;
