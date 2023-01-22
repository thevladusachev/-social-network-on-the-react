import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				<div className={s.dialog}>
					Andrey
				</div>
				<div className={s.dialog}>
					Dima
				</div>
				<div className={s.dialog}>
					Kirill
				</div>
				<div className={s.dialog}>
					Misha
				</div>
				<div className={s.dialog}>
					Lida
				</div>
			</div>
			<div className={s.messages}>
				<div className={s.message}>hi!</div>
				<div className={s.message}>How are you?</div>
				<div className={s.message}>YESS!!!</div>
				<div className={s.message}>no, but...</div>
				<div className={s.message}>I love u!</div>

			</div>
		</div>
	);
}

export default Dialogs;
