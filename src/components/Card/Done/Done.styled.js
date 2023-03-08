import styled from 'styled-components';

export const DoneContainer = styled.div`
	display: flex;
	margin: 20px 72px;
	align-items: center;
	justify-content: center;

	@media screen and (max-width: 1279px) {
		margin: 20px 50px;
	}

	@media screen and (max-width: 767px) {
		margin: 30px 15px;
	}
`;

export const BtnDone = styled.button`
	display: flex;
	align-items: center;
	font-size: 15px;
	line-height: 0.998;
	color: #282828;
	font-weight: 300;
	text-decoration: none;
	background-color: transparent;
	border: none;
	cursor: pointer;
`;

export const SvgDone = styled.svg`
	fill: #00d7ff;
	margin-left: 10px;
`;

export const LineDone = styled.div`
	width: 100%;
	margin-left: 4px;
	border: 1px dashed #b9c3c8;
`;
