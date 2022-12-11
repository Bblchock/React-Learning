import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPost/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo"

function Profile(props) {
	return <div>
		<ProfileInfo />
		<MyPosts posts={props.posts} addPost={props.addPost} />
	</div>
}

export default Profile;
