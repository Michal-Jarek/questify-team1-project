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
					<button onClick={confirmAction} type='button'>
						{nameOfConfirm}
					</button>
					<button onClick={cancelAction} type='button'>
						cancel
					</button>
				</div>
			</DeleteMenu>
		</DeleteModalWrapper>
  );
};

export default DeleteModal;
