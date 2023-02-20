import React from 'react';
import css from './Logout.module.css';
import icons from '../../../assests/icons/sprite.svg';

export const Logout = () => {
	return (
		<div title='Logout'>
			<button className={css.btnLogout} type='button'>
				<svg width='30' height='30' className={css.svgLogout}>
					<use xlinkHref={`${icons}#icon-logout`} />
				</svg>
			</button>
		</div>
	);
};
