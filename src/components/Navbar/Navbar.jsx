import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Nav = () => {
	return (
		<nav className={s.nav}>
			<div className={s.item}>
				<NavLink to={'/profile'} className={navData => navData.isActive ? s.active : s.item}>Profile</NavLink >
			</div>
			<div>
				<NavLink to={'/dialogs'} className={navData => navData.isActive ? s.active : s.item}>Message</NavLink>
			</div>
			<div>
				<NavLink to={'/news'} className={navData => navData.isActive ? s.active : s.item}>News</NavLink>
			</div>
			<div>
				<NavLink to={'/music'} className={navData => navData.isActive ? s.active : s.item}>Music</NavLink>
			</div>
			<div>
				<NavLink to={'/settings'} className={navData => navData.isActive ? s.active : s.item}>Settings</NavLink>
			</div>
		</nav >
	);
}

export default Nav;