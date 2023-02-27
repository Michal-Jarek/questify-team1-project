import React, { useState } from 'react';
import dayjs from 'dayjs';
import { Header } from './Header/Header';
import { Inputs } from './Inputs/Inputs';
import { Footer } from './Footer/Footer';
import DeleteModal from '../DeleteModal/DeleteModal';
import { SelectionMenu } from '../CardEdition/SelectionMenu/SelectionMenu';
import { useEditCardMutation, useDeleteCardMutation } from '../../redux/auth/authOperations';
import { separateDate, separateTime } from '../Card/helperFunctions/dateAndTime/separateFunctions';
import { useEditOptions } from '../../utils/hooks/useEditOptions';
import { difficulty, category } from '../../utils/cardData/cardData';
import { Card } from './CardEdition.styled';

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
    const [editCard] = useEditCardMutation();
    const [deleteCard] = useDeleteCardMutation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [title, setTitle] = useState(cardTitle);
    const [type] = useState(cardType)
    const [datePicker, setDatePicker] = useState(dayjs(cardTime));
    const [isError, setIsError] = useState('');

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
                difficulty: selectedDifficulty,
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
            setTitle('');
            onCancel();
        };

        title ? isCardValid(payload) : setIsError('Title is missing');
    };

    return (
        <Card
            isOpen={isOpen}
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
                isOpen={isDifficultyMenuOpen}
                menuItemData={difficulty}
                onClose={selectDifficulty}
                selectedData={selectedDifficulty}
            />
            <Inputs
                action={'Edit'}
                titleValue={title}
                onCancel={onCancel}
                cardType={cardChallenge} 
                onTitleChange={handleTitleChange}
                dateTimeValue={datePicker}
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
                isOpen={isCategoryMenuOpen}
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