import styled from "styled-components";

export const ImgUp = styled.img`
	position: absolute;
	bottom: 0;
	z-index: -1;

	@media screen and (min-width: 768px) and (min-height: 760px) {
		top: 0;
		right: 0;
	}
	@media screen and (min-width: 1280px) and (max-height: 759px) {
		display: none;
	}
`;

export const ImgDown = styled.img`
	position: absolute;
	bottom: 0;
	z-index: -1;
	@media screen and (min-width: 768px) and (min-height: 760px) {
		bottom: 0;
		right: 0;
	}
	@media screen and (min-width: 1280px) and (max-height: 759px) {
		bottom: 0;
		right: 0;
	}
`;
