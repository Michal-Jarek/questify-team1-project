import React, {useState} from "react";
import icons from "../../../assests/icons/sprite.svg";
import { DevelopersBtn, DevelopersSvg } from "./DevelopersListBtn.styled";
import { DevelopersListWrapper, DeleteMenu, CloseBtn, SvgClose } from "./DevelopersListBtn.styled";

export const DevelopersListBtn = () => {
 
  const [isOpen, setIsOpen] = useState(false)




  return(
    <div title="Developers List">
      <DevelopersBtn type="button" onClick={() => setIsOpen(!isOpen)}>
        <DevelopersSvg width="46" height="46">
          <use xlinkHref={`${icons}#people`} />
        </DevelopersSvg>
      </DevelopersBtn>
      <DevelopersListWrapper style={{display: isOpen ? "flex" : "none"}}>
      <DeleteMenu>
      <CloseBtn type='button' onClick={() => setIsOpen(!isOpen)}>
					<SvgClose width='36' height='36'>
						<use xlinkHref={`${icons}#close-button`} />
					</SvgClose>
				</CloseBtn>
        <p>Developers List</p>
        <div>
        <ul>
          <li>Michał Jarek</li>
          <li>Dominika Sosnowska</li>
          <li>Daria Ośka</li>
          <li>Piotr Zdebski</li>
          <li>Kalus Marek</li>
          <li>Kłodowski Paweł</li>
        </ul>
        </div>
      
      </DeleteMenu>
    </DevelopersListWrapper>
    </div>
  );
};
