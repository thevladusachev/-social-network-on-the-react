import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = (props) => {
	return (
		<div className={s.content}>
			<div>
				<img className={s.contentImg} src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg' alt='mountain'></img>
			</div>
			<div>ava</div>
		</div>
	);
}

export default ProfileInfo;
