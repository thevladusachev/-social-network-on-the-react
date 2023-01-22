import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
	let path = props.id;

	return (
		<div className={s.dialog}>
			<NavLink to={path}>{props.name}</NavLink>
		</div>
	);
}

const Message = (props) => {
	return (
		<div className={s.message}>{props.message}</div>
	)
}

const Dialogs = (props) => {
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				<DialogItem name="Andrey" id='1' />
				<DialogItem name="Kirill" id='2' />
				<DialogItem name="Misha" id='3' />
				<DialogItem name="Ivan" id='4' />
				<DialogItem name="Lida" id='5' />

			</div>
			<div className={s.messages}>
				<Message message="Hi!" />
				<div className={s.message}>How are you?</div>
				<div className={s.message}>YESS!!!</div>
				<div className={s.message}>no, but...</div>
				<div className={s.message}>I love u!</div>

			</div>
		</div>
	);
}

export default Dialogs;
