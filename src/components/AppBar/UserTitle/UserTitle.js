import React from 'react';
import { useAuth } from 'utils/hooks/useAuth';
import { User, Avatar, UserName } from './UserTitle.styled';

export const UserTitle = () => {
	let displayedName = 'Anonymous';
	const { user } = useAuth();
	if (user?.email) {
		displayedName = user.email.slice(0, user.email.indexOf('@'));
	}
	return (
		<User>
			<Avatar>
				<p>{displayedName[0].toUpperCase()}</p>
			</Avatar>
			<UserName>{displayedName}’s Quest Log</UserName>
		</User>
	);
};
