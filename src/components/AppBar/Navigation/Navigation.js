import React from "react";
import { Logout } from "../Logout/Logout";
import icons from "../../../assests/icons/sprite.svg";
import {
  Nav,
  Logo,
  RightMenu,
  BtnTrophy,
  SvgTrophy,
  UserContainer,
} from "./Navigation.styled";
import { UserTitle } from "../UserTitle/UserTitle";
import { DevelopersListBtn } from "../DevelopersList/DevelopersListBtn";
import { useDispatch } from "react-redux";
import { useNewCard } from "utils/hooks/useNewCard";
import { setNewCard } from "redux/auth/cardSlice";

export const Navigation = () => {
  const dispatch = useDispatch();
  const payload = useNewCard("challenge");

  const handleAdd = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    return dispatch(setNewCard(payload));
  };

  return (
    <Nav>
      <Logo to="/">Questify</Logo>
      <UserContainer>
        <UserTitle />
      </UserContainer>
      <RightMenu>
        <DevelopersListBtn />
        <BtnTrophy onClick={handleAdd}>
          <SvgTrophy width="46" height="46">
            <use xlinkHref={`${icons}#challenge-icon`} />
          </SvgTrophy>
        </BtnTrophy>
        <Logout />
      </RightMenu>
    </Nav>
  );
};
