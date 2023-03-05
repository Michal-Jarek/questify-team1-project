import { Done } from 'components/Card/Done/Done';
import React from 'react';
import { useSelector } from 'react-redux';
import { Loader } from 'components/Loader/Loader';
import { CardGroup } from './CardGroup';
import { useGetAllCardsQuery } from 'redux/auth/questifyApi';

export const CardGroupContainer = () => {
	const challengeState = useSelector(state => state.user.challengeFIlter);

	const { data: { cards } = [], isLoading, isSuccess, isError, error } = useGetAllCardsQuery();

	let sortedCards = cards;
	if (cards) {
		sortedCards = [...cards].sort((card1, card2) => {
			const date1 = new Date(card1.date + ' ' + card1.time);
			const date2 = new Date(card2.date + ' ' + card2.time);
			return date1 - date2;
		});
	}

	const renderView = () => {
		if (isLoading) {
			<Loader>...</Loader>;
		} else if (isSuccess) {
			return (
				<>
					{!challengeState ? (
						<>
							<CardGroup cards={sortedCards} groupName='create new card' hideLabel={false} />
							<CardGroup cards={sortedCards} groupName='past' hideLabel={false} />
							<CardGroup cards={sortedCards} groupName='today' hideLabel={false} />
							<CardGroup cards={sortedCards} groupName='tomorrow' hideLabel={false} />
							<CardGroup cards={sortedCards} groupName='upcoming' hideLabel={false} />
						</>
					) : (
						<CardGroup cards={sortedCards} groupName='challenge' />
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