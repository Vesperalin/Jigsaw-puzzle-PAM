import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import Card from './Card';
import Button from './Button';
import styles from './Modal.module.css';

const Backdrop = props => {
	return <div className={styles.backdrop} onClick={props.onClick}></div>;
};

const ModalOverlay = props => {
	return (
		<Card className={styles.modal}>
			<header className={styles.header}>
				<h2>{props.title}</h2>
			</header>
			<div className={styles.content}>
				<p>{props.message}</p>
			</div>
			<footer className={styles.actions}>
				<Button onClick={props.onClick}>Okay</Button>
			</footer>
		</Card>
	);
};

const Modal = props => {
	return (
		<Fragment>
			{ReactDOM.createPortal(
				<Backdrop onClick={props.onClick} />,
				document.getElementById('backdrop-root'),
			)}
			{ReactDOM.createPortal(
				<ModalOverlay title={props.title} message={props.message} onClick={props.onClick} />,
				document.getElementById('overlay-root'),
			)}
		</Fragment>
	);
};

export default Modal;
