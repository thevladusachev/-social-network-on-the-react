import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = (props) => {
	return (
		<div className={s.content}>
			<div>
				<img className={s.content__img} src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg' alt='mountain'></img>
			</div>
			<div>ava</div>
			<MyPosts />
		</div>
	);
}

export default Profile;
