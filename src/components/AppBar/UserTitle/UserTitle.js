import React from 'react';
import css from './UserTitle.module.css';

export const UserTitle = () => {
	let displayedName = 'Anonymous'
	//TODO: try to load username from token/database
	return (
		<div className={css.userTitle}>
			<div className={css.avatar}>
				<p>{displayedName[0].toUpperCase()}</p>
			</div>
			<p className={css.userName}>{displayedName}’s Quest Log</p>
		</div>
	);
};
