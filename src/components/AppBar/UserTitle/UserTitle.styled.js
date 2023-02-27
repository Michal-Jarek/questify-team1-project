import styled from 'styled-components';

export const User = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Avatar = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 10px;
	width: 30px;
	height: 30px;
	background-color: #3e4e6c;
	color: #fff;
	border-radius: 50%;
	font-size: 17px;
	line-height: 0.965;
	font-weight: 900;
	text-align: center;

	@media screen and (max-width: 767px) {
		margin-right: 0px;
	}
`;

export const UserName = styled.p`
	color: #7b8aa4;
	font-size: 17px;
	line-height: 0.965;
	font-weight: 400;

	&::first-letter {
		text-transform: uppercase;
	}

	@media screen and (max-width: 767px) {
		display: none;
	}
`;
