import React from 'react';
import { NavLink } from 'react-router-dom';
import { Logout } from '../Logout/Logout';
import icons from '../../../assests/icons/sprite.svg';
import css from './Navigation.module.css';

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
					<svg width='46' height='46' className={css.svgTrophy}>
						<use xlinkHref={`${icons}#challenge-icon`} />
					</svg>
				</button>
				<Logout />
			</div>
		</nav>
	);
};
