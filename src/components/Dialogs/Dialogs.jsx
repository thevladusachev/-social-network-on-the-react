import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';

<DialogItem />;
<Message />;

const Dialogs = (props) => {



	let dialogsElements = props.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />);
	let messagesElements = props.messagesData.map(m => <Message message={m.message} />);

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
