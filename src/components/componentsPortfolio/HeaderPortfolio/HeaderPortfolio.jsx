import React, { useEffect, useState } from 'react';
import styles from './HeaderPortfolio.module.scss';
import { useSelector } from 'react-redux';
import { HashLink as Link } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import SideBar from '../SideBar/SideBar';

function HeaderPortfolio() {
	const { links } = useSelector(state => state.portfolioRed);
	const [activeBurger, setActiveBurger] = useState(false);
	const location = useLocation();

	useEffect(() => {
		document.body.style.overflow = activeBurger ? 'hidden' : 'auto';
	}, [activeBurger]);

	const toggleMenu = () => {
		setActiveBurger(!activeBurger);
	};
	const handleClickUp = () => {
		window.scrollTo(0, 0);
	};

	return (
		<header>
			<nav className={styles.nav}>
				<p className={styles.logo} onClick={handleClickUp}>
					KV
				</p>
				<BurgerMenu activeBurger={activeBurger} toggleMenu={toggleMenu} aria-label='Toggle menu' />
				<SideBar active={location.pathname} activeBurger={activeBurger} handleClick={toggleMenu} />
				<ul className={styles.listMenu}>
					{links.map(link => (
						<li key={link.path}>
							<Link to={link.path} className={`${styles.link} ${location.pathname === link.path ? styles.active : ''}`}>
								{link.text}
							</Link>
						</li>
					))}
				</ul>
				{activeBurger && <div className={styles.blurMenu} onClick={toggleMenu}></div>}
			</nav>
		</header>
	);
}

export default HeaderPortfolio;
