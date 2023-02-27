import React from 'react';
import { useSelector } from 'react-redux';
import { Loader } from 'components/Loader/Loader';
import { CardGroup } from './CardGroup';
import { useGetAllCardsQuery } from 'redux/auth/authOperations';

export const CardGroupContainer = () => {
    const challengeState = useSelector((state) => state.user.challengeFIlter);

    // const cards = [
    //     // { id: 1, title: 'Test Name 1', difficulty: 'Easy', category: 'work', type: 'Task', date: '2023-02-24', time: '14:30' },
    //     // { id: 2, title: 'Test Name 2', difficulty: 'Normal', category: 'leisure', type: 'Task', date: '2023-02-25', time: '14:30' },
    //     // { id: 3, title: 'Test Name 3', difficulty: 'Hard', category: 'health', type: 'Challenge', date: '2023-02-23', time: '12:31' },
    //     // { id: 4, title: 'Test Name 4', difficulty: 'Easy', category: 'stuff', type: 'Task', date: '2023-02-22', time: '14:30' },
    //     // { id: 5, date: '2023-03-21', title: 'Kaboom', difficulty: 'Hard', category: 'work', type: 'Task' },
    // ];

    const {
        data: { cards } = [],
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetAllCardsQuery();

    const renderView = () => {
        if (isLoading) {
            <Loader>...</Loader>
        } else if (isSuccess) {
            return (
                <>
                    {!challengeState ? (
                        <>
                            <CardGroup
                                cards={cards}
                                groupName="create new card"
                            />
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
                    ) : (
                        <CardGroup
                            cards={cards}
                            groupName='challenge'
                        />
                    )}
                </>
            );
        } else if (!isSuccess) {
            return (
                <p>There are no quests on the board!</p>
            );
        } else if (isError) {
            return isError && <p>Error: {error}</p>
        };
    };

    let listView = renderView();

    return (
        <>
            {listView}
        </>
    );
};