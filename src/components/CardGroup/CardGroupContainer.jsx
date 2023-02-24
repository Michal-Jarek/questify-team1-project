import React from 'react';
// import { useSelector } from 'react-redux';
import { CardGroup } from './CardGroup';
// import { useGetAllCardsQuery } from 'redux/auth/authOperations';

export const CardGroupContainer = () => {

    // const challengeState = useSelector((state) => state.user.challengeFIlter);

    const cards = [
        { id: 1, title: 'Test Name 1', difficulty: 'Easy', category: 'work', type: 'Task', date: '2023-02-24', time: '14:30' },
        { id: 2, title: 'Test Name 2', difficulty: 'Normal', category: 'leisure', type: 'Task', date: '2023-02-25', time: '14:30' },
        { id: 3, title: 'Test Name 3', difficulty: 'Hard', category: 'health', type: 'Challenge', date: '2023-02-23', time: '12:31' },
        { id: 4, title: 'Test Name 4', difficulty: 'Haed', category: 'stuff', type: 'Challenge', date: '2023-02-22', time: '14:30'},
    ];

    // const {
    //     data: {cards }= [],
    // } = useGetAllCardsQuery;

    return (
        <>
            <CardGroup
                cards={cards}
                groupName='past' />
            <CardGroup
                cards={cards}
                groupName='today' />
            <CardGroup
                cards={cards}
                groupName='tomorrow' />
            <CardGroup
                cards={cards}
                groupName='upcoming' />
        
        </>
    );
};