import React from 'react';
import Post from './MyPost/Post';
import s from './MyPosts.module.css';

const MyPosts = (props) => {

	let postsData = [
		{ id: 1, message: 'Hey!!!', likeCount: 56 },
		{ id: 2, message: 'Hello my friend)', likeCount: 479 }
	];

	return (
		<div>
			<h3>My posts</h3>
			<div>
				<div><textarea name="" id="" cols="30" rows="2"></textarea></div>
				<div><button>Add post</button></div>
			</div>
			<div className={s.posts}>
				<Post message={postsData[0].message} likesCount={postsData[0].likeCount} />
				<Post message={postsData[1].message} likesCount={postsData[1].likeCount} />
			</div>
		</div>
	);
}

export default MyPosts;
