import React from 'react';
import style from './LinkConnect.module.scss';
import { useSelector } from 'react-redux';

function LinkConnect() {
	const { contacts } = useSelector(state => state.portfolioRed);
	return (
		<div className={style.connect}>
			<div className={style.connectBlock}>
				{contacts.map((item, i) => (
					<div className={style.linkConnect}>
						<div key={i} className={style.linkConnectTitle}>
							{item.svg}
							<a className={style.link} href={item.href}>
								{item.title}
							</a>
						</div>
					</div>
				))}
			</div>
			<svg width='8' height='66' viewBox='0 0 8 66' fill='none' xmlns='http://www.w3.org/2000/svg'>
				<path
					d='M3.64644 65.3536C3.84171 65.5488 4.15829 65.5488 4.35355 65.3536L7.53553 62.1716C7.73079 61.9763 7.73079 61.6597 7.53553 61.4645C7.34027 61.2692 7.02369 61.2692 6.82842 61.4645L4 64.2929L1.17157 61.4645C0.976308 61.2692 0.659726 61.2692 0.464463 61.4645C0.269201 61.6597 0.269201 61.9763 0.464463 62.1716L3.64644 65.3536ZM3.5 -2.18557e-08L3.5 65L4.5 65L4.5 2.18557e-08L3.5 -2.18557e-08Z'
					fill='white'
				/>
			</svg>
		</div>
	);
}

export default LinkConnect;
