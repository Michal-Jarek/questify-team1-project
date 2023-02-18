import React from 'react';
import { NavLink } from 'react-router-dom';
import { Logout } from '../Logout/Logout';
import css from './Navigation.module.css';

import trophy from '../../../assests/header/challengeIcon.svg';
import { UserTitle } from '../UserTitle/UserTitle';

export const Navigation = () => {
	return (
		<nav className={css.header}>
			<NavLink className={css.logo} to='/'>
				Questify
			</NavLink>

			<div className={css.userContainer}>
				<UserTitle />
			</div>
			<div className={css.rightMenu}>
				<button className={css.btnTrophy} type='submit'>
					<img src={trophy} className={css.imgTrophy} alt='Trophy' border='0' />
				</button>
				<Logout />
			</div>
		</nav>
	);
};
