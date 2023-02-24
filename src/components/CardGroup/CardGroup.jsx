import React from 'react';
import { useSelector } from 'react-redux';
import { QuestList } from '../QuestList/QuestList';
// import { ReactComponent as ListUp } from './images/btnUp.svg';
// import { ReactComponent as ListDown } from './images/btnDown.svg';
import { todayDateInMs, tomorrowDateInMs } from '../Card/helperFunctions/dateAndTime/time';
import { Div, GroupTitle } from './CardGroup.styled';

export const CardGroup = ({ cards, groupName }) => {
    const challengeState = useSelector((state) => state.user.challengeFIlter);

    const today = (date) => date === todayDateInMs;
    const tomorrow = (date) => date === tomorrowDateInMs;

    const assignCard = (cardData) => {
        const { date } = cardData;
        const checkedDate = new Date(date).getTime();

        if (checkedDate < todayDateInMs) return 'past';
        if (today(checkedDate)) return 'today';
        if (tomorrow(checkedDate)) return 'tomorrow';
        if (checkedDate > tomorrowDateInMs) return 'upcoming';
    };

    const sortByGroup = (groupName) => {
        if (challengeState) {
            return cards.filter(card => card.type === 'Challange');
        } else {
            return cards.filter(card => assignCard(card) === groupName);
        };
    };

    const filter = () => {
        if (challengeState) {
            return cards.filter(card => card.type === 'Challange');
        } else {
            return cards.filter(card => assignCard(card) === groupName);
        };
    };

    return (
        <Div>
            <GroupTitle>
                {sortByGroup(groupName).length > 0 &&
                    <p>{groupName}
                        {/* <>
                            <ListDown />
                            <span></span>
                        </> */}
                    </p>}
            </GroupTitle>
            <QuestList
                groupName={groupName}
                sortByGroup={filter}
            />
        </Div>
    );
};