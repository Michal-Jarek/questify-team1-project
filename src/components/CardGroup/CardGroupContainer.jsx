import { Done } from "components/Card/Done/Done";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "components/Loader/Loader";
import { CardGroup } from "./CardGroup";
import { useGetAllCardsQuery } from "redux/auth/questifyApi";
import { appState, returnAllCards } from "redux/auth/cardsSelectors";
import { setAllCards } from "redux/auth/cardsSlice";

export const CardGroupContainer = () => {
  const response = useSelector(returnAllCards);

  console.log("odświeżam");
  if (response?.status) console.log(response);

  console.log("przed fetch");
  const challengeState = useSelector((state) => state.user.challengeFIlter);

  //const dispatch = useDispatch();
  //   useEffect(() => {
  //     const Fetch = () => {
  //       const cos = useGetAllCardsQuery();
  //       return cos;
  // 	  };
  // 	  console.log("w useefect");
  // 	  console.log(Fetch);
  // 	  console.log("po useefect");
  //   }, []);
  // const cards = [
  //     // { id: 1, title: 'Test Name 1', difficulty: 'Easy', category: 'work', type: 'Task', date: '2023-02-24', time: '14:30' },
  //     // { id: 2, title: 'Test Name 2', difficulty: 'Normal', category: 'leisure', type: 'Task', date: '2023-02-25', time: '14:30' },
  //     // { id: 3, title: 'Test Name 3', difficulty: 'Hard', category: 'health', type: 'Challenge', date: '2023-02-23', time: '12:31' },
  //     // { id: 4, title: 'Test Name 4', difficulty: 'Easy', category: 'stuff', type: 'Task', date: '2023-02-22', time: '14:30' },
  //     // { id: 5, date: '2023-03-21', title: 'Kaboom', difficulty: 'Hard', category: 'work', type: 'Task' },
  // ];

  let sortedCards = cards;
  if (cards) {
    sortedCards = [...cards].sort((card1, card2) => {
      const date1 = new Date(card1.date + " " + card1.time);
      const date2 = new Date(card2.date + " " + card2.time);
      return date1 - date2;
    });
  }
  console.log(useGetAllCardsQuery());
  console.log(useGetAllCardsQuery());
  console.log(cards);
  console.log(cards);
  const renderView = () => {
    if (isLoading) {
      <Loader>...</Loader>;
    } else if (isSuccess) {
      return (
        <>
          {!challengeState ? (
            <>
              <CardGroup
                cards={sortedCards}
                groupName="create new card"
                hideLabel={false}
              />
              <CardGroup
                cards={sortedCards}
                groupName="past"
                hideLabel={false}
              />
              <CardGroup
                cards={sortedCards}
                groupName="today"
                hideLabel={false}
              />
              <CardGroup
                cards={sortedCards}
                groupName="tomorrow"
                hideLabel={false}
              />
              <CardGroup
                cards={sortedCards}
                groupName="upcoming"
                hideLabel={false}
              />
            </>
          ) : (
            <CardGroup cards={sortedCards} groupName="challenge" />
          )}
          <Done card={cards} />
        </>
      );
    } else if (!isSuccess) {
      return <p>There are no quests on the board!</p>;
    } else if (isError) {
      return isError && <p>Error: {error}</p>;
    }
  };

  let listView = renderView();

  return <>{listView}</>;
};
