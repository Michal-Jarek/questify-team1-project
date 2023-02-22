import { CardDeleteWrapper, DeleteMenu } from "./DeleteModal.styled";

const DeleteModal = ({ isOpen, func }) => {

  return (
    <CardDeleteWrapper isOpen={isOpen}>
      <DeleteMenu>
        <p>Delete this quest?</p>
        <div>
          <button onClick={func} type="button">
            cancel
          </button>
          |
          <button  type="button">
            delete
          </button>
        </div>
      </DeleteMenu>
    </CardDeleteWrapper>
  );
};

export default DeleteModal;
