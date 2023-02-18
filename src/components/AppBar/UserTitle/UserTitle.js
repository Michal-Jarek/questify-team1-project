import React from 'react';
import css from './UserTitle.module.css';

export const UserTitle = () => {
	return (
		<div className={css.userTitle}>
			<div className={css.avatar}>
				<p>J</p>
			</div>
			<p className={css.userName}>John’s Quest Log</p>
		</div>
	);
};