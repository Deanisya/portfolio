import React from 'react';
import style from './FooterPortfolio.module.scss';
import { Link } from 'react-router';

function FooterPortfolio() {
	return (
		<div id='contact' className={style.gridContainer}>
			<div className={style.leftSide}>
				<p className={style.footerTitle}>Contact Me</p>
				<div className={style.footerContacts}>
					<svg width='20' height='20' viewBox='0 0 40 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M0 5C0 3.67392 0.526784 2.40215 1.46447 1.46447C2.40215 0.526784 3.67392 0 5 0H35C36.3261 0 37.5979 0.526784 38.5355 1.46447C39.4732 2.40215 40 3.67392 40 5V25C40 26.3261 39.4732 27.5979 38.5355 28.5355C37.5979 29.4732 36.3261 30 35 30H5C3.67392 30 2.40215 29.4732 1.46447 28.5355C0.526784 27.5979 0 26.3261 0 25V5ZM5 2.5C4.33696 2.5 3.70107 2.76339 3.23223 3.23223C2.76339 3.70107 2.5 4.33696 2.5 5V5.5425L20 16.0425L37.5 5.5425V5C37.5 4.33696 37.2366 3.70107 36.7678 3.23223C36.2989 2.76339 35.663 2.5 35 2.5H5ZM37.5 8.4575L25.73 15.52L37.5 22.7625V8.4575ZM37.415 25.6475L23.315 16.97L20 18.9575L16.685 16.97L2.585 25.645C2.72706 26.177 3.04079 26.6472 3.47747 26.9826C3.91416 27.3181 4.44936 27.4999 5 27.5H35C35.5503 27.5001 36.0853 27.3186 36.5219 26.9836C36.9585 26.6487 37.2725 26.179 37.415 25.6475ZM2.5 22.7625L14.27 15.52L2.5 8.4575V22.7625Z'
							fill='#fff'
						/>
					</svg>
					<p className={style.footerContactsText}>ks.vinogradova19.99@mail.ru</p>
				</div>
				<div className={style.footerContacts}>
					<svg className='w-6 h-6 text-gray-800 dark:text-white' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 24 24'>
						<path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z' />
						<path
							stroke='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z'
						/>
					</svg>

					<p className={style.footerContactsText}>Russia, Kazan</p>
				</div>
				<div className={style.socialContactsIcons}>
					<Link to='https://github.com/Deanisya?tab=repositories'>
						<svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M16.0347 2.66669C8.68933 2.66669 2.73599 8.62002 2.73599 15.9654C2.73599 21.84 6.54533 26.8254 11.8307 28.5854C12.496 28.7054 12.736 28.296 12.736 27.944C12.736 27.628 12.7253 26.7907 12.7213 25.6827C9.02133 26.4854 8.23999 23.8987 8.23999 23.8987C7.63733 22.3627 6.76399 21.9534 6.76399 21.9534C5.55733 21.128 6.85599 21.1467 6.85599 21.1467C8.19199 21.24 8.89199 22.5174 8.89199 22.5174C10.0787 24.5494 12.0067 23.9627 12.7613 23.6227C12.8827 22.7627 13.2293 22.176 13.608 21.844C10.656 21.5094 7.55199 20.368 7.55199 15.2707C7.55199 13.8214 8.07066 12.632 8.91733 11.704C8.78266 11.3667 8.32266 10.0134 9.04933 8.18402C9.04933 8.18402 10.1653 7.82535 12.7053 9.54535C13.7901 9.25025 14.9091 9.09961 16.0333 9.09735C17.1576 9.09918 18.2766 9.24982 19.3613 9.54535C21.9027 7.82402 23.0173 8.18402 23.0173 8.18402C23.744 10.0134 23.288 11.3667 23.1493 11.704C24.0027 12.632 24.5147 13.82 24.5147 15.2707C24.5147 20.3814 21.408 21.504 18.4453 21.8334C18.9187 22.244 19.3453 23.0547 19.3453 24.2947C19.3453 26.0734 19.3293 27.508 19.3293 27.944C19.3293 28.3 19.5667 28.7134 20.2453 28.5827C25.528 26.82 29.3333 21.8387 29.3333 15.9654C29.3333 8.62002 23.38 2.66669 16.0347 2.66669Z'
								fill='#D3E97A'
							/>
						</svg>
					</Link>
					<Link to='https://t.me/Deanisya'>
						<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 496 512' width='32' height='32'>
							<path
								d='M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z'
								fill='#D3E97A'
							/>
						</svg>
					</Link>
				</div>
				<p className={style.logo}>© 2024 Ksenia Vinogradova</p>
			</div>

			<div className={style.rightSide}>
				<form action='https://getform.io/f/anlqkrga' method='POST'>
					<input type='text' placeholder='Name' required id='name' name='name' autoComplete='name' />
					<br></br>
					<input type='email' id='email' name='email' placeholder='Email' required />
					<br></br>
					<textarea name='message' id='message' placeholder='Your message' required></textarea>
					<button type='submit'>Send</button>
				</form>
			</div>
		</div>
	);
}

export default FooterPortfolio;
