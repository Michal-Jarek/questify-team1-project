import React from 'react';
import { Card } from '../Card/Card';
import { List } from './QuestList.styled';

export const QuestList = ({ groupName, sortByGroup }) => {
    
    return (
        <List>
            {sortByGroup(groupName).map((card) => (
                <Card
                    key={card._id}
                    {...card}
                />
            ))}
        </List>
    );
};