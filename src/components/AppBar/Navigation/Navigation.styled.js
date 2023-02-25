import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
	width: 100%;
	height: 70px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 auto;
	padding: 15px;

	@media screen and (max-width: 767px) {
		height: 60px;
		justify-content: space-between;
	}
`;

export const RightMenu = styled.div`
	display: flex;
	align-items: center;
`;

export const Logo = styled(NavLink)`
	font-size: 21px;
	line-height: 0.995;
	color: #00d7ff;
	font-weight: 700;
	text-decoration: none;
	letter-spacing: 0.02em;
	transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);

	&:hover {
		transform: scale(1.2);
	}

	@media screen and (max-width: 767px) {
		font-size: 18px;
	}
`;

export const BtnTrophy = styled.button`
	display: flex;
	margin-right: 20px;
	background-color: transparent;
	border: none;
	cursor: pointer;

	@media screen and (max-width: 767px) {
		margin-right: 0px;
	}
`;

export const SvgTrophy = styled.svg`
	display: flex;
	fill: #3e4e6c;
	transition: fill 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    
    &:hover {
	fill: #00d7ff;
`;

export const UserContainer = styled.div`
	@media screen and (max-width: 767px) {
		flex-grow: 1;
		display: flex;
		justify-content: flex-end;
	}
`;
