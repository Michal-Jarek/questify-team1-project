import React, { useState } from "react";
import dayjs from "dayjs";
import { Header } from "./Header/Header";
import { Inputs } from "./Inputs/Inputs";
import { Footer } from "./Footer/Footer";
import DeleteModal from "../DeleteModal/DeleteModal";
import { SelectionMenu } from "../CardEdition/SelectionMenu/SelectionMenu";
import {
  useEditCardMutation,
  useDeleteCardMutation,
  useCreateCardMutation,
} from "../../redux/auth/questifyApi";
import {
  separateDate,
  separateTime,
} from "../Card/helperFunctions/dateAndTime/separateFunctions";
import { useEditOptions } from "../../utils/hooks/useEditOptions";
import { difficulty, category } from "../../utils/cardData/cardData";
import { Card } from "./CardEdition.styled";
import { useDispatch } from "react-redux";
import { deleteStateCard } from "redux/auth/cardSlice";

export const CardEdition = ({
  isOpen,
  cardId,
  cardDifficulty,
  cardType,
  cardChallenge,
  cardTitle,
  cardTime,
  cardCategory,
  onCancel,
}) => {
  const dispatch = useDispatch();
  const [addCard] = useCreateCardMutation();
  const [editCard] = useEditCardMutation();
  const [deleteCard] = useDeleteCardMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState(cardTitle);
  const [type] = useState(cardType);
  const [datePicker, setDatePicker] = useState(dayjs(cardTime));
  const [isError, setIsError] = useState("");

  const {
    anchorDifficulty,
    anchorCategory,
    selectDifficulty,
    selectCategory,
    isDifficultyMenuOpen,
    isCategoryMenuOpen,
    openDifficultyMenu,
    openCategoryMenu,
    selectedDifficulty,
    selectedCategory,
  } = useEditOptions(cardDifficulty, cardCategory);

  const handleTitleChange = (e) => {
    setTitle(e.currentTarget.value);
  };

  const toggleModal = () => setIsModalOpen((isModalOpen) => !isModalOpen);

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const handleEdition = () => {
    const cardTitle = capitalize(title);
    const cardType = capitalize(type);
    const cardCategory = capitalize(selectedCategory);
    const date = separateDate(datePicker);
    const time = separateTime(datePicker);

    let payload = {
      body: {
        title: cardTitle,
        difficulty: selectedDifficulty.toLowerCase(),
        type: cardType.toLowerCase(),
        date: date,
        time: time,
        category: cardCategory.toLowerCase(),
      },
      id: cardId,
    };
    if (cardId === "new") delete payload.id;
    const isCardValid = (payload) => {
      dispatch(deleteStateCard());
      if (payload.id) editCard(payload);
      if (!payload.id) addCard(payload.body);
      setTitle("");
      onCancel();
    };

    title ? isCardValid(payload) : setIsError("Title is missing");
  };

  return (
    <Card isOpen={isOpen} cardType={cardChallenge}>
      <Header
        onClick={openDifficultyMenu}
        difficulty={capitalize(selectedDifficulty)}
        cardType={cardChallenge}
      />
      <SelectionMenu
        dataType={"difficulty"}
        anchorEl={anchorDifficulty}
        isOpen={isDifficultyMenuOpen}
        menuItemData={difficulty}
        onClose={selectDifficulty}
        selectedData={selectedDifficulty}
      />
      <Inputs
        action={"Edit"}
        titleValue={title}
        onCancel={onCancel}
        cardType={cardChallenge}
        onTitleChange={handleTitleChange}
        dateTimeValue={datePicker}
        onDateTimeChange={setDatePicker}
        placeholder={isError && isError}
      />
      <Footer
        action={"Edit"}
        category={selectedCategory}
        onClick={openCategoryMenu}
        onCancelClick={toggleModal}
        onStartClick={handleEdition}
      />
      <SelectionMenu
        dataType={"category"}
        anchorEl={anchorCategory}
        isOpen={isCategoryMenuOpen}
        menuItemData={category}
        onClose={selectCategory}
        selectedData={selectedCategory}
      />
      <DeleteModal
        isOpen={isModalOpen}
        modalContent={`Delete this ${
          cardType === "Task" ? "Quest" : cardType
        }?`}
        nameOfConfirm="Delete"
        cancelAction={toggleModal}
        confirmAction={() => {
          if (cardId === "new") return dispatch(deleteStateCard());
          else return deleteCard(cardId);
        }}
      />
    </Card>
  );
};
