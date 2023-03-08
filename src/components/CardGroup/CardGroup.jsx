import React from 'react';
import { useSelector } from 'react-redux';
import { QuestList } from '../QuestList/QuestList';
import { todayDateInMs, tomorrowDateInMs } from '../Card/helperFunctions/dateAndTime/time';
import { Div, GroupTitle } from './CardGroup.styled';

export const CardGroup = ({ cards, groupName, hideLabel }) => {
	const challengeState = useSelector(state => state.user.challengeFIlter);

	const assignCard = cardData => {
		const { date, status, _id } = cardData;
		const checkedDate = new Date(date).getTime();
		const dateWithoutTime = new Date(date).setHours(0, 0, 0, 0);
		const today = new Date().setHours(0, 0, 0, 0);
		const tomorrow = new Date(new Date().setDate(new Date().getDate() + 1)).setHours(0, 0, 0, 0);

		if (_id === "new") return "create new card";
		if (status === 'complete') return 'done';
		if (checkedDate < todayDateInMs) return 'past';
		if (today === dateWithoutTime) return 'today';
		if (tomorrow === dateWithoutTime) return 'tomorrow';
		if (checkedDate > tomorrowDateInMs) return 'upcoming';
		

	};

	const sortByGroup = groupName => {
		if (challengeState) {
			return cards.filter(card => card.type === 'Challange');
		} else {
			return cards.filter(card => assignCard(card) === groupName);
		}
	};

	const filter = () => {
		if (challengeState) {
			return cards.filter(card => card.type === 'Challange');
		} else {
			return cards.filter(card => assignCard(card) === groupName);
		}
	};

	return (
		<Div>
			{hideLabel ? null : <GroupTitle>{sortByGroup(groupName).length > 0 && <p>{groupName}</p>}</GroupTitle>}
			<QuestList groupName={groupName} sortByGroup={filter} />
		</Div>
	);
};
