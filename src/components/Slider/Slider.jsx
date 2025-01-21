import React, { useState } from 'react';
import styles from './Slider.module.css';

function Slider() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const slides = [
		{ content: <div style={{ backgroundColor: 'orange', height: '100%' }}>slide 1</div> },
		{ content: <div style={{ backgroundColor: 'blue', height: '100%' }}>slide 2</div> },
		{ content: <div style={{ backgroundColor: 'green', height: '100%' }}>slide 3</div> },
		{ content: <div style={{ backgroundColor: 'yellow', height: '100%' }}>slide 4</div> },
		{ content: <div style={{ backgroundColor: 'red', height: '100%' }}>slide 5</div> },
		{ content: <div style={{ backgroundColor: 'violet', height: '100%' }}>slide 6</div> },
	];

	const nextSlide = () => {
		setCurrentIndex(prevIndex => (prevIndex + 1) % slides.length);
	};
	const prevSlide = () => {
		setCurrentIndex(prevIndex => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
	};

	return (
		<div className={styles.divSlider}>
			<button className={`${styles.sliderButton} ${styles.prev}`} onClick={prevSlide}>
				prev
			</button>
			<div className={styles.sliderWrapper}>
				{slides.map((slide, index) => (
					<div
						key={index}
						style={{
							display: index === currentIndex ? 'block' : 'none',
						}}
						className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}
					>
						{slide.content}
					</div>
				))}
			</div>
			<button className={`${styles.sliderButton} ${styles.next}`} onClick={nextSlide}>
				next
			</button>
		</div>
	);
}

export default Slider;
