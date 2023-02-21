import React from 'react';
import css from './Logout.module.css';
import icons from '../../../assests/icons/sprite.svg';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { deleteToken } from '../../../redux/token/tokenSlice';
import { redirect } from 'react-router-dom';
import Notiflix from 'notiflix';

export const Logout = () => {
	const dispatch = useDispatch();

	const logoutUser = () => {
		console.log('Logout');
		const token = Cookies.get('token');
		dispatch(deleteToken(token));
		Notiflix.Notify.success('Logged out of Questify');
		return redirect('/');
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
