import React, { useEffect, useState } from 'react';
import styles from './HeaderPortfolio.module.scss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import SideBar from '../SideBar/SideBar';

function HeaderPortfolio() {
	const { links } = useSelector(state => state.portfolioRed);
	const [active, setActive] = useState('/');
	const [activeBurger, setActiveBurger] = useState(false);

	const handleClick = linkPath => {
		setActive(linkPath);
		setActiveBurger(false);
	};

	const toggleMenu = () => {
		setActiveBurger(!activeBurger);
	};

	useEffect(() => {
		if (activeBurger) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
	}, [activeBurger]);

	return (
		<header>
			<nav className={styles.nav}>
				<p>KV</p>
				<BurgerMenu activeBurger={activeBurger} toggleMenu={toggleMenu} aria-label='Toggle menu' />
				<SideBar active={active} activeBurger={activeBurger} handleClick={handleClick} />
				<ul className={styles.listMenu}>
					{links.map(link => (
						<li key={link.path}>
							<Link to={link.path} className={`${styles.link} ${active === link.path ? styles.active : ''}`} onClick={() => handleClick(link.path)}>
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
