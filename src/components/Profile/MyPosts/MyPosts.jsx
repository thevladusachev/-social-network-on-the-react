import React from 'react';
import Post from './MyPost/Post';

const MyPosts = (props) => {
	return (
		<div>posts
			<div>
				<textarea name="" id="" cols="30" rows="2"></textarea>
				<button>Add post</button>
			</div>
			<div className='s.posts'>
				<Post message="Hey!!!" likesCount="0" />
				<Post message="Hello my friend)" likesCount="23" />
			</div>
		</div>
	);
}

export default MyPosts;
