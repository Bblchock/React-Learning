import React from "react";
import s from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import Messages from "./Messages/Messages";

function Dialogs(props) {

	let dialogElement = props.dialogs.map(d => <DialogsItem name={d.name} id={d.id} />)

	let messageElement = props.messages.map(m => <Messages messages={m.value} />)

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItem}>
				{dialogElement}
			</div>
			<div className={s.messages}>
				{messageElement}
			</div>
		</div>
	)
};

export default Dialogs;