import React from 'react';
import css from './Logout.module.css';
import icons from '../../../assests/icons/sprite.svg';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { deleteToken } from '../../../redux/token/tokenSlice';

export const Logout = () => {
	const dispatch = useDispatch();

	const logoutUser = () => {
		console.log('wylogowuję się');
		const token = Cookies.get('token');
		if (token === undefined) {
			return;
		}
		dispatch(deleteToken(token));
	};

	return (
		<div title='Logout'>
			<button className={css.btnLogout} type='button' onClick={logoutUser}>
				<svg width='30' height='30' className={css.svgLogout}>
					<use xlinkHref={`${icons}#icon-logout`} />
				</svg>
			</button>
		</div>
	);
};