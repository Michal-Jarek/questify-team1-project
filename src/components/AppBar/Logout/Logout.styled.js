import styled from 'styled-components';

export const BtnLogout = styled.button`
	display: flex;
	background-color: transparent;
	border: none;
	cursor: pointer;

    @media screen and (max-width: 767px) {
		padding: 0;
	}
`;

export const SvgLogout = styled.svg`
	display: flex;
	fill: #3e4e6c;
	transition: fill 0.5s cubic-bezier(0.4, 0, 0.2, 1);

	&:hover {
		fill: #00d7ff;
	}
`;