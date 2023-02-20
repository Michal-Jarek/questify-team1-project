import styled from "styled-components";
import { Link } from "react-router-dom";

export const Main = styled.main`
  width: 100vw;
  height: 100vh;
  padding: 20px 0;
  text-align: center;
  background-image: linear-gradient(
    to right top,
    rgba(195,135,34,1),
    rgba(207,145,36,1),
    rgba(215,152,38,1),
    rgba(224,160,40,1),
    rgba(233,168,41,1),
    rgba(241,175,43,1),
    rgba(248,182,44,1),
    rgba(253,187,45,1)
  );

  h1 {
    font-size: 64px;
    font-weight: 700;
  }
`;

export const HomeLink = styled(Link)`
  text-decoration: none;
  color:#002dff;

  &:hover,
  &:focus {
    color: #FFFFFF;
   
  }
`;
