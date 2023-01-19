import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
	return (
		<div className={s.item}>
			<img src="https://avatarzo.ru/wp-content/uploads/squid-game-anime.jpg" alt="avatar" />
			{props.message}
			<div>
				<span className={s.likes}>Like</span> {props.likesCount}
			</div>
		</div>

	);
}

export default Post;
