import { DevelopersListWrapper, DeleteMenu, CloseBtn, SvgClose } from "./DevelopersList.styled";
import icons from "../../assests/icons/sprite.svg"


export const DevelopersListModal = ({
  isOpen, closeModal
}) => {

  return (
    <DevelopersListWrapper isOpen={isOpen}>
      <DeleteMenu>
      <CloseBtn type='button' onClick={closeModal}>
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
  );
};

export default DevelopersListModal;
