import React from 'react';
import style from './HeaderPortfolio.module.scss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router';
import logo from '../../../image/logo.png';

function HeaderPortfolio() {
	const { links } = useSelector(state => state.portfolioRed); // название state редьюсера

	return (
		<header>
			<nav>
				<img src={logo} alt='Logo' />

				<ul className={style.listMenu}>
					{links.map(link => {
						return (
							<li>
								<Link to={link.path} className={style.link}>
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
