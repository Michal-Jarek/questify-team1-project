import React, { useState } from 'react';
import dayjs from 'dayjs';
import { Header } from './Header/Header';
import { Inputs } from './Inputs/Inputs';
import { Footer } from './Footer/Footer';
import DeleteModal from 'components/DeleteModal/DeleteModal';
import { SelectionMenu } from 'components/CardEdition/SelectionMenu/SelectionMenu';
import { useEditCardMutation, useDeleteCardMutation } from 'redux/auth/authOperations';
import { separateDate, separateTime } from 'components/Card/helperFunctions/dateAndTime/separateFunctions';
import { useEditOptions } from 'utils/hooks/useEditOptions';
import { Card } from './CardEdition.styled';
import { difficulty, category } from 'utils/cardData/cardData';


export const CardEdition = ({
    isEdited,
    cardId,
    cardDifficulty,
    cardType,
    cardChallenge,
    cardTitle,
    cardTime,
    cardCategory,
    onCancel,
}) => {
    const [editCard] = useEditCardMutation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [title, setTitle] = useState(cardTitle);
    const [type] = useState(cardType)
    const [datePicker, setDatePicker] = useState(dayjs(cardTime));
    const [deleteCard] = useDeleteCardMutation();
    const [isError, setIsError] = useState('');

    const {
        anchorDifficulty,
        anchorCategory,
        selectDifficulty,
        selectCategory,
        openDifficultyMenu,
        openCategoryMenu,
        selectedDifficulty,
        selectedCategory
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
        const cardCategory = capitalize(selectedCategory.toLowerCase());
        const date = separateDate(datePicker);
        const time = separateTime(datePicker);
        const payload = {
            body: {
                difficulty: selectDifficulty,
                type: cardType,
                title: cardTitle,
                date: date,
                time: time,
                category: cardCategory,
            },
            id: cardId,
        };

        const isCardValid = (payload) => {
            editCard(payload);
            setTitle('')
            onCancel();
        };

        title ? isCardValid(payload) : setIsError('Title is missing');
    };

    return (
        <Card
            isEdited={isEdited}
            cardType={cardChallenge}
        >
            <Header
                onClick={openDifficultyMenu}
                difficulty={selectedDifficulty}
                cardType={cardChallenge}
            />
            <SelectionMenu
                dataType={'difficulty'}
                anchorEl={anchorDifficulty}
                isOpen={openDifficultyMenu}
                menuItemData={difficulty}
                onClose={selectDifficulty}
                selectedData={selectDifficulty}
            />
            <Inputs
                action={'Edit'}
                title={title}
                onCancel={onCancel}
                cardType={cardChallenge}
                onTitleChange={handleTitleChange}
                dateTime={datePicker}
                onDateTimeChange={setDatePicker}
                placeholder={isError && isError}
            />
            <Footer
                action={'Edit'}
                category={selectedCategory}
                onClick={openCategoryMenu}
                onCancelClick={toggleModal}
                onStartClick={handleEdition}
            />
            <SelectionMenu
                dataType={'category'}
                anchorEl={anchorCategory}
                isOpen={openCategoryMenu}
                menuItemData={category}
                onClose={selectCategory}
                selectedData={selectedCategory}
            />
            <DeleteModal 
                isOpen={isModalOpen}
                modalContent={`Delete this ${cardType === "Task" ? "Quest" : cardType}`}
                nameOfConfirm='Delete'
                cancelAction={toggleModal}
                confirmAction={() => deleteCard(cardId)}
            />
        </Card>
    );
};