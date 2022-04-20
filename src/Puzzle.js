import { useState } from 'react';
import { useStopwatch } from 'react-timer-hook';
import { JigsawPuzzle } from 'react-jigsaw-puzzle/lib';
import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css';
import 'aos/dist/aos.css';

import './Puzzle.css';
import Modal from './UI/Modal';

const Puzzle = props => {
	const [isSolved, setIsSolved] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const { seconds, minutes, hours, pause } = useStopwatch({
		autoStart: true,
	});

	const hourTime = hours < 10 ? `0${hours}` : `${hours}`;
	const secondTime = seconds < 10 ? `0${seconds}` : `${seconds}`;
	const minuteTime = minutes < 10 ? `0${minutes}` : `${minutes}`;

	const setSolved = () => {
		setIsSolved(true);
		setShowModal(true);
		pause();
	};

	const onExitButtonHandler = () => {
		setShowModal(false);
	};

	return (
		<div
			className='puzzle'
			data-aos='fade-up'
			data-aos-delay='50'
			data-aos-duration='400'
			data-aos-easing='ease-in-out'
			data-aos-once='true'
		>
			{showModal && (
				<Modal
					title='Congratulations, you solved the puzzle'
					message='Click the button or background to close'
					onClick={onExitButtonHandler}
				></Modal>
			)}
			<h1 className='tag'>
				{isSolved ? 'Congratulations, you solved the puzzle' : 'Solve the puzzle'}
			</h1>
			<div className='timer-wrapper'>
				<span>
					{hourTime}:{minuteTime}:{secondTime}
				</span>
			</div>
			<JigsawPuzzle
				imageSrc={props.imgSrc}
				rows={props.rows}
				columns={props.columns}
				onSolved={setSolved}
				className='jigsaw-puzzle'
			/>
			<div className='button-wrapper'>
				<div className='button' onClick={props.getBackToMenu}>
					<p>{isSolved ? 'Menu' : 'Give up'}</p>
				</div>
			</div>
		</div>
	);
};

export default Puzzle;
