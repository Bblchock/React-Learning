import React from "react";
import s from './Post.module.css';

function Post(props) {
	return <div className={s.post}>
		<img src="https://i.pinimg.com/474x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg" />
		{props.massage}
		<div>
			<span>Likes: {props.likes}</span>
		</div>
	</div>
}

export default Post;
