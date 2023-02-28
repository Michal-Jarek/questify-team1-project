import React from "react";
import icons from "../../../assests/icons/sprite.svg";
import { DevelopersBtn, DevelopersSvg } from "./DevelopersListBtn.styled";

export const DevelopersListBtn = ({openModal}) => {
  return (
    <div title="Developers List">
      <DevelopersBtn type="button" onClick={openModal}>
        <DevelopersSvg width="46" height="46">
          <use xlinkHref={`${icons}#people`} />
        </DevelopersSvg>
      </DevelopersBtn>
    </div>
  );
};
