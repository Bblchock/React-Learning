import React from "react";
import s from './../Dialogs.module.css';

function Messages(props) {
	return <div className={s.dialog}>{props.messages}</div>
}

export default Messages;