import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
	let path = '/dialogs/' + props.id;

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

	let dialogsData = [
		{ id: 1, name: 'Andrey' },
		{ id: 2, name: 'Kirill' },
		{ id: 3, name: 'Misha' },
		{ id: 4, name: 'Ivan' },
		{ id: 5, name: 'Lida' },
	];

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				<DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
				<DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
				<DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
				<DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
				<DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />

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
