import styled from 'styled-components';

export const DevelopersBtn = styled.button`
	display: flex;
	background-color: transparent;
	border: none;
	cursor: pointer;
	margin-right: 10px;

    @media screen and (max-width: 767px) {
		padding: 0;
		margin-right: 0px;
		margin-left: 15px;
	}
`;

export const DevelopersSvg = styled.svg`
	display: flex;
	fill: #3e4e6c;
	transition: fill 0.5s cubic-bezier(0.4, 0, 0.2, 1);

	&:hover {
		fill: #00d7ff;
	}
`;

export const DevelopersListWrapper = styled.div`
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(21, 57, 90, 0.3);
  z-index: 999
`;

export const DeleteMenu = styled.div`
  background: #ffffff;
  border-radius: 10px;
  width: 400px;
  height: 560px;
  position: absolute;
  top: 50px;

  @media screen and (min-width: 768px) {
	font-size: 12px;
    line-height: 12px;
    padding: 25px 0px 16px 0px;
	height: 280px;
	width: 750px;
	top: 150px;
  }

  @media screen and (min-width: 1024px) {
	height: 350px;
	width: 1000px;
  }

  & p {
    font-size: 31px;
	line-height: 0.995;
	color: #242A37;
	font-weight: 700;
	letter-spacing: 0.02em;
	margin-top:20px;

	@media screen and (min-width: 768px) {
		margin-top:0px;
	}
  }

  & li {
	padding: 10px;
	margin-right: 25px;
	margin-left:25px;
	margin-bottom: 20px;
	display:flex;
	text-align: center;
	justify-content: center;
	border-radius: 10px;
	background-color: #F2F3F7;


	@media screen and (min-width: 768px) {
		padding: 15px;
	}
  }

  & ul {
	display: inline;
  list-style-type: none;
  padding: 0;
  font-size: 16px;
	line-height: 2.3;
	color: #3e4e6c;
	font-weight: 700;
	letter-spacing: 0.02em;

	@media screen and (min-width: 768px) {
		display: grid;
		grid-template-columns: auto auto auto;
		font-size: 14px;
		justify-content: center;
	}

	@media screen and (min-width: 1024px) {
		font-size: 24px;
	}
  }

  & button {
    position: absolute;
    top: 10px;
    right: 10px
  }

  & div {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
`;

export const CloseBtn = styled.button`
	display: flex;
	background-color: transparent;
	border: none;
	cursor: pointer;

	@media screen and (max-width: 768px) {
		margin-right: 0px;
	}
`;

export const SvgClose = styled.svg`
	display: flex;
	fill: #3e4e6c;
	transition: fill 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    
    &:hover {
	fill: #00d7ff;
`;

export const GithubBtn = styled.span`
	display: flex;
	background-color: transparent;
	border: none;

	@media screen and (max-width: 768px) {
		margin-right: 0px;
	}
`;

export const SvgGithub = styled.svg`
margin-top: 9px;
margin-left: 10px;
	display: flex;
	fill: #3e4e6c;
	transition: fill 0.5s cubic-bezier(0.4, 0, 0.2, 1);
	cursor: pointer;

	@media screen and (min-width: 768px) {
		margin-top: 4px;
		width: 22px;
		height: 22px;

	}

	@media screen and (min-width: 1024px) {
		margin-top: 12px;
		width: 25px;
		height: 25px;

	}

    
    &:hover {
	fill: #00d7ff;
`;