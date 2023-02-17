import React from 'react';
import css from './Logout.module.css';
import logout from '../../../assests/header/logout.svg';

export const Logout = () => {
	return (
		<div>
			<button className={css.btnLogout} type='button'>
				<img src={logout} alt='Icon logout' border='0' />
			</button>
		</div>
	);
};
