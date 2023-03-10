import styled from "styled-components";

export const Div = styled.div`
  button {
    position: fixed;
    bottom: 10px;
    right: 10px;
    display: ${(props) => (props.isActiveChallenge ? "none" : "flex")};
    justify-content: center;
    align-items: center;
    width: 52px;
    height: 52px;
    background: #ff851c;
    border-radius: 100%;
    background-color: #ff851c;
    border-width: 1px;
    border-color: #ff851c;
    border-style: solid;
    z-index: 100;
    box-shadow: 0px 0px 3px rgba(255, 0, 0);
    @media screen and (min-width: 768px) {
      bottom: 10px;
      right: 10px;
    }

    &:before {
      z-index: 99;
    }

    &:hover {
      background-color: #242A37;
      border-color: #242A37;
      box-shadow: 0px 0px 12px rgba(130, 219, 222);
      transition: 0.2s;
    }

    &:active {
      background-color: #15395A;
    }
  }
`;
