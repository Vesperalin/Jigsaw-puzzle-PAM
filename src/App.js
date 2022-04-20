import React, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import style from './App.module.css';
import Puzzle from './Puzzle';

import img1 from './assets/vincent1.jpg';
import img2 from './assets/vincent2.jpg';
import img3 from './assets/vincent3.jpg';

const images = [img1, img2, img3];

function App() {
	const [viewNumber, setViewNumber] = useState(0);
	AOS.init();

	const getBackToMenu = () => {
		setViewNumber(0);
	};

	const setEasyGame = () => {
		setViewNumber(1);
	};

	const setMediumGame = () => {
		setViewNumber(2);
	};

	const setHardGame = () => {
		setViewNumber(3);
	};

	return (
		<div className={style.wrapper}>
			{viewNumber === 0 && (
				<div
					data-aos='fade-up'
					data-aos-delay='50'
					data-aos-duration='400'
					data-aos-easing='ease-in-out'
					data-aos-once='true'
				>
					<h1>Puzzle game</h1>
					<div className={style['menu-wrapper']}>
						<p className={style.p}>Choose game difficulty</p>
						<div className={style.button} onClick={setEasyGame}>
							<p>2 x 2</p>
						</div>
						<div className={style.button} onClick={setMediumGame}>
							<p>3 x 3</p>
						</div>
						<div className={style.button} onClick={setHardGame}>
							<p>4 x 4</p>
						</div>
					</div>
				</div>
			)}
			{viewNumber === 1 && (
				<Puzzle
					imgSrc={images[Math.floor(Math.random() * images.length)]}
					rows={2}
					columns={2}
					getBackToMenu={getBackToMenu}
				/>
			)}
			{viewNumber === 2 && (
				<Puzzle
					imgSrc={images[Math.floor(Math.random() * images.length)]}
					rows={3}
					columns={3}
					getBackToMenu={getBackToMenu}
				/>
			)}
			{viewNumber === 3 && (
				<Puzzle
					imgSrc={images[Math.floor(Math.random() * images.length)]}
					rows={4}
					columns={4}
					getBackToMenu={getBackToMenu}
				/>
			)}
		</div>
	);
}

export default App;
