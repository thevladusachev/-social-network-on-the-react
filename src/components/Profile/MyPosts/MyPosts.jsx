import React from 'react';
import Post from './MyPost/Post';
import s from './MyPosts.module.css';

const MyPosts = (props) => {
	return (
		<div>
			<h3>My posts</h3>
			<div>
				<div><textarea name="" id="" cols="30" rows="2"></textarea></div>
				<div><button>Add post</button></div>
			</div>
			<div className={s.posts}>
				<Post message="Hey!!!" likesCount="0" />
				<Post message="Hello my friend)" likesCount="23" />
			</div>
		</div>
	);
}

export default MyPosts;
