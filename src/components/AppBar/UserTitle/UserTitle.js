import React from 'react';
import { useAuth } from 'utils/hooks/useAuth';
import css from './UserTitle.module.css';

export const UserTitle = () => {
	let displayedName = 'Anonymous';
	const { user } = useAuth();
	if (user?.email) {
		displayedName = user.email.slice(0, user.email.indexOf('@'));
		console.log(user);
	}
	return (
		<div className={css.userTitle}>
			<div className={css.avatar}>
				<p>{displayedName[0].toUpperCase()}</p>
			</div>
			<p className={css.userName}>{displayedName}’s Quest Log</p>
		</div>
	);
};
