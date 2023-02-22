// import React from 'react';
// import { useSelector } from 'react-redux';
// import { QuestList } from '../QuestList/QuestList';
// import { todayDateInMs, tomorrowDateInMs } from '../Card/helperFunctions/dateAndTime/time';
// import { Div, GroupTitle } from './CardGroup.styled';

// export const CardGroup = ({ cards, groupName }) => {

//     const today = (date) => date === todayDateInMs;

//     const tomorrow = (date) => date === tomorrowDateInMs;

//     const assignCard = (cardData) => {
//         const { date } = cardData;
//         const checkedDate = new Date(date).getTime();

//         if (checkedDate < todayDateInMs) return 'past';
//         if (today(checkedDate)) return 'today';
//         if (tomorrow(checkedDate)) return 'tomorrow';
//         if (checkedDate > tomorrowDateInMs) return 'upcoming';
//     };

//     const sortByGroup = (groupName) => {
//         if (challengeState) {
//             return cards.filter((card) => card.type === 'Challange')
//         } else {
//             return cards.filter((card) => assignCard(card) === groupName);
//         }
//     }
//     return (
//         <Div>
//             <GroupTitle>
//                 <p>{groupName}</p>
//                 {sortByGroup(groupName)}
//             </GroupTitle>
//             <QuestList
//                 groupName={groupName}
                
//             />
//         </Div>
//     )
// };