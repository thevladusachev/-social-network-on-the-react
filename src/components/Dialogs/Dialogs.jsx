import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';

<DialogItem />;
<Message />;

const Dialogs = (props) => {

	let dialogsData = [
		{ id: 1, name: 'Andrey' },
		{ id: 2, name: 'Kirill' },
		{ id: 3, name: 'Misha' },
		{ id: 4, name: 'Ivan' },
		{ id: 5, name: 'Lida' },
	];

	let messagesData = [
		{ id: 1, message: 'Hi!' },
		{ id: 2, message: 'How are you?' },
		{ id: 3, message: 'YESS!!!' },
		{ id: 4, message: 'no, but...' },
		{ id: 5, message: 'I love u!' }
	];

	let dialogsElements = dialogsData.map(d => <DialogItem name={d.name} id={d.id} />);
	let messagesElements = messagesData.map(m => <Message message={m.message} />);

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogsElements}

			</div>
			<div className={s.messages}>
				{messagesElements}
			</div>
		</div>
	);
}

export default Dialogs;
