import React from 'react';
import { Logout } from '../Logout/Logout';
import icons from '../../../assests/icons/sprite.svg';
import { Nav, Logo, RightMenu, BtnTrophy, SvgTrophy, UserContainer } from './Navigation.styled';
import { UserTitle } from '../UserTitle/UserTitle';
import { DevelopersListBtn } from '../DevelopersList/DevelopersListBtn';

export const Navigation = () => {
	return (
		<Nav>
			<Logo to='/'>Questify</Logo>
			<UserContainer>
				<UserTitle />
			</UserContainer>
			<RightMenu>
				<DevelopersListBtn />
				<BtnTrophy type='submit'>
					<SvgTrophy width='46' height='46'>
						<use xlinkHref={`${icons}#challenge-icon`} />
					</SvgTrophy>
				</BtnTrophy>
				<Logout />
			</RightMenu>
		</Nav>
	);
};
