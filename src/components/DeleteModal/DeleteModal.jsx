import { useDeleteCardMutation } from "redux/auth/authOperations";
import { DeleteModalWrapper, DeleteMenu } from "./DeleteModal.styled";


const DeleteModal = ({ cardType, cardId, isOpen, func }) => {
  const [deleteCard] = useDeleteCardMutation();

  return (
    <DeleteModalWrapper isOpen={isOpen}>
      <DeleteMenu>
        <p>Delete this {cardType === "Task" ? "Quest" : cardType}?</p>
        <div>
          <button onClick={func} type="button">
            cancel
          </button>
          |
          <button onClick={() => deleteCard(cardId)} type="button">
            delete
          </button>
        </div>
      </DeleteMenu>
    </DeleteModalWrapper>
  );
};

export default DeleteModal;
