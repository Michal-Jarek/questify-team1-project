import styled from "styled-components";

export const DevelopersListWrapper = styled.div`
display: ${(props) =>
  props.isOpen ? "flex" : "none"};
  // display:flex;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(21, 57, 90, 0.3);
`;

export const DeleteMenu = styled.div`
  background: #ffffff;
  border-radius: 10px;
  width: 50%;
  height: 50%;
  position: absolute;
  top: 15%;
  left: 35%;

  @media screen and (min-width: 768px) {
    font-size: 12px;
    line-height: 12px;
    padding: 25px 0px 16px 0px;
    top: 15%;
    width: 30%;
  }

  & p {
    font-size: 31px;
	line-height: 0.995;
	color: #242A37;
	font-weight: 700;
	letter-spacing: 0.02em;
  }

  & ul {
  list-style-type: none;
  padding: 0;
  font-size: 16px;
	line-height: 2;
	color: #7B8AA4;
	font-weight: 700;
	letter-spacing: 0.02em;
  }

  & button {
    position: absolute;
    top: 10px;
    right: 10px
  }

  & div {
    display: flex;
    justify-content: center;
    margin-top: 40px;
  }
`;

export const CloseBtn = styled.button`
	display: flex;
	background-color: transparent;
	border: none;
	cursor: pointer;

	@media screen and (max-width: 767px) {
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

