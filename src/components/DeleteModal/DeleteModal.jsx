import { DeleteModalWrapper, DeleteMenu } from "./DeleteModal.styled";


const DeleteModal = ({
  isOpen,
  modalContent,
  cancelAction,
  confirmAction,
  nameOfConfirm
}) => {
  // const [deleteCard] = useDeleteCardMutation();

  return (
    <DeleteModalWrapper isOpen={isOpen}>
      <DeleteMenu>
        <p>{modalContent}</p>
        <div>
          <button onClick={cancelAction} type="button">
            cancel
          </button>
          |
          <button onClick={confirmAction} type="button">
            {nameOfConfirm}
          </button>
        </div>
      </DeleteMenu>
    </DeleteModalWrapper>
  );
};

export default DeleteModal;
