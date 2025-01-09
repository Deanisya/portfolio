import React from 'react';
import styles from './BurgerMenu.module.scss';

function BurgerMenu({ activeBurger, toggleMenu }) {
	return (
		<div className={styles.burger}>
			<svg onClick={toggleMenu} className={`${styles.ham} ${styles.ham4} ${styles.hamRotate} ${activeBurger ? styles.active : ''}`} viewBox='0 0 100 100' width='40'>
				<path className={`${styles.line} ${styles.top} ${activeBurger ? styles.active : ''}`} d='m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20' />
				<path className={`${styles.line} ${styles.middle}`} d='m 70,50 h -40' />
				<path className={`${styles.line} ${styles.bottom} ${activeBurger ? styles.active : ''}`} d='m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20' />
			</svg>
		</div>
	);
}

export default BurgerMenu;
