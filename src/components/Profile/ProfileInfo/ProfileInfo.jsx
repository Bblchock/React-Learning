import React from "react";
import s from './ProfileInfo.module.css';

function ProfileInfo() {
	return (
		<div>
			<div>
				<img src='https://flytothesky.ru/wp-content/uploads/2019/04/10-16.jpg' />
			</div>
			<div className={s.descriptionBlock}>ava + description</div>
		</div>
	)
}

export default ProfileInfo;
