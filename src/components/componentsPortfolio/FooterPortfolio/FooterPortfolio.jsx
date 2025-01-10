import React from 'react';
import style from './FooterPortfolio.module.scss';

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
					<p className={style.footerContactsText}>Vinogradova19.99@mail.ru</p>
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
					<svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M16.0347 2.66669C8.68933 2.66669 2.73599 8.62002 2.73599 15.9654C2.73599 21.84 6.54533 26.8254 11.8307 28.5854C12.496 28.7054 12.736 28.296 12.736 27.944C12.736 27.628 12.7253 26.7907 12.7213 25.6827C9.02133 26.4854 8.23999 23.8987 8.23999 23.8987C7.63733 22.3627 6.76399 21.9534 6.76399 21.9534C5.55733 21.128 6.85599 21.1467 6.85599 21.1467C8.19199 21.24 8.89199 22.5174 8.89199 22.5174C10.0787 24.5494 12.0067 23.9627 12.7613 23.6227C12.8827 22.7627 13.2293 22.176 13.608 21.844C10.656 21.5094 7.55199 20.368 7.55199 15.2707C7.55199 13.8214 8.07066 12.632 8.91733 11.704C8.78266 11.3667 8.32266 10.0134 9.04933 8.18402C9.04933 8.18402 10.1653 7.82535 12.7053 9.54535C13.7901 9.25025 14.9091 9.09961 16.0333 9.09735C17.1576 9.09918 18.2766 9.24982 19.3613 9.54535C21.9027 7.82402 23.0173 8.18402 23.0173 8.18402C23.744 10.0134 23.288 11.3667 23.1493 11.704C24.0027 12.632 24.5147 13.82 24.5147 15.2707C24.5147 20.3814 21.408 21.504 18.4453 21.8334C18.9187 22.244 19.3453 23.0547 19.3453 24.2947C19.3453 26.0734 19.3293 27.508 19.3293 27.944C19.3293 28.3 19.5667 28.7134 20.2453 28.5827C25.528 26.82 29.3333 21.8387 29.3333 15.9654C29.3333 8.62002 23.38 2.66669 16.0347 2.66669Z'
							fill='#D3E97A'
						/>
					</svg>
					<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 496 512' width='32' height='32'>
						<path
							d='M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z'
							fill='#D3E97A'
						/>
					</svg>
					<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' width='32' height='32'>
						<path
							d='M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z'
							fill='#D3E97A'
						/>
					</svg>
					<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512' width='32' height='32'>
						<path
							d='M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z'
							fill='#D3E97A'
						/>
					</svg>
				</div>
				<p className={style.logo}>© 2024 Ksenia Vinogradova</p>
			</div>

			<div className={style.rightSide}>
				<form action='your-action-url-here' method='POST'>
					<input type='text' placeholder='Name' />
					<br></br>
					<input type='email' id='email' name='email' placeholder='Email' required />
					<br></br>
					<textarea name='' id='' placeholder='Your message'></textarea>
					<button>Send</button>
				</form>
			</div>
		</div>
	);
}

export default FooterPortfolio;
