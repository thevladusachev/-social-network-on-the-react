import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
	return (
		<div className={s.item}>
			<img src="https://media.istockphoto.com/id/1300845620/ru/векторная/пользователь-icon-flat-изолирован-на-белом-фоне-символ-пользователя-иллюстрация-вектора.jpg?s=612x612&w=0&k=20&c=Po5TTi0yw6lM7qz6yay5vUbUBy3kAEWrpQmDaUMWnek=" alt="avatar" />
			{props.message}
			<div>
				<span className={s.likes}>Like</span> {props.likesCount}
			</div>
		</div>

	);
}

export default Post;
