import React from 'react';
import s from './Header.module.css';

const Header = (props) => {
	return (
		<header className={s.header}>
			<img src="https://www.vhv.rs/file/max/31/318855_website-logo-png.png" alt="logo"></img>
		</header>
	);
}



export default Header;

