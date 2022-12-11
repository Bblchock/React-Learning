import React from "react";
import s from './MyPosts.module.css';
import Post from "./Posts/Post";

function MyPosts(props) {
	let newPostElement = React.createRef();

	let addPost = () => {
		let text = newPostElement.current.value;
		props.addPost(text)
	}

	let postElement = props.posts.map(p => <Post massage={p.value} likes={p.likes} />)

	return <div className={s.postBlock}>
		<h3>My posts</h3>
		<div>
			<textarea ref={newPostElement} cols="20" rows="2" />
			<div><button onClick={addPost}>Add post</button></div>
		</div>
		<div>New posts</div>
		<div className={s.posts}>
			{postElement}
		</div>
	</div >
}

export default MyPosts;
