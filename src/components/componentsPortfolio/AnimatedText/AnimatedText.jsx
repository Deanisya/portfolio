import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

function AnimatedText({ text, delay = 0 }) {
	const textRef = useRef(null);

	useEffect(() => {
		if (!textRef.current) return;

		const letters = textRef.current.querySelectorAll('span');

		gsap.fromTo(
			letters,
			{ opacity: 0, y: 50 },
			{
				opacity: 1,
				y: 0,
				stagger: 0.05,
				duration: 0.8,
				ease: 'power2.out',
				delay: delay,
			}
		);
	}, [delay]);

	return (
		<p ref={textRef} style={{ position: 'relative' }}>
			{text.split('').map((char, index) => (
				<span key={index} style={{ display: 'inline-block' }}>
					{char === ' ' ? '\u00A0' : char}
				</span>
			))}
		</p>
	);
}

export default AnimatedText;
