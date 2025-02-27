import React from 'react';
import bg from '../../../image/mainPhoto.jpg';

export default function BackgroundImg() {
	return (
		<div style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '500px', backgroundAttachment: 'fixed' }}>
			{/* <div style={{ color: 'white' }}>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</div> */}
		</div>
	);
}
